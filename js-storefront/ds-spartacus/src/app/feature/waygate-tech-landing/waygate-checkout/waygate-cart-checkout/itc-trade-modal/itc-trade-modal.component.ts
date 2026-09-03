import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslationService } from '@spartacus/core';

@Component({
  selector: 'app-itc-trade-modal',
  standalone: false,
  templateUrl: './itc-trade-modal.component.html',
  styleUrl: './itc-trade-modal.component.scss',
})
export class ItcTradeModalComponent {
  itcTradeText: string ;

  constructor(
    private matDialogRef: MatDialogRef<ItcTradeModalComponent>,
    private translate: TranslationService
  ) {
    this.matDialogRef.disableClose = true;
    this.translate
    .translate('labels.itcTradeMsg')
    .subscribe((res: string) => {
      this.itcTradeText = res
    })
  }

  closeModal(type: boolean) {
    this.matDialogRef.close({ proceed: type });
  }
}
