import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  DSAuthService,
  UserTypes,
} from '../../../../core/auth/ds-auth.service';
import { HazardDetails } from '../../../../shared/models/commerceTypes.model';
import {
  AccessRoleType,
  UserRoleService,
} from '../../../../shared/services/user-role.service';

@Component({
  standalone: false,
  selector: 'ds-rma-cart-summary',
  templateUrl: './rma-cart-summary.component.html',
  styleUrls: ['./rma-cart-summary.component.scss'],
})
export class RmaCartSummaryComponent implements OnInit {
  @Input()
  cart: any;

  @Input()
  hazardStatus;

  hazardDetails = HazardDetails;
  currentUserAccess$ = this.userRoleService.currentUserRole;
  userRoleEnum = AccessRoleType;
  userType;

  constructor(
    private router: Router,
    private userRoleService: UserRoleService,
    private dsAuthService: DSAuthService
  ) {}

  ngOnInit(): void {
    this.userType = this.dsAuthService.getUserTypeFromStorage();
  }

  checkRolesForCheckout(roles) {
    if (this.userType == UserTypes.INTERNAL) {
      if (roles.indexOf(this.userRoleEnum.ADMIN) > -1) {
        return true;
      } else if (
        roles.indexOf(this.userRoleEnum.RMA) > -1 &&
        roles.indexOf(this.userRoleEnum.ORDER_TRACK) > -1
      ) {
        return true;
      } else if (
        roles.indexOf(this.userRoleEnum.RMA) > -1 &&
        roles.indexOf(this.userRoleEnum.VIEW_ONLY) > -1
      ) {
        return true;
      }
      return false;
    } else if (this.userType == UserTypes.EXTERNAL) {
      if (
        roles.indexOf(this.userRoleEnum.ADMIN) > -1 ||
        roles.indexOf(this.userRoleEnum.ORDER_TRACK) > -1 ||
        roles.indexOf(this.userRoleEnum.VIEW_ONLY) > -1
      ) {
        return true;
      }
      return false;
    }
  }

  checkDisable() {
    if (this.hazardStatus == HazardDetails.PARTIAL) {
      return true;
    } else if (!this.checkIfAccessoryIncomplete()) {
      return true;
    } else {
      return false;
    }
  }

  checkIfAccessoryIncomplete() {
    for (let el of this.cart.returnsCartData) {
      if (!el.offeringList || el.offeringList.length <= 0) {
        return false;
      }
    }
    return true;
  }

  goToCheckout() {
    if (this.checkDisable()) {
      return;
    }
    this.router.navigate(['rma/checkout']);
  }
}
