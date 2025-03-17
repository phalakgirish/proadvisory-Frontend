import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Ensure this is imported
import { CustomizeComponent } from './customize/customize.component';
import { AppRoutingModule } from './app-routing.module';
import { ListingComponent } from './listing/listing.component';
import { DetailedpageComponent } from './detailedpage/detailedpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,CustomizeComponent,ListingComponent,DetailedpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
