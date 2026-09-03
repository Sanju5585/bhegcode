import { ChangeDetectionStrategy, Component } from '@angular/core';

const CX_SELECTOR = 'cx-configurator-add-to-cart-button';

@Component({
  standalone: false,
  selector: CX_SELECTOR,
  templateUrl: './configurator-add-to-cart-button.component.html',
  styleUrls: ['./configurator-add-to-cart-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfiguratorAddToCartButtonComponent {}
