// component-library-wrapper.module.ts
import { NgModule, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@NgModule({})
export class ComponentLibraryWrapperModule {
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    if (isPlatformBrowser(platformId)) {
      // Dynamically import the module only in browser
      import('@bh-digital-solutions/ui-toolkit-angular/dist/').then((m) => {
        // You can use m.ComponentLibraryModule here if needed
      });
    }
  }
}
