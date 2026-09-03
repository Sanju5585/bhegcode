import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  standalone: false,
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  disable = true;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      type: string;
      title: string;
      message: string;
      isI18n?: boolean;
    },
    public dialofRef: MatDialogRef<DialogComponent>,
    private router: Router
  ) {}

  ngOnInit() {
    this.dialofRef.disableClose = true;
  }

  radioBtnChange(value) {
    if (value == 'yes') {
      this.disable = false;
    } else if (value == 'no') {
      this.disable = true;
    }
  }
  doSubmit() {
    const preUrl =
      environment.occBaseUrl + environment.occPrefix + environment.occBaseSite;
    preUrl + '/login';
    // this.router.navigate(preUrl);
  }
}
