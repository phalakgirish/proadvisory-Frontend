import { NgClass, NgFor, NgIf } from '@angular/common';
import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-customize',
  imports: [NgIf, NgFor, FormsModule, RouterLink,NgClass,NavbarComponent,FooterComponent],
  templateUrl: './customize.component.html',
  styleUrl: './customize.component.css'
})
export class CustomizeComponent implements AfterViewChecked,OnInit,OnDestroy{
  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    console.log("HomeComponent Initialized");
  }
  ngAfterViewChecked(): void {
    console.log("HomeComponent Initialized");
  }
  ngOnDestroy(): void {
    console.log("HomeComponent Initialized");
  }

  buttons: string[] = ['Residential', 'Commercial']; // Button names
  selectedButtons: string[] = []; // Stores selected buttons

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

  buttons1: string[] = [
    'Flat/Apartment',
    'Independent House/Villa',
    'Plot/Land',
    'Independent/Builder Floor'
  ]; // Button names

  selectedButtons1: string[] = []; // Stores selected buttons

  toggleSelection1(button: string) {
    if (this.selectedButtons1.includes(button)) {
      // If already selected, remove from array (deselect)
      this.selectedButtons1 = this.selectedButtons1.filter(b => b !== button);
    } else {
      // If not selected, add to array (select)
      this.selectedButtons1.push(button);
    }
    console.log("Selected Buttons:", this.selectedButtons1);
  }

  buttons2: string[] = [
    '1 RK',
    '1 BHK',
    '2 BHK',
    '3 BHK',
    'Others'
  ]; // Button names

  selectedButtons2: string[] = []; // Stores selected buttons

  toggleSelection2(button: string) {
    if (this.selectedButtons1.includes(button)) {
      // If already selected, remove from array (deselect)
      this.selectedButtons1 = this.selectedButtons1.filter(b => b !== button);
    } else {
      // If not selected, add to array (select)
      this.selectedButtons1.push(button);
    }
    console.log("Selected Buttons:", this.selectedButtons1);
  }

  isDropdownOpen = false; // Controls dropdown visibility

  // Initial Button Name
  buttons3: string[] = ['---Select---'];

  // Location options
  locations: string[] = ['Ulwe', 'Karwar'];

  selectedButtons3: string[] = []; // Stores selected locations

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleSelection3(location: string) {
    if (this.selectedButtons3.includes(location)) {
      // Remove if already selected
      this.selectedButtons3 = this.selectedButtons3.filter(l => l !== location);
    } else {
      // Add if not selected
      this.selectedButtons3.push(location);
    }
  }
}
