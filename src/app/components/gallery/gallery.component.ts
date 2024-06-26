import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { GalleriaModule } from 'primeng/galleria';
import { GalleryService } from '../../core/services/gallery.service';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardModule, GalleriaModule, ReactiveFormsModule, SpinnerComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  displayBasic: boolean = false;
  displaywindows: boolean = false;
  spinner: boolean = false;

  windowsImages: any[] | undefined;
  bathroomsImages: any[] | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  constructor(private GalleryService: GalleryService) {}
  ngOnInit() {
    this.getWindows();
    this.getBathrooms();
  }
  // showGallery() {
  //   this.displayBasic = true;
  //   this.displaywindows = true;
  // }
  showGallery() {
    if (this.displayBasic === true && this.displaywindows === true) {
      this.closeGallery();
    } else if (this.displayBasic === true) {
      this.displaywindows = true;
    } else {
      this.displayBasic = true;
    }
  }
  closeGallery() {
    if (this.displayBasic === true) {
      this.displayBasic = false;
    }
    if (this.displaywindows === true) {
      this.displaywindows = false;
    }
  }
  // closeGallery() {
  //   this.displayBasic = false;
  //   this.displaywindows = false;
  // }
  getWindows() {
    this.spinner = true;
    this.GalleryService.getWindows().subscribe({
      next: (res) => {
        this.spinner = false;
        console.log(res);
        this.windowsImages = res;
      },
      error: (err) => {
        this.spinner = true;
        console.log(err);
      },
    });
  }
  getBathrooms() {
    this.spinner = true;
    this.GalleryService.getBathrooms().subscribe({
      next: (res) => {
        this.spinner = false;
        console.log(res);
        this.bathroomsImages = res;
      },
      error: (err) => {
        this.spinner = true;
        console.log(err);
      },
    });
  }
}
