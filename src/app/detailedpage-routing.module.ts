import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedpageComponent } from './detailedpage/detailedpage.component';

const routes: Routes = [
  { path: 'detailedpage', loadChildren: () => import('./detailedpage/detailedpage.module').then(m => m.DetailedpageModule) }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailedpageRoutingModule { }
