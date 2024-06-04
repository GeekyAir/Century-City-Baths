import { Component } from '@angular/core';
import { FormComponent } from '../../../shared/form/form.component';
import { CardModule } from 'primeng/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-walk-in-showers',
  standalone: true,
  templateUrl: './walk-in-showers.component.html',
  styleUrl: './walk-in-showers.component.scss',
  imports: [FormComponent, CardModule, RouterLink],
})
export class WalkInShowersComponent {}
