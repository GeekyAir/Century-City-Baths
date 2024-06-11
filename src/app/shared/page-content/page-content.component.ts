import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
})
export class PageContentComponent {
  title!: string;
  pageId: any;
  firstDesign: boolean = true;
  secondDesign: boolean = false;
  default: boolean = false;

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
      case 'arlington-heights-il':
        this.title = 'Arlington Heights';
        break;

      case 'aurora-il':
        this.title = 'Aurora';
        break;

      case 'batavia-il':
        this.title = 'Batavia';

        break;

      case 'chicago-il':
        this.title = 'Chicago';

        break;

      case 'crystal-lake-il':
        this.title = 'Crystal Lake';

        break;

      // lessaaaaa👇

      case 'des-plaines-il':
        this.firstDesign = false;
        this.secondDesign = true;
        this.title = 'Des Plaines';
        break;
      case 'elgin-il':
        this.title = 'Elgin';
        break;

      case 'elk-grove-village-il':
        this.title = 'Elk Grove Village';

        break;

      case 'elmhurst-il':
        this.title = 'Elmhurst';
        break;

      case 'elmwood-park-il':
        this.title = ' Elmwood Park';
        break;

      // ------------------------------------------------------------

      // lesaaa 👇
      case 'evanston-il':
        this.firstDesign = false;
        this.secondDesign = true;
        this.title = 'Evanston';
        break;

      case 'geneva-il':
        this.title = 'Geneva';
        break;

      case 'glen-ellyn-il':
        this.title = 'Glen Ellyn';
        break;

      case 'glenview-il':
        this.title = 'Glenview';
        break;

      case 'joliet-il':
        this.title = 'Joliet';
        break;

      case 'libertyville-il':
        this.title = 'Libertyville';
        break;

      case 'lombard-il':
        this.title = 'Lombard';
        break;

      case 'monee-il':
        this.title = 'Monee';
        break;

      case 'northbrook-il':
        this.title = 'Northbrook';
        break;

      case 'orland-park-il':
        this.title = 'Orland Park';
        break;
      // -------------------------------------------------

      case 'palos-heights-il':
        this.title = 'Palos Heights';
        break;
      case 'palos-park-il':
        this.title = 'Palos Park';
        break;
      // lessaaa👇
      case 'plainfield-il':
        this.firstDesign = false;
        this.secondDesign = true;
        this.title = 'Plainfield';
        break;

      case 'schaumburg-il':
        this.title = 'Schaumburg';
        break;
      case 'south-elgin-il':
        this.title = 'South Elgin';
        break;
      case 'tinley-park-il':
        this.title = 'Tinley Park';
        break;
      case 'westmont-il':
        this.title = 'Westmont';
        break;
      case 'wood-dale-il':
        this.title = 'Wood Dale';
        break;

      default:
        this.firstDesign = false;
        this.secondDesign = false;
        this.default = true;
        this.title = '404 Not Found';
    }
  }
}
