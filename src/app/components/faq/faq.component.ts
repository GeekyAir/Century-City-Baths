import { Component, ViewEncapsulation } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule, ButtonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FaqComponent {
  activeIndex: number = 0; // Ensure activeIndex is of type number

  activeIndexChange(index: number) {
    this.activeIndex = index; // Ensure the parameter is a number
  }
}
