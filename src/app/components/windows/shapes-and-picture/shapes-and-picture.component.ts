import { Component } from '@angular/core';
import { SidePanelComponent } from '../../../shared/side-panel/side-panel.component';
import { ServicesComponent } from '../../../shared/services/services.component';

@Component({
  selector: 'app-shapes-and-picture',
  standalone: true,
  templateUrl: './shapes-and-picture.component.html',
  styleUrl: './shapes-and-picture.component.scss',
  imports: [SidePanelComponent, ServicesComponent],
})
export class ShapesAndPictureComponent {}
