import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalModule } from '@angular/cdk/portal';

import { ExampleListRoutingModule } from './example-list-routing.module';
import { ExampleListComponent } from './pages/example-list/example-list.component';
import { ExampleListNormalPageComponent } from './pages/example-list-normal-page/example-list-normal-page.component';
import { ExampleListNavigationPageComponent } from './pages/example-list-navigation-page/example-list-navigation-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    ExampleListComponent,
    ExampleListNormalPageComponent,
    ExampleListNavigationPageComponent,
  ],
  imports: [
    CommonModule,
    PortalModule,
    MatToolbarModule,
    ExampleListRoutingModule,
    MatListModule,
    MatIconModule,
  ],
})
export class ExampleListModule {}
