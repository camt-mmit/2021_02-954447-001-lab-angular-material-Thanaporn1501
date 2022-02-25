import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { PortalModule } from '@angular/cdk/portal';

import { GoogleContactListPageComponent } from './pages/google-contact-list-page/google-contact-list-page.component';
import { GoogleContactComponent } from './pages/google-contact/google-contact.component';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';
import { GoogleContactsControlComponent } from './google/google-contacts-control/google-contacts-control.component';
import { GoogleContactsFormComponent } from './google/google-contacts-form/google-contacts-form.component';
import { GoogleContactsListComponent } from './google/google-contacts-list/google-contacts-list.component';
import { GoogleContactsCreatePageComponent } from './pages/google-contacts-create-page/google-contacts-create-page.component';

@NgModule({
  declarations: [
    GoogleContactListPageComponent,
    GoogleContactComponent,
    GoogleAuthorizationPageComponent,
    GoogleContactsControlComponent,
    GoogleContactsFormComponent,
    GoogleContactsListComponent,
    GoogleContactsCreatePageComponent,
  ],
  imports: [
    CommonModule,
    GoogleRoutingModule,
    ReactiveFormsModule,
    PortalModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
export class GoogleModule {}
