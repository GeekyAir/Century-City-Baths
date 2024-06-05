import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';

@Component({
  selector: 'app-bay-and-bow',
  standalone: true,
  imports: [SidePanelComponent, ServicesComponent],
  templateUrl: './bay-and-bow.component.html',
  styleUrl: './bay-and-bow.component.scss'
})
export class BayAndBowComponent {

}
