import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shower-to-tub',
  standalone: true,
  imports: [SidePanelComponent, ServicesComponent, RouterLink],
  templateUrl: './shower-to-tub.component.html',
  styleUrl: './shower-to-tub.component.scss',
})
export class ShowerToTubComponent {}
