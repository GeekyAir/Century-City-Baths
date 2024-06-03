import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('./components/about-us/about-us.component').then(
        (c) => c.AboutUsComponent
      ),
  },
  {
    path: 'Gallery',
    loadComponent: () =>
      import('./components/gallery/gallery.component').then(
        (c) => c.GalleryComponent
      ),
  },
];
