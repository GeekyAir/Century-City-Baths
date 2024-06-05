import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';

@Component({
  selector: 'app-bathtub-replacement',
  standalone: true,
  templateUrl: './bathtub-replacement.component.html',
  styleUrl: './bathtub-replacement.component.scss',
  imports: [RouterLink, SidePanelComponent, ServicesComponent],
})
export class BathtubReplacementComponent {}
