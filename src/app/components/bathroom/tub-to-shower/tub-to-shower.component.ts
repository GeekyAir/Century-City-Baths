import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormComponent } from '../../../shared/form/form.component';
@Component({
  selector: 'app-tub-to-shower',
  standalone: true,
  imports: [CardModule, FormComponent],
  templateUrl: './tub-to-shower.component.html',
  styleUrl: './tub-to-shower.component.scss'
})
export class TubToShowerComponent {

}
