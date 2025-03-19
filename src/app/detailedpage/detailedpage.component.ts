import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-detailedpage',
  imports: [CommonModule, FormsModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './detailedpage.component.html',
  styleUrl: './detailedpage.component.css'
})
export class DetailedpageComponent implements AfterViewInit, OnInit {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  selectedCard: any = null;
  cardId: number | null = null;


  items = [
    {
      id: 1,
      location: 'Ulwe, Navi Mumbai',
      propertyTitle: 'Tulip Wadhwa Wise City',
      constructionStatus: 'Under Construction',
      priceRange: '1.47 - 3.77 Cr',
      apartmentType: '2,3,4,5 BHK Apartment',
      pricePerSqft: '60,000',
      beds: 5, baths: 4, sqft: 1334,
      carpetArea: 530, bedrooms: 1, balcony: 'No Balcony', bathrooms: 1,
      parking: '1 Open Parking', addedDate: 'December 2024',
      propertyId: '12345', reraNumber: '987654321',
      possessionDate: '31-12-2025', propertyFloor: '4 out of 7',
      image: 'cont-1.png',
      bigImage: 'big-cont1img.png',
      smallImage1: 'small-cont1.png',
      smallImage2: 'small-cont2.png',
      title:'1BHk'
    },
    {
      id: 2,
      location: 'Karwar, Navi Mumbai',
      propertyTitle: 'Balaji Symphony',
      constructionStatus: 'Ready to Move',
      priceRange: '₹15 - 30 L',
      apartmentType: '1 BHK Apartment',
      pricePerSqft: '50,000',
      beds: 2, baths: 2,
      carpetArea: 780, bedrooms: 2, balcony: '1 Balcony',
      parking: 'Covered Parking', addedDate: 'January 2024',
      propertyId: '67890', reraNumber: '123456789',
      possessionDate: '31-12-2024', propertyFloor: '6 out of 10',
      image: 'cont-2.png',
      bigImage: 'cont-2.png',
      smallImage1: 'small-cont1.png',
      smallImage2: 'small-cont2.png'
    },
    {
      id: 3,
      location: 'Ulwe, Navi Mumbai',
      propertyTitle: 'Marathon',
      constructionStatus: 'Ready to Move',
      priceRange: '₹11 - 27 L',
      apartmentType: '2 BHK Apartment',
      pricePerSqft: '50,000',
      beds: 4, baths: 2,
      carpetArea: 780, bedrooms: 2, balcony: '1 Balcony',
      parking: 'Covered Parking', addedDate: 'January 2024',
      propertyId: '67890', reraNumber: '123456789',
      possessionDate: '31-12-2024', propertyFloor: '9 out of 10',
      image: 'cont-2.png',
      bigImage: 'cont-3.png',
      smallImage1: 'small-cont1.png',
      smallImage2: 'small-cont2.png'
    },
    {
      id: 4,
      location: 'Ulwe, Navi Mumbai',
      propertyTitle: 'The Highlands',
      constructionStatus: 'Ready to Move',
      priceRange: '₹11 - 25 L',
      apartmentType: '3 BHK Apartment',
      pricePerSqft: '50,000',
      beds: 4, baths: 2,
      carpetArea: 780, bedrooms: 2, balcony: '1 Balcony',
      parking: 'Covered Parking', addedDate: 'January 2024',
      propertyId: '67890', reraNumber: '123456789',
      possessionDate: '31-12-2024', propertyFloor: '9 out of 10',
      image: 'cont-2.png',
      bigImage: 'cont-5.png',
      smallImage1: 'small-cont1.png',
      smallImage2: 'small-cont2.png'
    },
    {
      id: 5,
      location: 'Ulwe, Navi Mumbai',
      propertyTitle: 'Olympia',
      constructionStatus: 'Ready to Move',
      priceRange: '₹11 - 25 L',
      apartmentType: '4 BHK Apartment',
      pricePerSqft: '50,000',
      beds: 4, baths: 2,
      carpetArea: 800, bedrooms: 2, balcony: '1 Balcony',
      parking: 'Covered Parking', addedDate: 'January 2024',
      propertyId: '67890', reraNumber: '123456789',
      possessionDate: '31-12-2024', propertyFloor: '9 out of 10',
      image: 'cont-2.png',
      bigImage: 'olympia.png',
      smallImage1: 'small-cont1.png',
      smallImage2: 'small-cont2.png'
    },
    {
      id: 6,
      location: 'Ulwe, Navi Mumbai',
      propertyTitle: 'Paradise',
      constructionStatus: 'Ready to Move',
      priceRange: '₹11 - 25 L',
      apartmentType: '5 BHK Apartment',
      pricePerSqft: '50,000',
      beds: 4, baths: 2,
      carpetArea: 780, bedrooms: 2, balcony: '1 Balcony',
      parking: 'Covered Parking', addedDate: 'January 2024',
      propertyId: '67890', reraNumber: '123456789',
      possessionDate: '31-12-2024', propertyFloor: '9 out of 10',
      image: 'cont-2.png',
      bigImage: 'cont-1.png',
      smallImage1: 'small-cont1.png',
      smallImage2: 'small-cont2.png'
    }
  ];
  cdr: any;

  constructor(private route: ActivatedRoute, private router: Router) { }
  selectedItem: typeof this.items[0] | undefined = undefined;
  item: typeof this.items[0] | undefined = undefined;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId = params.get('id');
      console.log("Raw param ID:", paramId); // Debugging

      if (paramId) {
        this.selectedItem = this.items.find(item => item.id === Number(paramId));
        console.log("Extracted Selected Item:", this.selectedItem);
      }

      if (!this.selectedItem) {
        console.error("No matching property found!");
      }
    });
    this.generateCards();

  }






  // selectedItem = this.items[0]; // Default selection

  selectProperty(id: number) {
    this.selectedItem = this.items.find(item => item.id === id) || this.items[0];
    console.log("Updated selectedItem:", this.selectedItem);
  }


  cards: { title: string; area: string; price: string }[] = [];



  generateCards() {
    this.cards = this.items.map(item => ({
      title: item.apartmentType,
      area: `${item.carpetArea} sqft`,
      price: `${item.priceRange}+Charges`
    }));
  }

  ngAfterViewInit() {
    console.log("Slider initialized:", this.slider.nativeElement);
  }

  // Moves slider LEFT when clicking RIGHT arrow
  scrollRight() {
    if (this.slider?.nativeElement) {
      this.slider.nativeElement.scrollLeft += 320;
    }
  }

  // Moves slider RIGHT when clicking LEFT arrow
  scrollLeft() {
    if (this.slider?.nativeElement) {
      this.slider.nativeElement.scrollLeft -= 320;
    }
  }


  activeTab = 'description'; // Default active tab
  isExpanded = false; // Controls Read More toggle

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  toggleReadMore() {
    this.isExpanded = !this.isExpanded;
  }
  buttons: { label: string; icon: string }[] = [
    { label: '1 BHK', icon: 'floor-icon.png' },
    { label: '2 BHK', icon: 'floor-icon.png' }
  ];

  selectedFloor: string | null = null;

  floorImages: { [key: string]: string } = {
    '1 BHK': '1bhkplan.png',
    // '2 BHK': 'assets/images/2bhk-floor-plan.jpg'
  };

  toggleSelection(button: { label: string }) {
    this.selectedFloor = this.selectedFloor === button.label ? null : button.label;
    console.log("Selected Floor:", this.selectedFloor); // Debugging log
  }

  getImage(): string {
    console.log("Image Path:", this.selectedFloor ? this.floorImages[this.selectedFloor] : '');
    return this.selectedFloor ? this.floorImages[this.selectedFloor] : '';
  }


  isPhotoModalOpen = false;
  photos = [
    'small-cont1.png',
    'small-cont2.png',
    'small-cont1.png',
    'small-cont2.png'
  ];
  currentIndex = 1; // Start from the second image (middle one)

  togglePhotos() {
    this.isPhotoModalOpen = !this.isPhotoModalOpen;

    if (this.isPhotoModalOpen) {
      document.body.style.overflow = 'hidden';  // Disable scrolling
    } else {
      document.body.style.overflow = 'auto';  // Enable scrolling when closed
    }
  }

  prevPhoto() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextPhoto() {
    if (this.currentIndex < this.photos.length - 1) {
      this.currentIndex++;
    }
  }



  sendWhatsAppMessage() {
    const phoneNumber = "91XXXXXXXXXX"; // Replace with the actual number (including country code)
    const message = encodeURIComponent("Hello, I'm interested in this property. Can you provide more details?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  
    window.open(whatsappURL, '_blank');
  }


}