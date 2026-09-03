import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { TranslationService } from '@spartacus/core';
import { TrainingDocsService } from './training-docs.service';
import { saveAs } from 'file-saver';
import { environment } from '../../../environments/environment';
import { BreadcrumbService } from '../../shared/components/breadcrumb/breadcrumb.service';

@Component({
  standalone: false,
  selector: 'ds-training-docs',
  templateUrl: './training-docs.component.html',
  styleUrls: ['./training-docs.component.scss'],
})
export class TrainingDocsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'date', 'download', 'view'];

  trainingDocs;
  filterDocs;
  loadSpinner = false;
  downloading = [];

  public sortingOption: any = [
    { name: 'Name', value: 'name', direction: 'asc' },
    { name: 'Oldest to latest', value: 'oldToNew', direction: 'desc' },
    { name: 'Latest to oldest', value: 'newToOld', direction: 'asc' },
  ];

  dataSource = new MatTableDataSource();
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private translate: TranslationService,
    private breadCrumbService: BreadcrumbService,
    private router: Router,
    private trainingDocService: TrainingDocsService
  ) {}

  ngOnInit(): void {
    this.breadCrumbService.setBreadCrumbs([]);
    this.translate
      .translate('trainingDocs.heading')
      .subscribe((res: string) =>
        this.breadCrumbService.setBreadcrumbTitle(res)
      );
    this.getTrainingDocsList();
  }

  getTrainingDocsList() {
    this.loadSpinner = true;
    this.trainingDocService.getTrainingDocList().subscribe(
      (res: any) => {
        this.loadSpinner = false;
        let filteredTraninDocs = res?.filter((item) => item.active == true);
        this.trainingDocs = filteredTraninDocs;
        this.filterDocs = filteredTraninDocs;
      },
      (error) => {
        this.loadSpinner = false;
      }
    );
  }

  sortData(sort) {
    const data = this.trainingDocs.slice();
    this.trainingDocs = data.sort((a, b) => {
      var isAsc = sort?.direction === 'desc';
      switch (sort?.value) {
        case 'name':
          return this.compare(a.name, b.name, sort?.direction);
        case 'oldToNew':
          return (
            Number(new Date(a.modifiedTime)) - Number(new Date(b.modifiedTime))
          );
        case 'newToOld':
          return (
            Number(new Date(b.modifiedTime)) - Number(new Date(a.modifiedTime))
          );
        default:
          return (
            Number(new Date(b.modifiedTime)) - Number(new Date(a.modifiedTime))
          );
      }
    });
  }

  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  applyFilter(key) {
    this.trainingDocs = this.filterDocs.filter(
      (i) => i.name.toLowerCase().includes(key) || i.name.includes(key)
    );
  }

  openDocument(doc) {
    switch (doc.fileType) {
      case 'PDF':
        (window as any).open(environment.occBaseUrl + doc.mediaslink, '_blank');
        break;
      case 'PPT':
        (window as any).open(environment.occBaseUrl + doc.mediaslink, '_blank');
        break;
      case 'VIDEO':
        (window as any).open(environment.occBaseUrl + doc.mediaslink, '_blank');
        break;
      case 'YOUTUBE':
        (window as any).open(doc.youtubeURL, '_blank');
        break;
      default:
        this.router.navigate(['']);
        break;
    }
  }

  downloadFile(doc, i) {
    this.downloading[i] = true;
    var url = environment.occBaseUrl + doc.mediaslink;
    this.trainingDocService.downloadFile(doc?.name, doc?.fileType).subscribe(
      (res) => {
        this.downloading[i] = false;
        if (doc?.fileType == 'PDF') {
          const blob = new Blob([res], { type: 'application/pdf' });
          const file = new File([blob], doc?.name + '.pdf', {
            type: 'application/pdf',
          });
          saveAs(file);
        } else if (doc?.fileType == 'VIDEO') {
          const blob = new Blob([res], { type: 'video/MP4' });
          const file = new File([blob], doc?.name + '.mp4', {
            type: 'video/MP4',
          });
          saveAs(file);
        }
      },
      (error) => {
        this.downloading[i] = false;
      }
    );

    // var current = this;
    // var req = new XMLHttpRequest();
    // req.open("GET", url, true);
    // req.responseType = "blob";
    // req.onload = function () {

    // var blob = new Blob([req.response], { type: "application/octetstream" });
    //     var url = window.URL || window.webkitURL;
    //     var link = url.createObjectURL(blob);
    //     var a = document.createElement("a");
    //     a.setAttribute("download", doc.name + ".pdf");
    //     a.setAttribute("href", link);
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    // };

    // req.send();
    // req.onreadystatechange = function() {
    //   if(this.readyState === 4  && this.status === 200){
    //     current.downloading[i]= false;
    //   } else if(this.status === 0) {
    //     current.downloading[i]= false;
    //   }
    // }
  }
}
