/**
 * @author Indrajeet Gajbhiye
 * @objective customizable file upload component
 */
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileSizes } from '../../../models/fileSize.model';
import { TranslateService } from '../../../services/translate.service';

@Component({
  standalone: false,
  selector: 'ds-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  /**
   * @param {boolean} showIcon
   * @description to show Icon on button if there is a requirement
   */

  @Input()
  showIcon: boolean;

  /**
   * @param {string} icon
   * @description icon name according to google material design library https://fonts.google.com/icons?selected=Material+Icons
   */
  @Input()
  icon: string;

  /**
   * @param {string} label
   * @description button label ie. Add files, upload
   */
  @Input()
  label: string;

  @Input()
  multiple: boolean = true;

  /**
   * @param {number} maxSizeInMB
   * @description max total upload size in Mb, ie. 10, 20, 30. Pass 0 to avoid limitation.
   */
  @Input()
  maxSizeInMB: number = 0;

  /**
   * @param {number} maxFileSizeInMB
   * @description max individual file upload size in Mb, ie. 10, 20, 30. Pass 0 to avoid limitation.
   */
  @Input()
  maxFileSizeInMB: number = 0;

  /**
   * @param {number} maxLength
   * @description max number of files to upload, ie. 10, 15. Pass 0 to avoid limitation.
   */
  @Input()
  maxLength: number = 0;

  /**
   * @param {Array} allowedFileExtensions
   * @description array of all the allowed file extensions ie. ['pdf', 'doc', 'jpg'], values should be in lowercase. Pass [] to avoid limitation.
   */
  @Input()
  allowedFileExtensions = [];

  /**
   * @param {boolean} disableButton
   * @description in case we want to disable input from parent component.
   */
  @Input()
  disableButton: boolean = false;

  /**
   * @param {string} uploadId
   * @description pass upload id in every parent component
   */
  @Input()
  uploadId: string = 'uploadFile';

  /**
   * @param {string} isDragDrop
   * @description pass true in case drag and drop feature needs to be enabled
   */
  @Input()
  isDragDrop: boolean = false;

  /**
   * @param {File[]} selectedFiles
   * @description event to send Array of File (not FileList) to parent component.
   */
  @Output()
  selectedFiles = new EventEmitter<File[]>();

  files: FileList;
  fileSizes = FileSizes;
  fileLengthError: boolean = false;
  maxSizeError: boolean = false;
  maxFileSizeError: boolean = false;
  fileTypeError: boolean = false;
  fileList: File[] = [];
  pattern = /[`!@#$%^&*(){}]/;
  specialChar: boolean = false;
  isDragOver = false;
  sanitizeLable: any;
  constructor(
    private ts: TranslateService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['label']) {
      this.sanitizeLable = this.sanitizer.bypassSecurityTrustHtml(this.label);
    }
  }

  upload(event, fromDragDrop: boolean = false) {
    if (fromDragDrop) {
      this.files = event.dataTransfer.files;
    } else {
      this.files = (event.target as HTMLInputElement).files;
    }

    this.fileLengthError = false;
    this.maxSizeError = false;
    this.maxFileSizeError = false;
    this.fileTypeError = false;
    this.specialChar = false;
    this.fileList = [];
    let fileSizeSum = 0;
    for (var i = 0; i < this.files.length; i++) {
      fileSizeSum += this.files[i].size;
      if (
        this.convertMbToBytes(this.maxFileSizeInMB) > this.files[i].size &&
        this.maxFileSizeInMB > 0
      ) {
        this.maxFileSizeError = true;
        return;
      }

      let extension = this.files[i].name
        .substr(this.files[i].name.lastIndexOf('.') + 1)
        .toLowerCase();

      if (this.pattern.test(this.files[i].name)) {
        this.specialChar = true;
        return;
      }

      if (
        this.allowedFileExtensions?.length > 0 &&
        this.allowedFileExtensions.indexOf(extension) == -1
      ) {
        this.fileTypeError = true;
        return;
      }
      this.fileList.push(this.files[i]);
    }
    if (this.files.length > this.maxLength && this.maxLength > 0) {
      this.fileLengthError = true;
      return;
    }
    if (fileSizeSum > this.convertMbToBytes(this.maxSizeInMB)) {
      this.maxSizeError = true;
      return;
    }
    this.selectedFiles.emit(this.fileList);
  }

  convertMbToBytes(size: number) {
    return 1024 * 1024 * size;
  }

  getAllowedExtensions() {
    const extArr = this.allowedFileExtensions.map((i) => '.' + i);
    return extArr.join();
  }
  displayExtention() {
    const extArr = this.allowedFileExtensions.map((i) => ' .' + i);
    return extArr.join();
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
    this.upload(event, true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }
}
