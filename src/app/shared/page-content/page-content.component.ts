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
  content1!: string;
  content2!: string;
  content3!: string;
  header!: string;
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
      case 'arlington-heights-il':
        this.title =
          'Transform Your Arlington Heights, IL Bathroom with Century City Baths and Windows Expert Remodeling Services!';
        this.content1 =
          "At Century City Baths and Windows, we know that your Arlington Heights, IL area bathroom is more than just a practical space; it's a reflection of your unique taste and style. That's why we provide comprehensive bathroom remodeling services that are tailored to your specific needs and preferences. Our team of experts is dedicated to working with you throughout the process, from design to installation, to create a stunning bathroom that exceeds your expectations.";
        this.content2 =
          "Whether you're looking for custom showers, new tubs, vanities, or flooring, we offer a wide range of high-quality products and services to fit any budget. Our team uses only the best materials and employs the latest techniques to ensure that your bathroom renovation lasts for years to come. We are committed to providing exceptional attention to detail and customer satisfaction, and we serve the entire Arlington Heights, IL area.";
        this.content3 =
          "If you're ready to transform your bathroom into a beautiful and functional oasis, don't hesitate to contact Century City Baths and Windows today. We offer a free in-home consultation to discuss your project and provide a comprehensive estimate";

        break;

      case 'aurora-il':
        this.title =
          "Transform Your Aurora, IL Bathroom with Century City Baths and Windows' Expert Remodeling Services!";
        this.content1 =
          "At Century City Baths and Windows, we know that your Aurora, IL area bathroom is more than just a practical space; it's a reflection of your unique taste and style. That's why we provide comprehensive bathroom remodeling services that are tailored to your specific needs and preferences. Our team of experts is dedicated to working with you throughout the process, from design to installation, to create a stunning bathroom that exceeds your expectations.";
        this.content2 =
          "Whether you're looking for custom showers, new tubs, vanities, or flooring, we offer a wide range of high-quality products and services to fit any budget. Our team uses only the best materials and employs the latest techniques to ensure that your bathroom renovation lasts for years to come. We are committed to providing exceptional attention to detail and customer satisfaction, and we serve the entire Aurora, IL area.";
        this.content3 =
          "If you're ready to transform your bathroom into a beautiful and functional oasis, don't hesitate to contact Century City Baths and Windows today. We offer a free in-home consultation to discuss your project and provide a comprehensive estimate.";

        break;

      case 'batavia-il':
        this.title =
          "Transform Your Batavia, IL Bathroom with Century City Baths and Windows' Expert Remodeling Services!";
        this.content1 =
          "At Century City Baths and Windows, we know that your Batavia, IL area bathroom is more than just a practical space; it's a reflection of your unique taste and style. That's why we provide comprehensive bathroom remodeling services that are tailored to your specific needs and preferences. Our team of experts is dedicated to working with you throughout the process, from design to installation, to create a stunning bathroom that exceeds your expectations.";
        this.content2 =
          "Whether you're looking for custom showers, new tubs, vanities, or flooring, we offer a wide range of high-quality products and services to fit any budget. Our team uses only the best materials and employs the latest techniques to ensure that your bathroom renovation lasts for years to come. We are committed to providing exceptional attention to detail and customer satisfaction, and we serve the entire Batavia, IL are";
        this.content3 =
          "If you're ready to transform your bathroom into a beautiful and functional oasis, don't hesitate to contact Century City Baths and Windows today. We offer a free in-home consultation to discuss your project and provide a comprehensive estimate.";
        break;

      case 'chicago-il':
        this.title =
          "Transform Your Chicago, IL Bathroom with Century City Baths and Windows' Expert Remodeling Services!";
        this.content1 =
          "At Century City Baths and Windows, we know that your Chicago IL area bathroom is more than just a practical space; it's a reflection of your unique taste and style. That's why we provide comprehensive bathroom remodeling services that are tailored to your specific needs and preferences. Our team of experts is dedicated to working with you throughout the process, from design to installation, to create a stunning bathroom that exceeds your expectations.";
        this.content2 =
          "Whether you're looking for custom showers, new tubs, vanities, or flooring, we offer a wide range of high-quality products and services to fit any budget. Our team uses only the best materials and employs the latest techniques to ensure that your bathroom renovation lasts for years to come. We are committed to providing exceptional attention to detail and customer satisfaction, and we serve the entire Chicago, IL area.";
        this.content3 =
          "If you're ready to transform your bathroom into a beautiful and functional oasis, don't hesitate to contact Century City Baths and Windows today. We offer a free in-home consultation to discuss your project and provide a comprehensive estimate. ";
        break;

      case 'crystal-lake-il':
        this.title =
          "Transform Your Crystal Lake, IL Bathroom with Century City Baths and Windows' Expert Remodeling Services!";
        this.content1 =
          "At Century City Baths and Windows, we know that your Crystal Lake, IL area bathroom is more than just a practical space; it's a reflection of your unique taste and style. That's why we provide comprehensive bathroom remodeling services that are tailored to your specific needs and preferences. Our team of experts is dedicated to working with you throughout the process, from design to installation, to create a stunning bathroom that exceeds your expectations.";
        this.content2 =
          "Whether you're looking for custom showers, new tubs, vanities, or flooring, we offer a wide range of high-quality products and services to fit any budget. Our team uses only the best materials and employs the latest techniques to ensure that your bathroom renovation lasts for years to come. We are committed to providing exceptional attention to detail and customer satisfaction, and we serve the entire Crystal Lake, IL area.";
        this.content3 =
          "If you're ready to transform your bathroom into a beautiful and functional oasis, don't hesitate to contact Century City Baths and Windows today. We offer a free in-home consultation to discuss your project and provide a comprehensive estimate.";
        break;

      // lessaaaaa
      case 'des-plaines-il':
        this.title = 'Tub-to-Shower Conversions';
        this.content1 = '';
        this.content2 = '';
        break;
      // -----------------------
      case 'elgin-il':
        this.title =
          "Transform Your Elgin, IL Bathroom with Century City Baths and Windows' Expert Remodeling Services!";
        this.content1 =
          "At Century City Baths and Windows, we know that your Elgin, IL area bathroom is more than just a practical space; it's a reflection of your unique taste and style. That's why we provide comprehensive bathroom remodeling services that are tailored to your specific needs and preferences. Our team of experts is dedicated to working with you throughout the process, from design to installation, to create a stunning bathroom that exceeds your expectations.";
        this.content2 =
          "Whether you're looking for custom showers, new tubs, vanities, or flooring, we offer a wide range of high-quality products and services to fit any budget. Our team uses only the best materials and employs the latest techniques to ensure that your bathroom renovation lasts for years to come. We are committed to providing exceptional attention to detail and customer satisfaction, and we serve the entire Elgin, IL area.";
        this.content3 =
          "If you're ready to transform your bathroom into a beautiful and functional oasis, don't hesitate to contact Century City Baths and Windows today. We offer a free in-home consultation to discuss your project and provide a comprehensive estimate.";
        break;

      case 'elk-grove-village-il':
        this.title = 'Tub-to-Shower Conversions';
        this.content1 = '';
        this.content2 = '';
        break;

      case 'elmhurst-il':
        this.title = 'Tub-to-Shower Conversions';
        this.content1 = '';
        this.content2 = '';
        break;

      case 'elmwood-park-il':
        this.title = 'Tub-to-Shower Conversions';
        this.content1 = '';
        this.content2 = '';
        break;

      case 'elmwood-park-il':
        this.title = 'Tub-to-Shower Conversions';
        this.content1 = '';
        this.content2 = '';
        break;

      default:
        this.title = '404 Not Found';
        this.content1 = 'Page Not Found';
        this.content2 = 'The requested page could not be found.';
    }
  }
}
