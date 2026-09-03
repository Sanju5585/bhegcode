import { Component, Input, OnInit } from '@angular/core';
import {
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { MyProfileService } from '../service/my-profile.service';

@Component({
  standalone: false,
  selector: 'ds-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
})
export class PersonalDetailsComponent implements OnInit {
  @Input()
  profiledata;
  constructor(
    private profile: MyProfileService,
    private translate: TranslationService,
    private globalMessageService: GlobalMessageService
  ) {}
  data: any;
  ngOnChanges() {
    this.data = this.profiledata;
  }
  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }
  ngOnInit() {
    if (!this.data) {
      this.globalMessageService.add(
        this.getTranslatedText('myProfile.errormsg'),
        GlobalMessageType.MSG_TYPE_ERROR,
        5000
      );
    }
  }
}
