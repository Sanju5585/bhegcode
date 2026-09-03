import { Component } from '@angular/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  selector: 'app-eca-eca-missing-dialog-component',
  standalone: false,
  templateUrl: './eca-eca-missing-dialog-component.component.html',
  styleUrl: './eca-eca-missing-dialog-component.component.scss'
})
export class EcaEcaMissingDialogComponentComponent {
    emptyEcaProducts:any =[];
   constructor(private launchDialogService: LaunchDialogService) {}
    ngOnInit(): void {
      this.launchDialogService.data$.subscribe((data: any) => {
        this.emptyEcaProducts = data?.emptyEcaProducts;
      });
    }

    onClose(reason) {
      this.launchDialogService.closeDialog(reason);
    }


    okClick() {
      this.launchDialogService.closeDialog('OK');
    }

}


