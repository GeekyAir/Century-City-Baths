import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tub-to-shower',
  standalone: true,
  imports: [ServicesComponent, SidePanelComponent, RouterLink],
  templateUrl: './tub-to-shower.component.html',
  styleUrl: './tub-to-shower.component.scss',
})
export class TubToShowerComponent {}
