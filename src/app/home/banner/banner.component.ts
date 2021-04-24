import { Component, ElementRef, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  state = false;
  // @HostListener('window:scroll', ['$event'])
  // checkScroll() {
  //   const componentPosition = this.el.nativeElement.offsetTop -40;
  //   const scrollPosition = window.pageYOffset;
  //   console.warn(componentPosition,scrollPosition);

  //   if (scrollPosition >= componentPosition) {
  //     this.state = true
  //   } else {
  //     this.state = false
  //   }
  //   console.log(this.state);
  // }

  startIndex !: number;
  // Imagedata:any=[
  //   {
  //     url:'../../../assets/testo/manohar kumar.png',
  //   },
  //   {
  //     url:'../../../assets/testo/manohar kumar.png',
  //   },
  //   {
  //     url:'../../../assets/testo/manohar kumar.png',
  //   }
  // ]
  // customOptions: any = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
  // slidesStore=[
  //   {
  //     id:1,
  //     src:'../../../assets/testo/manohar kumar.png',
  //     title:'img1'
  //   }
  // ]
  // Repeat() {
  //   setTimeout(() => {
  //     this.__FunctionSlide();
  //     this.Repeat();
  //   }, 2000);
  // }

  // __FunctionSlide() {
  //   const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
  //   if (slides === []) {
  //     this.Repeat();
  //   }
  //   for (const x of slides) {
  //     const y = x as HTMLElement;
  //     y.style.display = 'none';
  //   }
  //   if (this.startIndex > slides.length - 1) {
  //     this.startIndex = 0;
  //     const slide = slides[this.startIndex] as HTMLElement;
  //     slide.style.display = 'block';
  //     this.startIndex++;
  //   } else {

  //     const slide = slides[this.startIndex] as HTMLElement;
  //     slide.style.display = 'block';
  //     this.startIndex++;
  //   }
  // }

  // imageObject = [{
  //   image: '../../../assets/testo/piyushmehra.png',
  //   thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
  //   title: 'Hummingbirds are amazing creatures'
  // },
  // {
  //   image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
  //   thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  // },
  // {
  //   image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //   thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
  //   title: 'Example with title.'
  // },
  // {
  //   image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
  //   thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
  //   title: 'Hummingbirds are amazing creatures'
  // },
  // {
  //   image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
  //   thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  // },
  // {
  //   image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
  //   thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
  //   title: 'Example two with title.'
  // }];

  constructor(public el: ElementRef) { }
  collection = [
    {
      id: 1,
      url: '../../../assets/discover.svg',
      title: 'Discover',
      description: 'We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.',
    },
    {
      id: 2,
      url: '../../../assets/design.svg',
      title: 'Design',
      description: 'Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.',
    },
    {
      id: 3,
      url: '../../../assets/build.svg',
      title: 'Build',
      description: 'Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.',
    },
    {
      id: 4,
      url: '../../../assets/deliver.svg',
      title: 'Deliver',
      description: 'We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.',
    }
  ];
  services = [
    {
      url: '../../../assets/web.svg',
      title: 'Website Development',
      description: 'We have expertise in developing CMS site with Angular, ReactJS and VueJS. Good experience of developing E-commerce Stores that we develop with Laravel and Magento.',
    },
    {
      url: '../../../assets/mobile.svg',
      title: 'Mobile App Development',
      description: 'We develop Android and iOS applications. We combine mobile apps along with our full package of the diamond product to have seamless access to the data. We also build e-commerce applications for online shopping system.',
    },
    {
      url: '../../../assets/uiux.svg',
      title: 'UI/UX Design',
      description: 'We have extra-ordinary team to make wireframes of product to get starting with full speed. We use latest technology to build and showcase design.',
    },
    {
      url: '../../../assets/CMS.svg',
      title: 'CMS & CRM',
      description: 'We build complete CMS/CRM product of custom requirements. We combine multiple systems along with our full package of the diamond product to have seamless access to the data.',
    },
    {
      url: '../../../assets/CRM.svg',
      title: 'ERP System',
      description: 'We build seamless ERP system for small and big businesses, it includes custom reports and highly customisable dashboard for one stop view of current business.',
    },
    {
      url: '../../../assets/graphic.svg',
      title: 'Graphics & Logo Designing',
      description: 'We have highly skilled and extremely creative designers to design unique and never-seen-before graphics and logos.',
    }
  ];


  ngOnInit(): void {
    // this.Repeat();
    Aos.init();
  }
  
  // corosel start

  customOptions: OwlOptions = {
    // stagePadding: -70,
    margin: 50,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoplay: true,
    pullDrag: false,
    dots: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      // 740: {
      //   items: 3
      // },
      // 1000: {
      //   items: 4
      // }
    },
    nav: false
  }
}
