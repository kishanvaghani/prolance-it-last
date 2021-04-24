import { AfterViewInit, Component, Directive, DoCheck, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  
  right?: string;
  active?: boolean;
  submit: boolean = true;
  public btnNav: boolean = false;
  startIndex !: number;
  isLoading?:boolean;

  // @HostListener('click') onClick() {
  //   if( this.active==true){
  //   this.closeNav();
  //   console.warn(55);

  //   }else{
  //     console.log(444)
  //   }
  //  }
  ngOnInit(){
    this.isLoading=true;
  }
  collection = [
    {
      url: '../../../assets/discover.svg',
      title: 'Discover',
      description: 'We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.',
    },
    {
      url: '../../../assets/design.svg',
      title: 'Design',
      description: 'Our design approach is to simplify. We embrace the joy in creating something unique that is easy for end users.',
    },
    {
      url: '../../../assets/build.svg',
      title: 'Build',
      description: 'Using modern technologies, we build with efficiency and skill, creating flexible and scalable business-driven solutions.',
    },
    {
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
  constructor(private route: Router){
    route.events.subscribe(val => {
      this.closeNav()
    });
  }

  openNav() {
    this.right = '0';
    this.active = true;
  }
  closeNav() {
    this.right = '-100%';
    this.active = false;
  }

  ngAfterViewInit() {
    this.isLoading=true;
    console.warn(1);
  }
}
