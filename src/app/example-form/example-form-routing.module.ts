import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleFormComplexPageComponent } from './page/example-form-complex-page/example-form-complex-page.component';
import { ExampleFormSimplePageComponent } from './page/example-form-simple-page/example-form-simple-page.component';
import { ExampleFormComponent } from './page/example-form/example-form.component';

const routes: Routes = [
  {
    path: '',
    component: ExampleFormComponent,
    children: [
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: 'simple', component: ExampleFormSimplePageComponent },
      { path: 'complex', component: ExampleFormComplexPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExampleFormRoutingModule {}
