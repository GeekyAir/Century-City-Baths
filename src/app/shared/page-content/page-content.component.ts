import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
})
export class PageContentComponent {
  title!: string;
  header!: string;
  content!: string;
  pageId: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.pageId = params.get('pageId');
      console.log(this.pageId);
      this.loadPageData(this.pageId);
    });
  }
  loadPageData(pageId: string) {
    switch (pageId) {
      case 'shower-replacements':
        this.title =
          'Transform Your Arlington Heights, IL Bathroom with Century City Baths and Windows Expert Remodeling Services!';
        this.header = 'Upgrade Your Shower Experience';
        this.content = 'Content about shower replacements...';
        break;
      case 'tub-to-shower-conversions':
        this.title = 'Tub-to-Shower Conversions';
        this.content = '';
        break;

      default:
        this.title = '404 Not Found';
        this.header = 'Page Not Found';
        this.content = 'The requested page could not be found.';
    }
  }
}
