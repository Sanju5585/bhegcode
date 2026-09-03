import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyProfileService } from '../../../user/my-profile/service/my-profile.service';

@Component({
  standalone: false,
  selector: 'app-waygate-profile',
  templateUrl: './waygate-profile.component.html',
  styleUrls: [
    './waygate-profile.component.scss',
    './../waygate-manage-account.component.scss',
  ],
})
export class WaygateProfileComponent {
  profile$: Observable<any> = this.profileService.getProfileData();
  constructor(private profileService: MyProfileService) {}
}
