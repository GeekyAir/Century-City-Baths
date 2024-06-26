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
  imports: [
    RouterLink,
    RouterLinkActive,
    MegaMenuModule,
    CommonModule,
    RouterModule,
    MenubarModule,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private Router: Router) {}
  contactUs() {
    this.Router.navigate(['/contact']);
  }
}
