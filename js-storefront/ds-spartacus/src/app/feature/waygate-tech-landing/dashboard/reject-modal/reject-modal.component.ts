import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LaunchDialogService } from '@spartacus/storefront';
import { AccountStatus } from '../dashboard.model';

@Component({
  standalone: false,
  selector: 'app-reject-modal',
  templateUrl: './reject-modal.component.html',
  styleUrls: ['./reject-modal.component.scss'],
})
export class RejectModalComponent implements OnInit {
  form!: FormGroup;
  status!: string;
  hasWhiteSpace: any;
  commentValue: any;
  submit: boolean = false;
  actionTitle = {
    [AccountStatus.approved]: `dashboard.approveBtnText`,
    [AccountStatus.rejected]: `dashboard.rejectBtnText`,
    [AccountStatus.onHold]: `dashboard.holdBtnText`,
  };
  constructor(protected launchDialogService: LaunchDialogService) {
    this.form = new FormGroup({
      comment: new FormControl(null, []),
    });
  }

  ngOnInit(): void {
    this.launchDialogService.data$.subscribe((data) => {
      this.status = data?.status;
      if (AccountStatus.rejected == this.status) {
        this.form.controls['comment'].setValidators([
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(250),
        ]);
      } else {
        this.form.controls['comment'].clearValidators();
      }
      this.form.controls['comment'].updateValueAndValidity();
    });
  }

  closeModal(): void {
    this.launchDialogService.closeDialog({ action: 'close' });
  }

  onSubmit() {
    this.submit = true;
    if (this.status === AccountStatus.rejected) {
      this.commentValue = this.form.get('comment');
      if (this.commentValue) {
        let maxLen = 250;
        const val = this.commentValue.value || '';
        const whiteSpaceError = this.noWhitespaceValidator(this.commentValue) || {};
        const lengthErr = val.length > maxLen ? { maxLen: { requiredLength: maxLen, actualLength: val.length } } : {};

        let allErrors = { ...(this.commentValue.errors || {}), ...whiteSpaceError, ...lengthErr };
        this.commentValue.setErrors(Object.keys(allErrors).length ? allErrors : null);
        this.form.updateValueAndValidity({ emitEvent: false });
      }
    }
    if (this.form.valid) {
      const data = {
        action: 'submit',
        comment: this.form.value.comment,
      };
      this.launchDialogService.closeDialog(data);
    }
  }

  public noWhitespaceValidator: ValidatorFn = (control: FormControl): Validators | null =>  {
    return (control.value || '').trim().length ? null : { whitespace: true };
  }
}
