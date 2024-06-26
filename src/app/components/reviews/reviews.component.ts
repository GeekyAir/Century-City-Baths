import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RouterLink],
  host: { ngSkipHydration: 'true' },

  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  addReview() { }
}
