import { Component, Input } from '@angular/core';
import { RmaService } from '../../../rma/rma-services/rma.service';
import { Router } from '@angular/router';
import { HazardDetails } from '../../../../shared/models/commerceTypes.model';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import { RmaEntry } from '../../../../shared/models/rma/rma.model';
import { CustomerAccountService } from '../../../../core/customer-account/customer-account.service';

@Component({
  selector: 'app-return-cart-accessory',
  standalone: false,
  templateUrl: './return-cart-accessory.component.html',
  styleUrl: './return-cart-accessory.component.scss'
})
export class ReturnCartAccessoryComponent {
  constructor(
    private rmaService: RmaService,
    private router: Router,
    private custAccService: CustomerAccountService
  ) {}

@Input()
entryNumber: number;
@Input()
accessory;
@Input()
product;

productLine: string;
createRMANativationPath: string;
hazardDetails = HazardDetails;

ngOnInit() {
  this.custAccService.getProductLine().subscribe((productLine) => {
    this.productLine = productLine;
      this.createRMANativationPath = `/${this.productLine}/create-rma`;
      //this.createRMANativationPath = '/rma-form';
  });
}

editRma() {
  this.rmaService
    .editRma(OCC_USER_ID_CURRENT, this.accessory.cartEntryNumber)
    .subscribe((rmaEntry: RmaEntry) => {
      rmaEntry = {
        ...rmaEntry,
        entryNumber: this.accessory.cartEntryNumber,
        parentServiceOfferings: this.product.offeringList,
      };
      rmaEntry.problemDescription = this.decodeHtml(rmaEntry.problemDescription);
      this.rmaService.sendRmaEntry(rmaEntry);
      this.router.navigate([this.createRMANativationPath]);
    });
}

 decodeHtml(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}