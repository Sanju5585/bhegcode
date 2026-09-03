import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { OccEndpointsService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../../../core/http/api.service';
import { FeedbackService } from '../../../../feature/feedback/feedback.service';
import { FileProgressLayouts } from '../../../models/fileSize.model';

@Component({
  standalone: false,
  selector: 'ds-file-upload-progress',
  templateUrl: './file-upload-progress.component.html',
  styleUrls: ['./file-upload-progress.component.scss'],
})
export class FileUploadProgressComponent implements OnInit {
  readonly layouts = FileProgressLayouts;

  @Input()
  showProgress = true;

  @Input()
  layout = this.layouts.BOX;

  @Input()
  uploadUrl: string;

  @Input()
  uploadParams;

  @Input()
  deleteParams;

  @Input()
  deleteUrl: string;

  @Input()
  file?: File;

  @Input()
  fileFormDataName: string = 'file';

  @Input()
  uploaded: boolean = false;

  @Input()
  uploadSuccess = 'LOADING';

  @Input()
  entryNumber: number;

  @Output()
  deletedFiles = new EventEmitter<File>();

  @Output()
  fileUploadCode = new EventEmitter<string>();

  @Input()
  deleteMethod = 'POST';

  progressInfo: number;
  constructor(
    private http: HttpClient,
    private occEndpointsService: OccEndpointsService,
    private cdRef: ChangeDetectorRef,
    private apiService: ApiService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.uploadFile();
  }

  uploadFile() {
    this.cdRef.detectChanges();
    if (!this.uploadUrl) {
      return;
    }
    if (this.uploaded) return this.progressInfo == 100;
    if (this.feedbackService.getVal()) {
      this.removeFile();
      this.feedbackService.setVal(false);
      return this.progressInfo == 100;
    }
    const formData = new FormData();
    formData.append(this.fileFormDataName, this.file);
    const apiUrl = this.occEndpointsService.buildUrl(this.uploadUrl, {
      queryParams: this.uploadParams,
    });
    this.uploadFileWithProgress(apiUrl, formData, {
      reportProgress: true,
      responseType: 'text' as 'json',
      observe: 'events',
    })
      .pipe(
        map((event: any) => {
          this.cdRef.detectChanges();
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfo = Math.round((100 * event.loaded) / event.total);
            if (this.progressInfo == 100) {
            }
          } else if (event instanceof HttpResponse) {
            let code = event.body;
            this.fileUploadCode.emit(code);
          }
        })
      )
      .subscribe(
        (success) => {
          if (this.progressInfo == 100) this.uploadSuccess = 'SUCCESS';
        },
        (error) => {
          this.uploadSuccess = 'FAILURE';
        }
      );
  }

  removeFile() {
    if (this.deleteUrl) {
      this.deleteParams = {
        ...this.deleteParams,
        fileName: this.file?.name,
        entryNumber: this.entryNumber,
      };
      const apiUrl = this.occEndpointsService.buildUrl(this.deleteUrl, {
        queryParams: this.deleteParams,
      });
      if (this.deleteMethod === 'POST') {
        this.apiService
          .postData(apiUrl, {}, { responseType: 'text' as 'json' })
          .subscribe((res) => {
            this.deletedFiles.emit(this.file);
          });
      } else {
        this.apiService
          .getData(apiUrl, { responseType: 'text' as 'json' })
          .subscribe((res) => {
            this.deletedFiles.emit(this.file);
          });
      }
    } else {
      this.deletedFiles.emit(this.file);
    }
  }

  private uploadFileWithProgress(
    API_URL: string,
    requestBody: any,
    options?: any
  ) {
    return this.http.post(API_URL, requestBody, options);
  }

  getFileSize = (fileSize) => {
    if (Math.round((fileSize / 1024) * 1000) / 1000 >= 1024.0) {
      return (Math.round(fileSize / 1024) / 1024).toFixed(2) + ' mb';
    }
    if (Math.round((fileSize / 1024) * 1000) / 1000 < 1024.0) {
      return (Math.round((fileSize / 1024) * 1000) / 1000).toFixed() + ' kb';
    }
  };
}
