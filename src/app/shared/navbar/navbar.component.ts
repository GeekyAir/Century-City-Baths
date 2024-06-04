import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MegaMenuModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MegaMenuItem[] | undefined;
  itemsBathroom: MegaMenuItem[] | undefined;
  menuVisible = false;
  constructor() {
    this.items = [
      {
        label: 'Bathroom',
        items: [
          [
            {
              label: 'Accessories',
              imgSrc: '../../../assets/navbar/bathtub-replacement.jpg',
              routerLink: '/Bathroom/Accessories',
            },
            {
              label: 'Armchair',
              imgSrc: 'path/to/armchair-image.jpg',
              routerLink: '/Bathroom/Armchair',
            },
            {
              label: 'Coffee Table',
              imgSrc: 'path/to/coffee-table-image.jpg',
              routerLink: '/Bathroom/CoffeeTable',
            },
            {
              label: 'Couch',
              imgSrc: 'path/to/couch-image.jpg',
              routerLink: '/Bathroom/Couch',
            },
            {
              label: 'TV Stand',
              imgSrc: 'path/to/tv-stand-image.jpg',
              routerLink: '/Bathroom/TVStand',
            },
          ],
        ],
      },
      // Add other menu items as needed
    ];
  }

  ngOnInit() {
    // this.items = [
    //   {
    //     label: 'Recent Bathroom Projects',

    //     routerLink: ['/Gallery']
    //   },
    //   {
    //     label: 'Recent Window Projects',

    //     routerLink: ['/Gallery']
    //   },
    // ];
    // this.itemsBathroom = []

    this.items = [
      { label: 'Home', routerLink: '/home' },
      {
        label: 'Bathroom',
        items: [
          [
            {
              label: 'Accessories',
              imgSrc: '../../../assets/navbar/bathtub-replacement.jpg',
              routerLink: '/Bathroom/Accessories',
            },
            {
              label: 'Armchair',
              imgSrc: 'path/to/armchair-image.jpg',
              routerLink: '/Bathroom/Armchair',
            },
            {
              label: 'Coffee Table',
              imgSrc: 'path/to/coffee-table-image.jpg',
              routerLink: '/Bathroom/CoffeeTable',
            },
            {
              label: 'Couch',
              imgSrc: 'path/to/couch-image.jpg',
              routerLink: '/Bathroom/Couch',
            },
            {
              label: 'TV Stand',
              imgSrc: 'path/to/tv-stand-image.jpg',
              routerLink: '/Bathroom/TVStand',
            },
          ],
        ],
      },
      {
        label: 'Gallery',
        items: [
          [
            { label: 'Recent Bathroom Projects', routerLink: ['/gallery'] },
            { label: 'Recent Window Projects', routerLink: ['/gallery'] },
          ],
        ],
      },
      {
        label: 'About Us',
        routerLink: '/about-us',
      },
    ];
  }

  showMenu() {
    this.menuVisible = true;
  }

  hideMenu() {
    this.menuVisible = false;
  }
}
