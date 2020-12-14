import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Modules dependency*/
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
/** --END */

import { LayoutSidebarComponent } from './layouts/layout-sidebar/layout-sidebar.component';
import { LayoutContentComponent } from './layouts/layout-content/layout-content.component';

@NgModule({
  declarations: [LayoutSidebarComponent, LayoutContentComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [LayoutSidebarComponent, LayoutContentComponent],
})
export class CoreModule { }
