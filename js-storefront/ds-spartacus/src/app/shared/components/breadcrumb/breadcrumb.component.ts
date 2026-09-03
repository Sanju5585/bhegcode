import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import {
  CmsBreadcrumbsComponent,
  PageMeta,
  PageMetaService,
  TranslationService,
} from '@spartacus/core';
import {
  combineLatest,
  isObservable,
  Observable,
  of,
  Subscription,
} from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { BreadcrumbService } from './breadcrumb.service';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  Scroll,
} from '@angular/router';
import { AllProductLine } from '../../enums/availableProductList.enum';
import { CustomerAccountService } from '../../../core/customer-account/customer-account.service';

@Component({
  standalone: false,
  selector: 'cx-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  title$: Observable<string> | any;
  crumbs$: Observable<any[]>;

  titleSubscription: Subscription;
  crumbsSubscription: Subscription;
  crumbs: any;
  showBreadcrumbSubscription: any;
  iscontactus: boolean;
  availableProductLines: string[];
  showWaygate: boolean;
  productLine: string;
  constructor(
    protected pageMetaService: PageMetaService,
    private translation: TranslationService,
    public breadCrumbService: BreadcrumbService,
    private cRef: ChangeDetectorRef,
    private router: Router,
    public elRef: ElementRef,
    private custAccService: CustomerAccountService
  ) {}

  ngOnInit(): void {
    this.title$ = this.setTitle();
    this.crumbs$ = this.setCrumbs();

    this.breadCrumbService.breadCrumbs$.subscribe((res: any) => {
      if (res) {
        this.crumbs$ = of(res);
        this.cRef.detectChanges();
      }
    });

    this.breadCrumbService.breadCrumbTitle$.subscribe((res: any) => {
      if (res) {
        this.title$ = of(res);
        this.cRef.detectChanges();
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.custAccService
          .getProductLine()
          .subscribe((productLine: string) => {
            this.productLine = productLine;
            if (
              productLine == AllProductLine.waygate ||
              productLine == AllProductLine.bently ||
              productLine == AllProductLine.panametrics ||
              productLine == AllProductLine.druck ||
              (productLine == AllProductLine.reuterStokes &&
                (event.url == '/contactus' || event.url == '/feedback'))
            ) {
              this.iscontactus = false;
            } else {
              this.iscontactus = true;
            }
          });
        this.breadCrumbService.setCustomBreadcrumbFlag(false);
        this.breadCrumbService.isCustomBreadcrumb$.subscribe((res) => {
          if (!res) {
            this.title$ = this.setTitle();
            this.crumbs$ = this.setCrumbs();
            this.cRef.detectChanges();
          } else {
            this.breadCrumbService.breadCrumbs$.subscribe((cr: any) => {
              if (cr) {
                this.crumbs$ = of(cr);
                this.cRef.detectChanges();
              }
            });
            this.breadCrumbService.breadCrumbTitle$.subscribe((tl: any) => {
              if (tl) {
                this.title$ = of(tl);
                this.cRef.detectChanges();
              }
            });
          }
        });
      }
    });

    this.showBreadcrumbSubscription = this.breadCrumbService.showBreadcrumb$;
    this.showBreadcrumbSubscription.subscribe((res: any) => {
      this.showBreadcrumb(res);
    });
    this.breadCrumbService.showHideBreadcrumb(true);
  }

  ngOnDestroy(): void {
    this.showBreadcrumbSubscription.unsubscribe();
  }

  private setTitle() {
    return this.pageMetaService.getMeta().pipe(
      filter(Boolean),
      map((meta: PageMeta) => meta.heading || meta.title)
    );
  }

  private setCrumbs() {
    return combineLatest([
      this.pageMetaService.getMeta(),
      this.translation.translate('common.home'),
    ]).pipe(
      map(([meta, textHome]) =>
        meta?.breadcrumbs ? meta.breadcrumbs : [{ label: textHome, link: '/' }]
      )
    );
  }

  private showBreadcrumb(value: any) {
    if (!value) {
      this.elRef.nativeElement.style.display = 'none';
    } else {
      this.elRef.nativeElement.style.display = 'block';
    }
  }
}
