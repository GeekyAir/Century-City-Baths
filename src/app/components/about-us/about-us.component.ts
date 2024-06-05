import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { FormComponent } from '../../shared/form/form.component';
import { CardModule } from 'primeng/card';
import { ServicesComponent } from '../../shared/services/services.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    GalleriaModule,
    CommonModule,
    FormComponent,
    CardModule,
    ServicesComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  images: string[] = ['../../../assets/About-us/galleria 1.jpg'];

  displayCustom: boolean = false;

  activeIndex: number = 0;

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

  imageClick(index: number) {
    // this.activeIndex = index;
    this.displayCustom = true;
  }
}
