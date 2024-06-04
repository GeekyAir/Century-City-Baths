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
    path: 'gallery',
    loadComponent: () =>
      import('./components/gallery/gallery.component').then(
        (c) => c.GalleryComponent
      ),
  },
  {
    path: 'walk-in-showers',
    loadComponent: () =>
      import(
        './components/bathroom/walk-in-showers/walk-in-showers.component'
      ).then((c) => c.WalkInShowersComponent),
  },
  {
    path: 'shower-to-tub',
    loadComponent: () =>
      import(
        './components/bathroom/shower-to-tub/shower-to-tub.component'
      ).then((c) => c.ShowerToTubComponent),
  },
  {
    path: 'tub-to-shower',
    loadComponent: () =>
      import(
        './components/bathroom/tub-to-shower/tub-to-shower.component'
      ).then((c) => c.TubToShowerComponent),
  },

  {
    path: 'bathtub-replacement',
    loadComponent: () =>
      import(
        './components/bathroom/bathtub-replacement/bathtub-replacement.component'
      ).then((c) => c.BathtubReplacementComponent),
  },
  {
    path: 'flooring',
    loadComponent: () =>
      import('./components/bathroom/flooring/flooring.component').then(
        (c) => c.FlooringComponent
      ),
  },
];
