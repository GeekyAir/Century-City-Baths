import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormComponent } from '../../../shared/form/form.component';

@Component({
  selector: 'app-bathtub-replacement',
  standalone: true,
  templateUrl: './bathtub-replacement.component.html',
  styleUrl: './bathtub-replacement.component.scss',
  imports: [CardModule, FormComponent],
})
export class BathtubReplacementComponent {}
