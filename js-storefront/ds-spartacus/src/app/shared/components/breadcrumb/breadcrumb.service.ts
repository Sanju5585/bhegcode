import {
  Injectable,
  Renderer2,
  RendererFactory2,
  ViewChild,
} from '@angular/core';
import { PageMetaService, TranslationService } from '@spartacus/core';
import {
  Observable,
  BehaviorSubject,
  of,
  isObservable,
  combineLatest,
} from 'rxjs';
import { map } from 'rxjs/operators';
import { BreadcrumbComponent } from './breadcrumb.component';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadCrumbSource = new BehaviorSubject<any[]>([{}]);
  breadCrumbs$ = this.breadCrumbSource.asObservable();

  private breadCrumbTitleSource = new BehaviorSubject<string>('');
  breadCrumbTitle$ = this.breadCrumbTitleSource.asObservable();

  private isCustomBreadcrumbSource = new BehaviorSubject<boolean>(false);
  isCustomBreadcrumb$ = this.isCustomBreadcrumbSource.asObservable();

  private showBreadcrumbSource = new BehaviorSubject<boolean>(false);
  showBreadcrumb$ = this.showBreadcrumbSource.asObservable();

  title$: Observable<string>;
  crumbs$: Observable<any[]>;

  constructor(
    protected pageMetaService: PageMetaService,
    private translation: TranslationService
  ) {
    this.breadCrumbs$.subscribe((res: any) => {
      this.crumbs$ = of(res);
    });
  }

  setBreadCrumbs(crumbs: any[]) {
    this.isCustomBreadcrumbSource.next(true);
    this.translation.translate('common.home').subscribe((textHome) => {
      const home = [{ label: textHome, link: '/' }];
      this.breadCrumbSource.next([...home, ...crumbs]);
    });
    // return this.breadCrumbSource.next([...home, ...crumbs]);
  }

  setBreadcrumbTitle(title: string | Observable<any>) {
    let titleText;
    if (isObservable(title)) {
      titleText = title.subscribe((res) => res);
    } else {
      titleText = title;
    }
    this.isCustomBreadcrumbSource.next(true);
    return this.breadCrumbTitleSource.next(titleText);
  }

  setCustomBreadcrumbFlag(value) {
    return this.isCustomBreadcrumbSource.next(value);
  }

  showHideBreadcrumb(value) {
    this.showBreadcrumbSource.next(value);
  }
}
