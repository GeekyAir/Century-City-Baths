import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormComponent } from '../../../shared/form/form.component';

@Component({
  selector: 'app-shower-to-tub',
  standalone: true,
  imports: [CardModule, FormComponent],
  templateUrl: './shower-to-tub.component.html',
  styleUrl: './shower-to-tub.component.scss'
})
export class ShowerToTubComponent {

}
