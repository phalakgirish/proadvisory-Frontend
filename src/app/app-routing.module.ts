import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomizeComponent } from './customize/customize.component';
import { DetailedpageComponent } from './detailedpage/detailedpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customize', component: CustomizeComponent },
  { path: 'detailedpage/:id', component: DetailedpageComponent }// Route must be defined here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
