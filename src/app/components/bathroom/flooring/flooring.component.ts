import { Component } from '@angular/core';

import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flooring',
  standalone: true,
  templateUrl: './flooring.component.html',
  styleUrl: './flooring.component.scss',
  imports: [SidePanelComponent, ServicesComponent, RouterLink],
})
export class FlooringComponent {}
