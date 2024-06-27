import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryService } from '../../core/services/gallery.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [RouterLink],

  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent implements OnInit, AfterViewInit {
  constructor(private scriptLoader: GalleryService) { }

  ngOnInit(): void {

  }


  ngAfterViewInit(): void {
    this.loadGoogleReviewsScript();
  }

  loadGoogleReviewsScript() {
    this.scriptLoader.loadScript('https://www.thumbtack.com/profile/widgets/scripts/?service_pk=402701430322864134&widget_id=review&type=star', 'google-reviews-script')
      .then(() => {
        console.log('Google Reviews script loaded successfully.');
        this.initializeGoogleReviews();
      })
      .catch(error => {
        console.error('Error loading Google Reviews script:', error);
      });
  }

  initializeGoogleReviews() {
    // Logic to initialize and display Google Reviews
    // Ensure elements are ready before manipulating the DOM
    const reviewWidget = document.getElementById('tt-review-widget-star');
    if (reviewWidget) {
      // Additional initialization if required
      reviewWidget.style.display = 'block';
    } else {
      console.error('Review widget not found.');
    }
  }
}
