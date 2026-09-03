import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonConfigurator } from '@spartacus/product-configurator/common';
import {
  Configurator,
  ConfiguratorGroupMenuComponent,
} from '@spartacus/product-configurator/rulebased';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  standalone: false,
  selector: 'cx-configurator-group-menu',
  templateUrl: './configurator-group-menu.component.html',
  styleUrls: ['./configurator-group-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomConfiguratorGroupMenuComponent extends ConfiguratorGroupMenuComponent {
  override getGroupStatusStyles(
    group: Configurator.Group,
    configuration: Configurator.Configuration
  ): Observable<string> {
    return this.isGroupVisited(group, configuration).pipe(
      map((isVisited) => {
        const CLOUDCPQ_CONFIGURATOR_TYPE = 'CLOUDCPQCONFIGURATOR';
        let groupStatusStyle: string = 'cx-menu-item';
        if (
          configuration.owner.configuratorType !== CLOUDCPQ_CONFIGURATOR_TYPE &&
          !group.consistent
        ) {
          groupStatusStyle = groupStatusStyle + this.WARNING;
        }
        if (
          configuration.owner.configuratorType !== CLOUDCPQ_CONFIGURATOR_TYPE &&
          group.complete &&
          group.consistent &&
          (isVisited || this.isCurrentAndLastGroup(configuration.owner, group))
        ) {
          groupStatusStyle = groupStatusStyle + this.COMPLETE;
        }
        if (!group.complete && isVisited) {
          groupStatusStyle = groupStatusStyle + this.ERROR;
        }
        return groupStatusStyle;
      })
    );
  }

  isCurrentAndLastGroup(
    owner: CommonConfigurator.Owner,
    group: Configurator.Group
  ) {
    let isSame = false;
    if (this.isLastGroup(owner)) {
      this.currentGroup$.pipe(take(1)).subscribe((currentGroup) => {
        if (group.id == currentGroup.id) {
          isSame = true;
        }
      });
    }
    return isSame;
  }
  isLastGroup(owner: CommonConfigurator.Owner): Observable<boolean> {
    return this.configuratorGroupsService
      .getNextGroupId(owner)
      .pipe(map((group) => !group));
  }
  checkSubGroup(group: Configurator.Group) {
    if (group.subGroups.length > 0) {
      for (let subgroup of group.subGroups) {
        if (subgroup.attributes.length == 0) return false;
      }
    }
    return true;
  }

}
