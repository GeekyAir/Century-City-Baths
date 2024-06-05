import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';

@Component({
  selector: 'app-walk-in-showers',
  standalone: true,
  templateUrl: './walk-in-showers.component.html',
  styleUrl: './walk-in-showers.component.scss',
  imports: [RouterLink, SidePanelComponent, ServicesComponent],
})
export class WalkInShowersComponent {}
