import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardModule, GalleriaModule, ReactiveFormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  displayBasic: boolean = false

  images: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5
    },
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
  ngOnInit() {
    this.images = [
      { itemImageSrc: '../../../assets/home/se2.jpg' },
      { itemImageSrc: '../../../assets/home/se1.jpg' },
      { itemImageSrc: '../../../assets/home/se3.jpg' },
      { itemImageSrc: '../../../assets/home/se3.jpg' },
      { itemImageSrc: '../../../assets/home/se3.jpg' },
      { itemImageSrc: '../../../assets/home/se3.jpg' },


      // Add more images as needed
    ];
  }
  showGallery() {
    this.displayBasic = true;
  }
  closeGallery() {
    this.displayBasic = false;
  }


}
