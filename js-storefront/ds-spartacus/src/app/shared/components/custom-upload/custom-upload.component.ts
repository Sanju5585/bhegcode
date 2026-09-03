import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../../services/upload.service';
import { ApiService } from '../../../core/http/api.service';
import { FileHandle } from './../../../shared/directives/drag-drop.directive';

@Component({
  standalone: false,
  selector: 'app-custom-upload',
  templateUrl: './custom-upload.component.html',
  styleUrls: ['./custom-upload.component.css'],
})
export class CustomUploadComponent implements OnInit {
  form: FormGroup;
  error: any;
  userId: number = 1;

  uploadResponse: any;
  fileData: { additionalAttachments: any };
  tempDataToAPI: any;
  files: FileHandle[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private uploadService: UploadService,
    private dataService: ApiService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      additionalAttachments: [''],
    });
    this.fileData = {
      additionalAttachments: [],
    };
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.fileData.additionalAttachments.push(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append(
      'additionalAttachments',
      this.form.get('additionalAttachments').value
    );

    this.tempDataToAPI = this.fileData.additionalAttachments[0];

    this.uploadService.upload(this.tempDataToAPI, formData).subscribe(
      (res) => (this.uploadResponse = res),
      (err) => (this.error = err)
    );
  }

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }
}
