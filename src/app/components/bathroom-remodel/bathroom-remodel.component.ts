import { Component } from '@angular/core';
import { ServicesComponent } from '../../shared/services/services.component';
import { SidePanelComponent } from '../../shared/side-panel/side-panel.component';
import { PageContentComponent } from '../../shared/page-content/page-content.component';

@Component({
  selector: 'app-bathroom-remodel',
  standalone: true,
  templateUrl: './bathroom-remodel.component.html',
  styleUrl: './bathroom-remodel.component.scss',
  imports: [ServicesComponent, SidePanelComponent, PageContentComponent],
})
export class BathroomRemodelComponent {}
