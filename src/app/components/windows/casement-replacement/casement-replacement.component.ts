import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';

@Component({
  selector: 'app-casement-replacement',
  standalone: true,
  imports: [SidePanelComponent, ServicesComponent],
  templateUrl: './casement-replacement.component.html',
  styleUrl: './casement-replacement.component.scss'
})
export class CasementReplacementComponent {

}
