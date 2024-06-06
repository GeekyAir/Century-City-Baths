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
  {
    path: 'Patio-Door',
    loadComponent: () =>
      import('./components/windows/patio-door/patio-door.component').then(
        (c) => c.PatioDoorComponent
      ),
  },
  {
    path: 'Shapes-and-Picture',
    loadComponent: () =>
      import(
        './components/windows/shapes-and-picture/shapes-and-picture.component'
      ).then((c) => c.ShapesAndPictureComponent),
  },
  {
    path: 'Sliding-Replacement',
    loadComponent: () =>
      import(
        './components/windows/sliding-replacement/sliding-replacement.component'
      ).then((c) => c.SlidingReplacementComponent),
  },
  {
    path: 'Bay-and-Bow',
    loadComponent: () =>
      import('./components/windows/bay-and-bow/bay-and-bow.component').then(
        (c) => c.BayAndBowComponent
      ),
  },
  {
    path: 'Casement-Replacement',
    loadComponent: () =>
      import(
        './components/windows/casement-replacement/casement-replacement.component'
      ).then((c) => c.CasementReplacementComponent),
  },
  {
    path: 'Double-Hung',
    loadComponent: () =>
      import('./components/windows/double-hung/double-hung.component').then(
        (c) => c.DoubleHungComponent
      ),
  },
  {
    path: 'Energy-Efficient',
    loadComponent: () =>
      import(
        './components/windows/energy-efficient/energy-efficient.component'
      ).then((c) => c.EnergyEfficientComponent),
  },
  {
    path: 'Financing',
    loadComponent: () =>
      import('./components/financ/financ.component').then(
        (c) => c.FinancComponent
      ),
  },

  {
    path: 'promotions',
    loadComponent: () =>
      import('./components/promotions/promotions.component').then(
        (c) => c.PromotionsComponent
      ),
  },

  {
    path: 'surrounding-areas',
    loadComponent: () =>
      import('./components/surrounding-areas/surrounding-areas.component').then(
        (c) => c.SurroundingAreasComponent
      ),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./components/faq/faq.component').then((c) => c.FaqComponent),
  },
  {
    path: 'Privacy-Policy',
    loadComponent: () =>
      import('./components/privacy-policy/privacy-policy.component').then(
        (c) => c.PrivacyPolicyComponent
      ),
  },
];
