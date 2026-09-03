import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import { ConfiguratorTabBarComponent } from '@spartacus/product-configurator/rulebased';
import {} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'cx-configurator-tab-bar',
  templateUrl: './configurator-tab-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomConfiguratorTabBarComponent extends ConfiguratorTabBarComponent {}
