import { Component, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MyFavoritesService } from './my-favorites.service';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { take } from 'rxjs/operators';
import {
  testRegex,
  REGULAR_PATTERN,
} from '../../core/generic-validator/regular-expressions';
import { BreadcrumbService } from '../../shared/components/breadcrumb/breadcrumb.service';
import {
  ItemListTypeEnum,
  GtmEvents,
  StoreTypeEnum,
} from '../../shared/enums/gtm.enum';
import {
  EcommerceItem,
  Ecommerce,
  GTMDataLayer,
} from '../../shared/models/googleTagManager.model';
import { GoogleTagManagerService } from '../../shared/services/gtm.service';

@Component({
  standalone: false,
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.scss'],
})
export class MyFavoritesComponent implements OnInit {
  checkedSingleFav: boolean = false;
  noData: boolean = true;
  loadingFlag: boolean = false;
  full = true;
  isPriceNotFound = false;
  favouritesData: any;
  searchTerm: string = '';
  searchflag: boolean = true;
  indeterminateValue: any;
  pageNumber: any;
  totalPages: any;
  currentPage = 0;
  pageSize: 20;
  totalOrders_excel: any;
  favMsg: any;

  constructor(
    private myfavouritedelete: MyFavoritesService,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    public sanitizer: DomSanitizer,
    private gtmService: GoogleTagManagerService
  ) {}

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('favorites.pageTitle')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.loadingFlag = true;
    this.getFavoritesdata('');
    this.checkAll();
  }
  /* checkbox selection all */
  selectAllchecbox(e) {
    this.checkedSingleFav = e.target.checked;
    this.favouritesData?.productList.map(
      (code) => (code['checked'] = e.target.checked)
    );
    this.checkAll();
  }
  /* single checkbox selection all */
  selectCheckbox(e, i) {
    this.favouritesData.productList[i]['checked'] = e.target.checked;
  }
  /*loading data */
  getFavoritesdata(searchTerm) {
    this.loadingFlag = true;
    this.myfavouritedelete
      .getFavourites(searchTerm, 0)
      .pipe(take(1))
      .subscribe(
        (code) => {
          this.currentPage = 0;
          this.favouritesData = code;
          this.totalPages = this.favouritesData.pagination.totalPages;
          this.loadingFlag = false;
        },
        (error) => {}
      );
  }
  /*Delete of favourites Data */
  DeleteFavorites(e, type, index) {
    var selectedItemcode = [];
    var delectcheckall = document.getElementById('checkall');
    var ismultislecttrue = delectcheckall['isChecked'];
    if (type == 'deleteselected') {
      for (var i = 0; i < this.favouritesData.productList?.length; i++) {
        if (
          this.favouritesData.productList[i]['checked'] == true ||
          ismultislecttrue == true
        ) {
          selectedItemcode.push(this.favouritesData.productList[i].code);
          this.globalMessageService.add(
            this.getTranslatedText('favorites.error.removeMsg'),
            GlobalMessageType.MSG_TYPE_CONFIRMATION,
            2000
          );
        }
      }
    } else {
      selectedItemcode.push(this.favouritesData.productList[index].code);
      this.globalMessageService.add(
        this.getTranslatedText('favorites.error.removeMsg'),
        GlobalMessageType.MSG_TYPE_CONFIRMATION,
        2000
      );
    }
    this.myfavouritedelete
      .removeFromWishlist(selectedItemcode)
      .pipe(take(1))
      .subscribe((code) => {
        this.pageNumber = 0;
        this.myfavouritedelete
          .getFavourites(this.searchTerm, this.pageNumber)
          .pipe(take(1))
          .subscribe(
            (code: any) => {
              this.favouritesData = code;
              this.currentPage = this.favouritesData.pagination.currentPage;
              this.totalPages = this.favouritesData.pagination.totalPages;
              this.loadingFlag = false;
            },
            (error) => {}
          );
      });
    this.getFavoritesdata('');
  }
  fetchCheckPriceProduct(event, i) {
    if (Object.keys(event.price).length > 0) {
      this.favouritesData.productList[i].price = event.price;
      this.favouritesData.productList[i].isPriceNotFound = false;
    } else {
      this.favouritesData.productList[i].isPriceNotFound = true;
    }
  }
  /* search function */
  modelChange(e) {
    this.searchTerm = testRegex(
      this.sanitizer.sanitize(SecurityContext.HTML, this.searchTerm.trim()),
      REGULAR_PATTERN.alphaNumeric
    );
    this.getFavoritesdata(this.searchTerm);
    this.searchflag = false;
    this.loadingFlag = false;
  }
  /*indeterminate checkbox  function */
  checkAll() {
    this.indeterminateValue = false;
    let checkedcount = 0;
    this.favouritesData?.productList.map((code) => {
      if (code.checked == true) {
        checkedcount++;
      }
    });
    if (checkedcount == this.favouritesData?.productList?.length) {
      return true;
    } else {
      if (
        checkedcount > 0 &&
        checkedcount < this.favouritesData?.productList?.length
      ) {
        this.indeterminateValue = true;
        return false;
      }
      return false;
    }
  }
  /* clear search */
  clearSearch() {
    this.searchflag = true;
    this.searchTerm = '';
    this.getFavoritesdata('');
  }
  /*lazy loading */
  loadMoreOrders() {
    this.pageNumber = this.currentPage;
    if (this.pageNumber < this.totalPages) {
      this.pageNumber++;
    }
    if (this.pageNumber < this.totalPages) {
      this.myfavouritedelete
        .getFavourites(this.searchTerm, this.pageNumber)
        .pipe(take(1))
        .subscribe((code: any) => {
          if (code !== null && code !== undefined) {
            if (code.pagination !== undefined) {
              this.favouritesData.productList.push(...code.productList);
              this.loadingFlag = false;
              this.currentPage = code.pagination.currentPage;
              this.totalPages = code.pagination.totalPages;
              this.totalOrders_excel = code.pagination.totalResults;
            } else {
              this.currentPage = 0;
              this.totalPages = 0;
              this.totalOrders_excel = 0;
            }
          } else {
            this.globalMessageService.add(
              this.getTranslatedText('favorites.error.loadingMsg'),
              GlobalMessageType.MSG_TYPE_ERROR,
              5000
            );
            window.scrollTo(0, 0);
          }
          (error) => {};
        });
    } else {
    }
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  //Google Analytics
  gtmSelectItemEvent(product, indx) {
    if (product) {
      let producitem: EcommerceItem[] = [];

      producitem.push({
        item_id: product?.code,
        item_name: product?.name,
        discount: product?.discountPercentage
          ? +product?.discountPercentage
          : '',
        index: indx,
        item_brand: this.gtmService.getItemBrand(),
        item_list_id: ItemListTypeEnum.MyFavourite,
        item_list_name: ItemListTypeEnum.MyFavourite,
        price: product?.discountPrice ? +product?.discountPrice : '',
        item_category: product?.parentCategoryName,
      });
      let purchaseEcommerceEcommerce: Ecommerce = {
        item_list_id: ItemListTypeEnum.MyFavourite,
        item_list_name: ItemListTypeEnum.MyFavourite,
        items: producitem,
      };
      let selectItemDataLayer: GTMDataLayer = {
        event: GtmEvents.SelectItem,
        store: StoreTypeEnum.Dsstore,
        ecommerce: purchaseEcommerceEcommerce,
      };
      this.gtmService.sendEvent(selectItemDataLayer);
    }
  }
}
