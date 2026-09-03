import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../core/http/api.service';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MyFavoritesService } from './my-favorites.service';
import { MainService } from '../../shared/services/main.service';

declare var jquery: any;
declare var $: any;
declare const ACC: any;
declare const window: any;

@Component({
  standalone: false,
  selector: 'app-my-favs',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css'],
})
export class MyFavoritesComponent implements OnInit, AfterViewInit {
  favouritesDataAPI: string = environment.apis.getFavourites;
  favouritesData: any = [];
  showNoteId: number = -1;
  removeSingleWishList: string = environment.apis.removeSingleFavs;
  leaveanoteurl: string = environment.apis.leaveanote;
  wishlistChecked: boolean = false;
  filter: any = [];
  searchText: string = '';
  totalNumberOfResults: number = 0;
  pageSize: number = 0;
  singleFavSelect: boolean = false;
  leaveanote: string = '';
  toggleSearch: boolean = false;
  isVisible: boolean = false;
  isVisibleSearch: boolean = false;
  selectedFavItems: any = [];
  public subscriptions: any;
  favCode: string = '';
  confirmationOfRemFav: boolean = false;
  loading: boolean = false;

  constructor(
    private mainService: MainService,
    public eqService: MyFavoritesService,
    private dataService: ApiService,
    private router: Router
  ) {}

  @ViewChild('scrollLoader', { static: true }) scrollLoader: ElementRef;
  ngOnInit() {
    const breadCrumbs = [
      { name: 'Home', path: '/home', isExternalLink: true },
      { name: 'My Favorites', path: '/favorite/my-favorites' },
    ];
    this.mainService.breadCrumbs.push(...breadCrumbs);
    this.getFavouritesData();
  }

  public getFavouritesData() {
    this.eqService.getFavourite('20').subscribe((res: any) => {
      if (res != ' ' && res != null) {
        this.favouritesData = [];
        this.favouritesData.push(res.results);
        this.totalNumberOfResults = res.pagination.totalNumberOfResults;
        this.pageSize = res.pagination.pageSize;
        this.toggleSearch = false;
      } else {
        this.isVisible = true;
      }
    });
  }

  ngAfterViewInit() {
    this.subscriptions = this.mainService.pageScroll.subscribe(() => {
      // auto load data on scroll
      const rect = this.scrollLoader.nativeElement.getBoundingClientRect();
      if (
        rect.bottom < window.innerHeight &&
        this.pageSize <= this.totalNumberOfResults
      ) {
        this.pageSize = this.pageSize + 5;
        this.eqService
          .getFavouriteSearch(this.searchText, this.pageSize)
          .subscribe((res: any) => {
            this.favouritesData = [];
            this.favouritesData.push(res.results);
            this.totalNumberOfResults = res.pagination.totalNumberOfResults;
            this.pageSize = res.pagination.pageSize;
            document.body.scrollTop = document.body.scrollTop - 10;
          });
      }
    });
  }

  public searchFavourite() {
    this.loading = true;
    this.eqService
      .getFavouriteSearch(this.searchText, this.pageSize)
      .subscribe((res: any) => {
        if (res != null) {
          this.favouritesData = [];
          this.favouritesData.push(res.results);
          this.totalNumberOfResults = res.pagination.totalNumberOfResults;
          this.pageSize = res.pagination.pageSize;
          this.toggleSearch = true;
          this.isVisibleSearch = false;
        } else {
          this.favouritesData = [];
          this.isVisibleSearch = true;
          this.toggleSearch = true;
        }
        this.loading = false;
      });
  }

  public removeSearch() {
    this.searchText = '';
    //this.loading = false;
    this.getFavouritesData();
    this.isVisibleSearch = false;
  }

  /* To be removed */
  public deleteAllFavs() {
    this.singleFavSelect = true;
  }

  public removeAllFavs() {
    let favData = [];
    let allCodes = [];
    if (this.singleFavSelect) {
      this.eqService.getFavourite('20').subscribe((res: any) => {
        favData.push(res.results);
        favData.forEach((result, index) => {
          result.forEach((data, i) => {
            allCodes.push(data.code);
          });
        });
      });
      if (allCodes.length == favData.length) {
        const headers = new HttpHeaders({
          'Content-Type': 'application/x-www-form-urlencoded',
        });
        const data = new HttpParams({
          fromObject: {
            'productCodes[]': allCodes,
            CSRFToken: ACC['config']['CSRFToken'],
          },
        });

        this.eqService.removeAllFavourite(data).subscribe((res) => {
          if (res) {
            this.mainService.showMessage('Removed all favourites.', 'success');
            this.favouritesData = [];
            this.getFavouritesData();
          } else {
            this.mainService.showMessage(
              'Failed to remove favourites.',
              'error'
            );
          }
        });
      }
    } else {
      this.deleteFavImage(this.selectedFavItems);
    }
  }

  public removeSingleFavs(e, code) {
    this.confirmationOfRemFav = true;
    this.favCode = code;
  }

  deleteFavImage(code) {
    let checkedValue = code;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const data = new HttpParams({
      fromObject: {
        'productCodes[]': checkedValue,
        CSRFToken: ACC['config']['CSRFToken'],
      },
    });

    this.eqService.removeAllFavourite(data).subscribe((res) => {
      if (res) {
        this.mainService.showMessage('Removed a favorite.', 'success');
        this.confirmationOfRemFav = false;
        this.selectedFavItems = [];
        this.favouritesData = [];
        this.getFavouritesData();
      } else {
        this.mainService.showMessage('Failed to remove a favorite.', 'error');
      }
    });
  }

  /* Adding checked value starts */
  public selectWishlist(e, code) {
    this.singleFavSelect = false;
    if (e.target.checked) {
      this.wishlistChecked = true;
      this.selectedFavItems.push(code);
    } else {
      this.wishlistChecked = false;
      const index: number = this.selectedFavItems.indexOf(code);
      if (index !== -1) {
        this.selectedFavItems.splice(index, 1);
      }
    }
  }

  /* Adding checked value ends */
  public leaveanotefun(e, codevalue) {
    let text = $('.send-note-textbox').val();
    let code = codevalue;
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const data = new HttpParams({
      fromObject: {
        productCode: code,
        leaveNote: text,
        CSRFToken: ACC['config']['CSRFToken'],
      },
    });

    this.eqService.leavenote(data).subscribe((res) => {
      if (res) {
        this.mainService.showMessage(
          'Leave a note saved successfully.',
          'success'
        );
      } else {
        this.mainService.showMessage('Leave a note not saved.', 'error');
      }
    });
  }

  public checkPriceBtnClick(productUrl) {
    window.location.href = productUrl;
  }

  public switchSalesArea(code, url, type) {
    ACC.common.switchSalesArea(code, url, type);
  }

  public createRMA(code, name) {
    ACC.common.createRMA(code, name);
  }

  public onBuyBtnClick(event, code, name) {
    ACC.product.bindToAddToCartForm();
    ACC.product.addToCart(event, code, name);
  }
  public addtoequipment(code, name) {
    window.location.href =
      '/site-equipment/add-part/' + code + '?partName=' + name;
  }
}
