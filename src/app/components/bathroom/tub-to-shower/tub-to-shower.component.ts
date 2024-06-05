import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';

@Component({
  selector: 'app-tub-to-shower',
  standalone: true,
  imports: [ServicesComponent, SidePanelComponent],
  templateUrl: './tub-to-shower.component.html',
  styleUrl: './tub-to-shower.component.scss',
})
export class TubToShowerComponent {}
