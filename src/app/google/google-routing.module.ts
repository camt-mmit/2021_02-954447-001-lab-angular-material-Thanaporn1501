import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleAuthorizationPageComponent } from './pages/google-authorization-page/google-authorization-page.component';

import { GoogleContactListPageComponent } from './pages/google-contact-list-page/google-contact-list-page.component';
import { GoogleContactComponent } from './pages/google-contact/google-contact.component';
import { GoogleContactsCreatePageComponent } from './pages/google-contacts-create-page/google-contacts-create-page.component';

const routes: Routes = [
  { path: 'authorization', component: GoogleAuthorizationPageComponent },
  {
    path: '',
    component: GoogleContactComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: GoogleContactListPageComponent },
      {
        path: 'createContact',
        component: GoogleContactsCreatePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleRoutingModule {}
