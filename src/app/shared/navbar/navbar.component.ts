import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenuModule } from 'primeng/megamenu';
import { Router } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

interface MenuItem {
  label: string;
  imgSrc?: string;
  routerLink?: any;
  route?: string;
  command?: () => void;
  items?: MenuItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MegaMenuModule, CommonModule, RouterModule, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  items: MenuItem[] | undefined;
  itemsBathroom: MegaMenuItem[] | undefined;
  menuVisible = false;
  label!: string;
  constructor(private router: Router) {

  }

  ngOnInit() {

    // this.items = [
    //   { label: 'Home', routerLink: '/home' },
    //   {
    //     label: 'Bathroom',
    //     items: [
    //       [
    //         {
    //           label: 'Tub to Shower Conversions',
    //           imgSrc: '../../../assets/navbar/bathtub-replacement.jpg',
    //           route: '/gallery'
    //         },
    //         {
    //           label: 'Shower to Tub Conversions',
    //           imgSrc: 'path/to/armchair-image.jpg',
    //           routerLink: '/bathroom/shower-to-tub'
    //         },
    //         {
    //           label: 'Walk-In Showers',
    //           imgSrc: 'path/to/coffee-table-image.jpg',
    //           command: () => {
    //             this.router.navigate(['/gallery']);
    //           }

    //         },
    //         {
    //           label: 'Bathtub Replacement',
    //           imgSrc: 'path/to/couch-image.jpg',
    //           routerLink: '/gallery'
    //         },
    //         {
    //           label: 'Flooring, Vanity, Drywall',
    //           imgSrc: 'path/to/tv-stand-image.jpg',
    //           routerLink: '/gallery'
    //         }
    //       ]
    //     ]
    //   },
    //   {
    //     label: 'Gallery',
    //     items: [
    //       [
    //         { label: 'Recent Bathroom Projects', routerLink: ['/Gallery'] },
    //         { label: 'Recent Window Projects', routerLink: ['/Gallery'] },

    //       ]
    //     ]
    //   },
    //   {
    //     label: 'About Us', routerLink: '/about-us'
    //   }
    // ];
    this.items = [
      {
        label: 'Home',
        route: '/home'
      },
      {
        label: 'Bathroom',
        items: [
          {
            label: 'Tub to Shower Conversions',
            route: '/gallery'
          },
          {
            label: 'Shower to Tub Conversions',
            route: '/gallery'
          },
          {
            label: 'Walk-In Showers',
            route: '/gallery'
          },
          {
            label: 'Bathtub Replacement',
            route: '/gallery'
          },
          {
            label: 'Flooring, Vanity, Drywall',
            route: '/gallery'
          }
        ]
      },
      {
        label: 'Gallery',
        items: [
          {
            label: 'Recent Bathroom Projects',
            route: '/gallery'
          },
          {
            label: 'Recent Window Projects',
            route: '/gallery'
          }
        ]
      },
      {
        label: 'About Us',
        route: '/about-us'
      }
    ];
  }




  showMenu() {
    this.menuVisible = true;
  }

  hideMenu() {
    this.menuVisible = false;
  }

}
