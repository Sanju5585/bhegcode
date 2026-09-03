import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import {
  AccessRoleType,
  UserRoleService,
} from '../../../shared/services/user-role.service';

@Component({
  standalone: false,
  selector: 'app-loggedin-home',
  templateUrl: './loggedin-home.component.html',
  styleUrls: ['./loggedin-home.component.scss'],
})
export class LoggedinHomeComponent implements OnInit {
  isNewCalibration = environment.isNewCalibration;
  currentUserAccess$ = this.userRoleService.currentUserRole;
  userRoleEnum = AccessRoleType;

  constructor(private userRoleService: UserRoleService) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
  }
}
