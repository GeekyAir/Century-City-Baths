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
  menuVisible = false;


  ngOnInit() {
    this.items = [
      {
        label: 'Recent Bathroom Projects',

        routerLink: ['/Gallery']
      },
      {
        label: 'Recent Window Projects',

        routerLink: ['/Gallery']
      }
      // Add more items here as needed
    ];
  }

  showMenu() {
    this.menuVisible = true;
  }

  hideMenu() {
    this.menuVisible = false;
  }
}


