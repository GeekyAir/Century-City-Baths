import { Component } from '@angular/core';
import { FormComponent } from '../../shared/form/form.component';
import { CardModule } from 'primeng/card';
import { ServicesComponent } from '../../shared/services/services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormComponent, CardModule, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
