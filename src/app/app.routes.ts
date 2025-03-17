import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomizeComponent } from './customize/customize.component';
import { DetailedpageComponent } from './detailedpage/detailedpage.component';
import { ListingComponent } from './listing/listing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path:'customize',
        component: CustomizeComponent
    },
    {
        path:'detailedpage/:id',
        component: DetailedpageComponent
    },
    {
        path:'listing',
        component: ListingComponent
    },
    {
        path:'navbar',
        component:NavbarComponent
    },
    {
        path:'footer',
        component:FooterComponent
    }
];
