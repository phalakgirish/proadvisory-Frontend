import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomizeComponent } from './customize/customize.component';
import { DetailedpageComponent } from './detailedpage/detailedpage.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'customize', component: CustomizeComponent },
  {path:'listing', component:ListingComponent},
  { path: 'detailedpage/:id', component: DetailedpageComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
