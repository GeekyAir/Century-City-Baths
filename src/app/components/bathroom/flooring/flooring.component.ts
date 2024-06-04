import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormComponent } from '../../../shared/form/form.component';

@Component({
  selector: 'app-flooring',
  standalone: true,
  templateUrl: './flooring.component.html',
  styleUrl: './flooring.component.scss',
  imports: [CardModule, FormComponent],
})
export class FlooringComponent {}
