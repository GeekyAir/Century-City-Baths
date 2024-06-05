import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-double-hung',
  standalone: true,
  imports: [SidePanelComponent, ServicesComponent, RouterLink],
  templateUrl: './double-hung.component.html',
  styleUrl: './double-hung.component.scss',
})
export class DoubleHungComponent {}
