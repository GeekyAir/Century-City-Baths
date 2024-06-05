import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-casement-replacement',
  standalone: true,
  imports: [SidePanelComponent, ServicesComponent, RouterLink],
  templateUrl: './casement-replacement.component.html',
  styleUrl: './casement-replacement.component.scss',
})
export class CasementReplacementComponent {}
