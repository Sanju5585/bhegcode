import { Component, SecurityContext } from '@angular/core';
import {
  Configurator,
  ConfiguratorCommonsService,
} from '@spartacus/product-configurator/rulebased';
import {
  CommonConfigurator,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
import { map, switchMap } from 'rxjs/operators';
import { Product, ProductService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../../../core/generic-validator/regular-expressions';
import { ApiService } from '../../../../core/http/api.service';
import { FileProgressLayouts } from '../../../../shared/models/fileSize.model';
import { AllProductLine } from '../../../../shared/enums/availableProductList.enum';
@Component({
  standalone: false,
  selector: 'app-configurator-have-aquestion-model',
  templateUrl: './configurator-have-aquestion-model.component.html',
  styleUrls: ['./configurator-have-aquestion-model.component.scss'],
})
export class ConfiguratorHaveAquestionModelComponent {
  createForm = this.fb.group({
    customerQuery: ['', Validators.required],
    productCode: '',
    businessLine: '',
  });

  modalIsOpen = false;
  reason: any;
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf', 'png'];
  showIcon: boolean = true;
  readonly layouts = FileProgressLayouts;
  file: File;
  files = [];
  fileName: string;
  userType: string;
  isLoggedIn: boolean;
  showQueryError = false;
  nameErrorMessage = '';
  custQuerry: string;
  productLine: any;
  customerContact: any;
  productname: string;
  productCode: string;

  constructor(
    private launchDialogService: LaunchDialogService,
    protected configuratorCommonsService: ConfiguratorCommonsService,
    protected configRouterExtractorService: ConfiguratorRouterExtractorService,
    protected productService: ProductService,
    private custAccService: CustomerAccountService,
    private fb: FormBuilder,
    private apiService: ApiService,
    private authService: AuthService,
    private globalMessageService: GlobalMessageService,
    public sanitizer: DomSanitizer,
    private translate: TranslationService
  ) {}
  configuration$: Observable<Configurator.Configuration> =
    this.configRouterExtractorService.extractRouterData().pipe(
      switchMap((routerData) => {
        return this.configuratorCommonsService.getConfiguration(
          routerData.owner
        );
      })
    );

  product$: Observable<Product> = this.configRouterExtractorService
    .extractRouterData()
    .pipe(
      switchMap((routerData) =>
        this.configuratorCommonsService.getConfiguration(routerData.owner)
      ),
      map((configuration) => {
        switch (configuration.owner.type) {
          case CommonConfigurator.OwnerType.PRODUCT:
          case CommonConfigurator.OwnerType.CART_ENTRY:
            return configuration.productCode;
          case CommonConfigurator.OwnerType.ORDER_ENTRY:
            return configuration.overview.productCode;
        }
      }),
      switchMap((productCode) => this.productService.get(productCode))
    );

  ngOnInit() {
    this.launchDialogService.data$.subscribe(() => {});
    this.custAccService.getProductLine().subscribe((productLine) => {
      this.productLine = productLine;
      this.displayCustomerContact();
    });

    this.authService.isUserLoggedIn().subscribe((success) => {
      if (success) {
        this.isLoggedIn = true;
        this.userType = 'current';
      } else {
        this.isLoggedIn = false;
        this.userType = 'anonymous';
      }
    });

    this.product$.subscribe((res) => {
      if (res) {
        this.productname = res.name;
        (this.productCode = res.code),
          (this.createForm = this.fb.group({
            customerQuery: [''],
            productCode: [this.productCode],
            businessLine: [this.productLine],
          }));
      }
    });
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  displayCustomerContact() {
    if (this.productLine == AllProductLine.waygate) {
      this.customerContact =
        'https://www.bakerhughes.com/waygate-technologies/customer-care-contact';
    } else if (this.productLine == AllProductLine.bently) {
      this.customerContact = 'https://www.bently.com/support';
    } else if (this.productLine == AllProductLine.panametrics) {
      this.customerContact = 'https://www.panametrics.com/support';
    } else if (this.productLine == AllProductLine.druck) {
      this.customerContact =
        'https://www.bakerhughes.com/druck/contact/druck-customer-care-contacts';
    } else {
      this.customerContact =
        'Customer care contact is not available now since productine value is missing';
    }
  }
  onSubmit() {
    let formobj = this.createForm.value;
    this.nameErrorMessage = '';
    this.custQuerry = testRegex(
      this.sanitizer.sanitize(
        SecurityContext.HTML,
        this.createForm.value.customerQuery.trim()
      ),
      REGULAR_PATTERN.alphaNumericWithSpecialCharater
    );
    if (!this.custQuerry.trim().length) {
      this.showQueryError = true;
      this.nameErrorMessage = 'Enter your query';
      return;
    }
    this.handlePostRequest(formobj).subscribe(
      (success: any) => {
        this.globalMessageService.add(
          this.getTranslatedText('waygate.issueSendingQuery'),

          GlobalMessageType.MSG_TYPE_CONFIRMATION,
          9000
        );
        window.scrollTo(0, 0);
      },
      (error: any) => {
        this.globalMessageService.add(
          this.getTranslatedText('waygate.issueSendingQuery'),
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
    this.close('haveAquestion-modal-confirm');
  }

  handlePostRequest(formobj) {
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append(
      'haveQuestionWsDTO',
      new Blob([JSON.stringify(formobj)], {
        type: 'application/json',
      })
    );
    const params = ['users', this.userType, 'query'];
    const apiUrl = this.apiService.constructUrl(params);

    return this.apiService.postData(apiUrl, formData, { responseType: 'text' });
  }
  close(reason?: any): void {
    this.reason = reason;
    this.launchDialogService.closeDialog(this.reason);
  }

  selectedFiles(event) {
    this.files = event;
    this.file = this.files[0];
  }

  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }
}
