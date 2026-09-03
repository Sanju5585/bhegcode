import {
  Directive,
  HostListener,
  HostBinding,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  standalone: false,
  selector: '[fileDragDrop]',
})
export class FileDragNDropDirective {
  @Output() private filesChangeEmiter: EventEmitter<File[]> =
    new EventEmitter();
  constructor() {}

  @HostListener('dragover', ['$event']) public onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
  }

  @HostListener('drop', ['$event']) public onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    let files = evt.dataTransfer.files;
    let valid_files: Array<File> = files;
    let allowedFiles = ['pdf', 'jpg'];
    if (allowedFiles.indexOf(valid_files[0].name.split('.').pop()) != -1) {
      this.filesChangeEmiter.emit(valid_files);
    } else {
      valid_files = null;
      this.filesChangeEmiter.emit(valid_files);
    }
  }
}
