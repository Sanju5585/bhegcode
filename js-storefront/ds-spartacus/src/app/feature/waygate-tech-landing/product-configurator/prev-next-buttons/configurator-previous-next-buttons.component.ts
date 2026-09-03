import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CommonConfigurator,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import { ConfiguratorPreviousNextButtonsComponent } from '@spartacus/product-configurator/rulebased';
import { Observable } from 'rxjs';
import { delay, filter, map, switchMap, take } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'cx-configurator-previous-next-buttons',
  templateUrl: './configurator-previous-next-buttons.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./configurator-previous-next-buttons.component.scss'],
})
export class CustomConfiguratorPreviousNextButtonsComponent extends ConfiguratorPreviousNextButtonsComponent {}
