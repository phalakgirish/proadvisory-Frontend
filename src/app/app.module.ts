import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Ensure this is imported
import { CustomizeComponent } from './customize/customize.component';
import { AppRoutingModule } from './app-routing.module';
import { ListingComponent } from './listing/listing.component';
import { DetailedpageComponent } from './detailedpage/detailedpage.component';
import { CrudService } from './service/crud.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,CustomizeComponent,ListingComponent,DetailedpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,AppRoutingModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
