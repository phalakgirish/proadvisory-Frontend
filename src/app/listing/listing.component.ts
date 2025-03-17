import { NgClass, NgFor, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-listing',
  imports: [NgClass, NgFor, NgForOf, FormsModule, RouterLink, NgIf,NavbarComponent,FooterComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {
  buttons: string[] = ['Lift', 'Parking', 'Power Backup', 'Park', 'Gymnasium']; // Button names
  selectedButtons: string[] = []; // Stores selected buttons
  selectedItems!: {};
  cdr: any;

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


  verifiedListings: boolean = false;
  newLaunch: boolean = false;


  viewMode: string = 'grid'; // Default view

  items = [
    { id: 1, title: 'Tulip Wadhwa Wise City', description: '1 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹15 - 25 L', '₹25 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true },
    { id: 2, title: 'Balaji Symphony', description: '2 BHK Apartment in Karwar', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹11 - 25 L', '₹25 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-2.png', featured: true },
    { id: 3, title: 'Marathon', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-3.png', featured: true },
    { id: 4, title: 'The Highlands', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-5.png', featured: true },
    { id: 5, title: 'Olympia', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-4.png', featured: true },
    { id: 6, title: 'Paradise', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹14 - 26 L', '₹26 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true }
  ];

  setView(mode: string) {
    console.log('Switching view to:', mode); // Debugging
    this.viewMode = mode;
  }

  loadMoreItems() {
    const newItems = [
      { id: 1, title: 'Tulip Wadhwa Wise City', description: '1 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹15 - 25 L', '₹25 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true },
      { id: 2, title: 'Balaji Symphony', description: '2 BHK Apartment in Karwar', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹11 - 25 L', '₹25 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-2.png', featured: true },
      { id: 3, title: 'Marathon', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-3.png', featured: true },
      { id: 4, title: 'The Highlands', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-5.png', featured: true },
      { id: 5, title: 'Olympia', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹16 - 26 L', '₹26 - 30 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-4.png', featured: true },
      { id: 6, title: 'Paradise', description: '2 BHK Apartment in Ulwe', bhkOptions: ['1 BHK', '2 BHK'], priceOptions: ['₹14 - 26 L', '₹26 - 40 L'], beds: 4, baths: 2, hasParking: true, image: 'cont-1.png', featured: true }
    ];
    this.items = [...this.items, ...newItems]; // Append new properties
  }

  minValue: number = 0; // Initial min value (in Lakhs)
  maxValue: number = 1000; // Initial max value (in Lakhs)

  updateRange() {
    if (this.minValue > this.maxValue) {
      this.minValue = this.maxValue;
    }
  }

  updateSlider() {
    if (this.minValue > this.maxValue) {
      this.minValue = this.maxValue;
    }
  }

  formatValue(value: number): string {
    if (value >= 100) {
      return (value / 100).toFixed(1) + ' Cr'; // Convert 1000L to 10Cr
    }
    return value + ' L'; // Default in Lakhs
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
