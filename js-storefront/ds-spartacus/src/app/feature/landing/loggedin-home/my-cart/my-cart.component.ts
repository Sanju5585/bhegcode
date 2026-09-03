import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingPagesService } from '../../landing-pages.service';
import { SavedCartService } from '../../../saved-cart/service/saved-cart.service';

@Component({
  standalone: false,
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss'],
})
export class MyCartComponent implements OnInit {
  viewcartData: any;
  page = 0;
  pageSize = 7;
  type = 'All';
  sortCode = 'desc';
  showCart = true;

  constructor(
    private landingPagesService: LandingPagesService,
    private savedcartService: SavedCartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.landingPagesService
      .myCartDetails(this.page, this.pageSize, this.sortCode, this.type)
      .subscribe((resp: any) => {
        this.viewcartData = resp.saveCartsList;
        if (this.viewcartData.length > 0) {
          this.showCart = true;
        } else {
          this.showCart = false;
        }
      });
  }
  viewDetail(code) {
    if (code) {
      this.savedcartService.setCartCode(code);
      this.router.navigate(['/saved-cart/details']);
    }
  }
}
