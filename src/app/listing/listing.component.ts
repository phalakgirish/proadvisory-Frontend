import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-listing',
  imports: [NgClass, NgFor, NgForOf, FormsModule, RouterLink, NgIf, NavbarComponent, FooterComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
//   constructor(
//     public crud : CrudService 
//   ){ }

//   ngOnInit(): void {
//     console.log("HomeComponent Initialized");
//     this.loadData();
//   }
//   loadData()
// {
//   this.crud.getData("properties").subscribe(
//     {
//       next:(res:any)=>{
//         console.log(res);
//       },
//       error:(err:any)=>{

//       },
//       complete:()=>{

//       }  
//     }
//   )
// }
  showMore: boolean = false; // Track visibility of extra buttons

  buttons: string[] = ['Lift', 'Parking', 'Power Backup', 'Park', 'Gymnasium', 'Security', 'Clubhouse', 'Swimming Pool', 'Play Area', 'Fire Safety']; // Button names

  // Getter function to dynamically show/hide buttons
  get visibleButtons() {
    return this.showMore ? this.buttons : this.buttons.slice(0, 5);
  }

  // Toggle button visibility
  toggleAmenities() {
    this.showMore = !this.showMore;
  }
  selectedButtons: string[] = []; // Stores selected buttons
  selectedItems!: {};
  cdr: any;
  showOnlyVerified: any;

  toggleSelection(button: string) {
    if (this.selectedButtons.includes(button)) {
      // If already selected, remove from array (deselect)
      this.selectedButtons = this.selectedButtons.filter(b => b !== button);
    } else {
      // If not selected, add to array (select)
      this.selectedButtons.push(button);
    }
    console.log("Selected Buttons:", this.selectedButtons);
  }

  clearSelection() {
    this.selectedButtons = []; // Clear all selections
    console.log("Selections cleared!", this.selectedButtons);
  }
  checkboxes: string[] = ['Under Construction', 'Ready to move', 'New Launch'];
  selectedStatuses: string[] = []; // Stores selected status filters
  
  toggleStatusFilter(status: string) {
    if (this.selectedStatuses.includes(status)) {
      this.selectedStatuses = this.selectedStatuses.filter(s => s !== status);
    } else {
      this.selectedStatuses.push(status);
    }
  }
  
 


  verifiedListings: boolean = false;
  newLaunch: boolean = false;

  selectedLocation: string = '';
  selectedBHK: string = ''; // Track selected BHK type

  viewMode: string = 'grid'; // Default view

  items = [
    { id: 1, title: 'Tulip Wadhwa Wise City', description: '1 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹15 - 25 L', '₹25 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true ,status:'Ready to move' },
    { id: 2, title: 'Balaji Symphony', description: '2 BHK Apartment in Karwar', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹11 - 25 L', '₹25 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-2.png', featured: true,status:'Under Construction' },
    { id: 3, title: 'Marathon', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '3 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-3.png', featured: true ,status:'Under Construction'},
    { id: 4, title: 'The Highlands', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-5.png', featured: true,status:'Ready to move' },
    { id: 5, title: 'Olympia', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-4.png', featured: true ,status:'Under Construction'},
    { id: 6, title: 'Paradise', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹14 - 26 L', '₹26 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true, newLaunch: true ,status:'New Launch'}
  ];


  setView(mode: string) {
    console.log('Switching view to:', mode); // Debugging
    this.viewMode = mode;
  }

  loadMoreItems() {
    const newItems = [
      { id: 1, title: 'Tulip Wadhwa Wise City', description: '1 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹15 - 25 L', '₹25 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true, status:'Ready to move' },
      { id: 2, title: 'Balaji Symphony', description: '2 BHK Apartment in Karwar', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹11 - 25 L', '₹25 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-2.png', featured: true,status:'Under Construction' },
      { id: 3, title: 'Marathon', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-3.png', featured: true ,status:'Under Construction'},
      { id: 4, title: 'The Highlands', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-5.png', featured: true ,status:'Ready to move'},
      { id: 5, title: 'Olympia', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-4.png', featured: true ,status:'Under Construction'},
      { id: 6, title: 'Paradise', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹14 - 26 L', '₹26 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true ,status:'New Launch'}
    ];
    this.items = [...this.items, ...newItems]; // Append new properties
  }

  minValue: number = 0; // Initial min value (in Lakhs)
  maxValue: number = 1000; // Initial max value (in Lakhs)
  get filteredItems() {
    return this.items
      .filter(item => {
        // Ensure item contains the selected BHK, or show all if "All" is selected
        const matchesBHK = this.selectedBHK === 'All' || !this.selectedBHK || item.bhkOptions.includes(this.selectedBHK);

        // Ensure the item is verified if the toggle is active
        const isVerified = !this.showOnlyVerified || item.id === 1 || item.id === 5;

        // Ensure the item falls within the selected price range
        const matchesPrice = item.priceOptions.some(price => this.isWithinRange(price));

        // Show only New Launch items when checked
        const matchesNewLaunch = !this.newLaunch || item.id === 6 || item.id === 2;

        const matchesStatus = this.selectedStatuses.length === 0 || this.selectedStatuses.includes(item.status);
        

        return matchesBHK && isVerified && matchesPrice && matchesNewLaunch && matchesStatus;
      })
      .map(item => {
        // If "All" is selected or no specific BHK is chosen, return the full item
        if (this.selectedBHK === 'All' || !this.selectedBHK) return item;

        // Find the index of the selected BHK in bhkOptions
        const index = item.bhkOptions.indexOf(this.selectedBHK);

        // If the selected BHK exists, return only the relevant BHK and its price
        if (index !== -1) {
          return {
            ...item,
            bhkOptions: [this.selectedBHK], // Keep only selected BHK
            priceOptions: [item.priceOptions[index]] // Keep only price for selected BHK
          };
        }

        return item;
      });
}


  getBHKMessage() {
    if (this.selectedBHK === '1 RK') {
      return '1 RK apartments not found.';
    } else if (this.selectedBHK === 'Shop') {
      return 'No Shops available.';
    } else if (this.selectedBHK === 'Others') {
      return 'Other properties are not found.';
    }
    return ''; // Return an empty string if none match
  }


  isWithinRange(price: string): boolean {
    let range = price
      .replace(/[₹,]/g, '') // Remove ₹ and commas
      .replace(' Cr', '00') // Convert Crores to Lakhs (1 Cr = 100 L)
      .replace(' L', '') // Remove 'L' notation
      .split(' - ')
      .map(Number);

    if (range.length === 2) {
      // Ensure both min & max of item are within selected range
      return range[0] >= this.minValue && range[1] <= this.maxValue;
    }

    return false;
  }


  updateRange() {
    if (this.minValue > this.maxValue) {
      const temp = this.minValue;
      this.minValue = this.maxValue;
      this.maxValue = temp;
    }

    // Update the filtered items whenever the slider changes
    this.filterItems();
  }
  filterItems() {
    throw new Error('Method not implemented.');
  }


  updateSlider() {
    if (this.minValue > this.maxValue) {
      this.minValue = this.maxValue;
    }
  }

  formatValue(value: number): string {
    return value >= 100 ? (value / 100).toFixed(1) + ' Cr' : value + ' L';
  }

  getLabelPosition(value: number): number {
    return (value / 1000) * 100; // Convert value to percentage for positioning
  }
  sendWhatsAppMessage() {
    const phoneNumber = "91XXXXXXXXXX"; // Replace with the actual number (including country code)
    const message = encodeURIComponent("Hello, I'm interested in this property. Can you provide more details?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, '_blank');
  }

}
