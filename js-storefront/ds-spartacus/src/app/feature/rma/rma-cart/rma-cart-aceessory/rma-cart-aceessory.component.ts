import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OCC_USER_ID_CURRENT } from '@spartacus/core';
import { RmaService } from '../../rma-services/rma.service';
import { HazardDetails } from '../../../../shared/models/commerceTypes.model';
import { RmaEntry } from '../../../../shared/models/rma/rma.model';

@Component({
  standalone: false,
  selector: 'ds-rma-cart-aceessory',
  templateUrl: './rma-cart-aceessory.component.html',
  styleUrls: ['./rma-cart-aceessory.component.scss'],
})
export class RmaCartAceessoryComponent implements OnInit {
  constructor(
    private rmaService: RmaService,
    private router: Router
  ) {}

  @Input()
  entryNumber: number;
  @Input()
  hazardStatus;
  @Input()
  accessory;
  @Input()
  product;

  hazardDetails = HazardDetails;

  ngOnInit(): void {}

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
        this.router.navigate(['rma-form']);
      });
  }
   decodeHtml(html: string): string {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  }
}
