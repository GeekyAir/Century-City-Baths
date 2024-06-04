import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormComponent } from '../../../shared/form/form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bathtub-replacement',
  standalone: true,
  templateUrl: './bathtub-replacement.component.html',
  styleUrl: './bathtub-replacement.component.scss',
  imports: [CardModule, FormComponent, RouterLink],
})
export class BathtubReplacementComponent {}
