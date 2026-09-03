import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FeedbackModel } from '../feedback.model';
import { FeedbackService } from '../feedback.service';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  TranslationService,
} from '@spartacus/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MyProfileService } from '../../user/my-profile/service/my-profile.service';
import { UserAccountFacade } from '@spartacus/user/account/root';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import {
  FileProgressLayouts,
  FileSizes,
} from '../../../shared/models/fileSize.model';
import { Router } from '@angular/router';
import {
  REGULAR_PATTERN,
  testRegex,
} from '../../../core/generic-validator/regular-expressions';

@Component({
  standalone: false,
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  @ViewChild('textval') textval: ElementRef;

  user$: Observable<unknown>;
  userType = '';
  subject = '';
  name = '';
  phoneNumber = '';
  emailAddress = '';
  message = '';
  submitSuccess = false;
  errorMsg = false;
  loadSpinner = false;
  loadingFlag = true;
  uploadUrl: string;
  deleteUrl: string;
  files = [];
  uploadCode: string;
  readonly layouts = FileProgressLayouts;
  readonly ALLOWED_EXTENSIONS = ['jpg', 'pdf'];
  feedackModel: FeedbackModel;
  feedbackMessages: any;
  cartId = '';
  dragdropfile: boolean = true;
  ticketCategory = '';
  error = {
    subject: '',
    name: '',
    phoneNumber: '',
    emailAddress: '',
    message: '',
  };
  uploadParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  deleteParams = {
    entryNumber: 1,
    fields: 'DEFAULT',
    returnLocation: 'DEFAULT',
  };
  profileData;
  showLoading: boolean = false;
  constructor(
    private feedbackService: FeedbackService,
    private activeCartFacade: ActiveCartFacade,
    protected authService: AuthService,
    private userAccountFacade: UserAccountFacade,
    private globalMessageService: GlobalMessageService,
    private translate: TranslationService,
    private profile: MyProfileService,
    public sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.feedackModel = new FeedbackModel();
    window.addEventListener(
      'dragover',
      (e) => {
        // tslint:disable-next-line:no-unused-expression
        e && e.preventDefault();
      },
      false
    );
    window.addEventListener(
      'drop',
      (e) => {
        // tslint:disable-next-line:no-unused-expression
        e && e.preventDefault();
      },
      false
    );

    this.user$ = this.authService.isUserLoggedIn().pipe(
      switchMap((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.userType = 'current';
          return this.userAccountFacade.get();
        } else {
          this.userType = 'anonymous';
          this.router.navigate(['contactus']);
          return of(undefined);
        }
      })
    );

    this.user$.subscribe(
      (res) => {
        if (res) {
          this.userType = 'current';
          this.getPersonalData();
        } else {
          this.userType = 'anonymous';
        }
      },
      (error) => {
        this.globalMessageService.add(
          error,
          GlobalMessageType.MSG_TYPE_ERROR,
          10000
        );
        window.scrollTo(0, 0);
      }
    );
    this.getCartId();
  }

  getPersonalData() {
    this.profile.getProfileData().subscribe(
      (success) => {
        if (success) {
          this.profileData = success;
          this.name = this.profileData.name;
          this.emailAddress = this.sanitizer.sanitize( SecurityContext.HTML,this.profileData.email);
        }
      },
      (error) => {}
    );
  }

  getTranslatedText(key) {
    let message;
    this.translate.translate(key).subscribe((res) => {
      message = res;
    });
    return message;
  }

  getCartId() {
    this.activeCartFacade.getActiveCartId().subscribe((cartId) => {
      this.cartId = cartId;
      if (this.cartId) {
        this.uploadUrl = 'users/' + this.userType + '/uploadFeedbackAttachment';
        this.deleteUrl =
          'users/' +
          this.userType +
          '/' +
          this.cartId +
          '/removeFeedbackAttach';
      }
    });
  }

  onChange(event, field) {
    const emailRegx = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';
    if (field === 'subject') {
      this.subject = this.sanitizer.sanitize(
        SecurityContext.HTML,
        event.target.value
      );
      this.error.subject = '';
    } else if (field === 'name') {
      this.error.name = '';
      const name = event.target as HTMLInputElement;
      this.name = name.value;
      this.name = testRegex(
        this.sanitizer.bypassSecurityTrustHtml(this.name),
        REGULAR_PATTERN.alphaNumeric
      );
    } else if (field === 'phoneNumber') {
      if (event.target.value.match(/^[0-9]+$/) === null) {
        this.error.phoneNumber = this.getTranslatedText(
          'feedback.error.phoneNumberMessage'
        );
      } else {
        this.phoneNumber = event.target.value;
        this.error.phoneNumber = '';
      }
    } else if (field === 'emailAddress') {
      this.emailAddress = this.sanitizer.sanitize( SecurityContext.HTML,event.target.value);
      if (this.emailAddress && !this.emailAddress.match(emailRegx)) {
        this.error.emailAddress = this.getTranslatedText(
          'feedback.error.emailMessage'
        );
      } else {
        this.error.emailAddress = '';
      }
    } else if (field === 'message') {
      this.message = this.sanitizer.sanitize(
        SecurityContext.HTML,
        event.target.value
      );
      this.error.message = '';
    }
  }
  clear() {
    this.submitSuccess = false;
    this.errorMsg = false;
  }
  getFileSize(fileSize) {
    if (Math.round((fileSize / 1024) * 1000) / 1000 >= 1024.0) {
      return (Math.round(fileSize / 1024) / 1024).toFixed(2) + FileSizes.KB;
    }
    if (Math.round((fileSize / 1024) * 1000) / 1000 < 1024.0) {
      return (
        (Math.round((fileSize / 1024) * 1000) / 1000).toFixed() + FileSizes.KB
      );
    }
  }
  selectedFiles(event) {
    this.files = event;
  }
  deletedFiles(event) {
    if (this.files.indexOf(event) > -1) {
      this.files.splice(this.files.indexOf(event), 1);
    }
  }
  fileUploadCode(event) {
    this.uploadCode = event;
  }

  stopCount(e) {
    if (e.target.value.length >= 300) {
      e.preventDefault();
      return false;
    }
  }

  trimText() {
    this.textval.nativeElement.value =
      this.textval.nativeElement.value.substring(0, 300);
  }

  myFunction(e) {
    if (e.target.value.length >= 300) {
      this.textval.nativeElement.value =
        this.textval.nativeElement.value.substring(0, 300);
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }

  onSubmit() {
    this.feedackModel.ticketCategory = 'ENQUIRY';
    this.errorMsg = false;
    if (this.subject === '') {
      this.error.subject = this.getTranslatedText(
        'feedback.error.subjectMessage'
      );
    } else {
      this.feedackModel.subject = this.subject ? this.subject : '';
    }
    if (this.name === '') {
      this.error.name = this.getTranslatedText('feedback.error.nameMessage');
    } else {
      this.feedackModel.name = this.name ? this.name : '';
    }
    if (this.phoneNumber === '') {
      this.error.phoneNumber = this.getTranslatedText(
        'feedback.error.phoneReq'
      );
    } else {
      this.feedackModel.phoneNo = this.phoneNumber ? this.phoneNumber : '';
    }
    if (this.emailAddress === '') {
      this.error.emailAddress = this.getTranslatedText(
        'feedback.error.emailReq'
      );
    } else {
      this.feedackModel.emailId = this.emailAddress
        ? this.emailAddress.toLowerCase()
        : '';
    }
    if (this.message === '') {
      this.error.message = this.getTranslatedText('feedback.error.message');
    } else {
      this.feedackModel.message = this.message ? this.message : '';
    }
    if (this.error.phoneNumber != '') {
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }
    if (this.error.emailAddress != '') {
      window.scrollTo({ top: 150, behavior: 'smooth' });
      return;
    }
    if (
      this.subject &&
      this.emailAddress &&
      this.phoneNumber &&
      this.message &&
      this.name
    ) {
      this.loadSpinner = true;
      this.loadingFlag = false;
      this.saveFeedbackDetails();
      // grecaptcha.ready(() => {
      //   grecaptcha
      //     .execute(environment.siteKey, { action: '' })
      //     .then((token) => {
      //       this.feedackModel.googleCaptcha = token;
      //       this.saveFeedbackDetails();
      //     });
      // });
    }
  }

  onFileChange(pFileList: File[]) {
    if (pFileList == null) {
      this.dragdropfile = false;
    } else {
      this.dragdropfile = true;
      this.files = Object.keys(pFileList).map((key) => pFileList[key]);
    }
  }

  saveFeedbackDetails() {
    this.showLoading = true;
    this.feedackModel.attachmentId = this.uploadCode;
    this.feedbackService
      .feedbackDetails(this.feedackModel, this.userType, this.cartId)
      .subscribe(
        (code) => {
          this.showLoading = false;
          this.subject = '';
          this.emailAddress = this.sanitizer.sanitize( SecurityContext.HTML,'');
          this.phoneNumber = '';
          this.message = '';
          this.name = '';
          this.submitSuccess = true;
          this.loadSpinner = false;
          this.loadingFlag = true;
          if (this.userType == 'current') {
            this.getPersonalData();
          }
          this.feedbackService.setVal(true);
        },
        (error) => {
          this.showLoading = false;
          this.globalMessageService.add(
            this.getTranslatedText('feedback.errorMessage'),
            GlobalMessageType.MSG_TYPE_ERROR,
            5000
          );
          this.errorMsg = true;
          this.loadSpinner = false;
          this.loadingFlag = true;
        }
      );
  }
}
