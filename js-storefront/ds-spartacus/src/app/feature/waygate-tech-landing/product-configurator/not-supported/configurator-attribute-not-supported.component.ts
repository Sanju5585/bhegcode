import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  Product,
  ProductService,
  RoutingService,
  WindowRef,
} from '@spartacus/core';
import {
  CommonConfigurator,
  ConfiguratorRouter,
  ConfiguratorRouterExtractorService,
} from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorCommonsService,
} from '@spartacus/product-configurator/rulebased';
import {
  BREAKPOINT,
  BreakpointService,
  LaunchDialogService,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { DS_DIALOG } from '../../../../core/dialog/dialog.config';

@Component({
  standalone: false,
  selector: 'cx-configurator-attribute-not-supported',
  templateUrl: './configurator-attribute-not-supported.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./configurator-attribute-not-supported.component.scss'],
})
export class ConfiguratorAttributeNotSupportedComponent {
  constructor(
    protected configRouterExtractorService: ConfiguratorRouterExtractorService,
    protected configuratorCommonsService: ConfiguratorCommonsService,
    protected productService: ProductService,
    private launchDialogService: LaunchDialogService
  ) {}
  container$: Observable<{
    routerData: ConfiguratorRouter.Data;
    configuration: Configurator.Configuration;
    product: Product | undefined;
  }> = this.configRouterExtractorService.extractRouterData().pipe(
    switchMap((routerData) =>
      this.configuratorCommonsService
        .getConfiguration(routerData.owner)
        .pipe(map((configuration) => ({ routerData, configuration })))
        .pipe(
          switchMap((cont) =>
            this.productService.get(cont.configuration.productCode).pipe(
              map((product) => ({
                routerData: cont.routerData,
                configuration: cont.configuration,
                product,
              }))
            )
          )
        )
    )
  );

  public openModal() {
    const componentdata = {
      item: this.container$,
    };
    const haveAquestionModal = this.launchDialogService.openDialog(
      DS_DIALOG.HAVE_A_QUESTION_DIALOG,
      undefined,
      undefined,
      componentdata
    );
    if (haveAquestionModal) {
      haveAquestionModal.pipe(take(1)).subscribe(() => {
        console.log('closing the overview');
      });
    }
  }
}
