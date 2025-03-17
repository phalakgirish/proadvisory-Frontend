import { NgFor, NgIf } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor, FormsModule, RouterLink,NavbarComponent,FooterComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewChecked, OnInit, OnDestroy {
  // isDropdownVisible: boolean = false;
  // dropdownItems: string[] = ["Flat/Apartment", "Independent/Builder Floor", "Independent House/Villa", "Residential Land", "1 RK/Studio Apartment", "Farm House", "Serviced Apartments", "Other"];
  // selectedItems: { [key: string]: boolean } = {};

  @ViewChild('dropdownMenu') dropdownMenu!: ElementRef;
  dropdownHTML: any;

  constructor(private cdr: ChangeDetectorRef,private router: Router) { }
  ngOnInit(): void {
    console.log("HomeComponent Initialized");
  }
  ngAfterViewChecked(): void {
    console.log("HomeComponent Initialized");
  }
  ngOnDestroy(): void {
    console.log("HomeComponent Initialized");
  }

  ngAfterViewInit(): void { }

  items = [
    { id: 1, name: 'Tulip Wadhwa Wise City', description: '1 BHK Apartment in Ulwe, Navi Mumbai', bigImage: 'cont-1.png', priceRange: '₹15 - 25 L', bhk: ['1 BHK', '2 BHK'] },
    { id: 2, name: 'Balaji Symphony', description: '2 BHK Apartment in Karwar, Navi Mumbai', bigImage: 'cont-2.png', priceRange: '₹11 - 25 L', bhk: ['1 BHK', '2 BHK'] },
    { id: 3, name: 'Marathon', description: '2 BHK Apartment in Ulwe, Navi Mumbai', bigImage: 'cont-3.png', priceRange: '₹16 - 26 L', bhk: ['1 BHK', '2 BHK'] },
    { id: 4, name: 'Olympia', description: '2 BHK Apartment in Ulwe, Navi Mumbai', bigImage: 'cont-4.png', priceRange: '₹16 - 26 L', bhk: ['1 BHK', '2 BHK'] }
  ];

  viewDetails(propertyId: number) {
    this.router.navigate(['/detailedpage', propertyId]);
  }

  selectedCategory: string = 'All Residential'; // Default selection
  isDropdownVisible: boolean = false;

  // Define different dropdown lists for each category
  residentialItems: string[] = ["Flat/Apartment", "Independent/Builder Floor", "Independent House/Villa", "Residential Land", "1 RK/Studio Apartment", "Farm House", "Serviced Apartments", "Other"];
  commercialItems: string[] = ['Ready to move offices', 'Shops & Retail', 'Agricultural/Farm Land','Warehouse','Factory & Manufacturing','Bare shell offices','Commercial/Inst. Land','Industrial Land/Plots','Cold Storage','Hotel/Resorts','Others'];
  investmentOptions: string[] = [
    'Pre Leased Spaces',
    'Food Courts',
    'Restaurants',
    'Multiplexes',
    'SCO Plots'
  ];
  newLaunchItems: string[] = ['Upcoming Apartments', 'New Villas', 'Plotted Developments'];

  dropdownItems: string[] = this.residentialItems; // Default dropdown items
  selectedItems: { [key: string]: boolean } = {};

  toggleDropdown(event: Event) {
    this.isDropdownVisible = !this.isDropdownVisible;
    event.stopPropagation();
  }

  selectCategory(category: string) {
    this.selectedCategory = category;

    // Change dropdown items based on category
    if (category === 'All Residential') {
      this.dropdownItems = this.residentialItems;
    } else if (category === 'Commercial') {
      this.dropdownItems = this.commercialItems;
    } else if (category === 'New Launch') {
      this.dropdownItems = this.newLaunchItems;
    }
  }

  clearSelection() {
    this.selectedItems = {};
  }
}