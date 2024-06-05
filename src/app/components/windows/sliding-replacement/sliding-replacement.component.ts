import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sliding-replacement',
  standalone: true,
  templateUrl: './sliding-replacement.component.html',
  styleUrl: './sliding-replacement.component.scss',
  imports: [SidePanelComponent, ServicesComponent, RouterLink],
})
export class SlidingReplacementComponent {}
