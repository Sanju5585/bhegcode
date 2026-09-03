import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../service/my-profile.service';

@Component({
  standalone: false,
  selector: 'ds-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  profiledata: {};
  loadingFlag: boolean = true;
  categoryName: string;
  constructor(private profile: MyProfileService) {}

  ngOnInit(): void {
    this.openProduct('categoryOne');
    this.profile.getProfileData().subscribe(
      (success) => {
        this.profiledata = success;
        this.loadingFlag = false;
      },
      (error) => {
        this.loadingFlag = false;
      }
    );
  }
  customerAccdetails(data) {}
  personaldetails(data) {}
  shiptodetails(data) {}
  orderdetails(data) {}
  notificationdetails(data) {}
  openProduct(prodName) {
    this.categoryName = prodName;
  }
}
