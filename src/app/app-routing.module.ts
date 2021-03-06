import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFormModule } from './example-form/example-form.module';
import { ExampleListModule } from './example-list/example-list.module';
import { GoogleModule } from './google/google.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    loadChildren: () =>
      import('./example-list/example-list.module').then(
        (m) => ExampleListModule,
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./example-form/example-form.module').then(
        (m) => ExampleFormModule,
      ),
  },
  {
    path: 'google',
    loadChildren: () =>
      import('./google/google.module').then((m) => GoogleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
