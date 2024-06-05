import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
  imports: [FormComponent],
})
export class SidePanelComponent {}
