import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.css']
})
export class HiringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  serviceData = [
    {
      id: 1,
      img: "../../assets/dot_net.svg",
      position: "Dot Net Developer",
    },
    {
      id: 2,
      img: "../../assets/angular.svg",
      position: "Angulr Developer",
    },
    {
      id: 3,
      img: "../../assets/vue-js.svg",
      position: "UI/UX Developer",
    },
    {
      id: 4,
      img: "../../assets/react-native.svg",
      position: "IOS Developer",
    },
    {
      id: 5,
      img: "../../assets/bootstrap.svg",
      position: "Andriod Developer",
    },
    
  ]
  tabData = [
    {
      id: 1,
      img: "dot-net.jpg",
      title: "Dot Net Developer",
    },
    {
      id: 2,
      img: "angular.jpg",
      title: "Angulr Developer",
    },
    {
      id: 3,
      img: "vue-js.jpg",
      title: "UI/UX Developer",
      
    },
    {
      id: 4,
      img: "react-native.jpg",
      title: "IOS Developer",
    },
    {
      id: 5,
      img: "bootstrap.jpg",
      title: "Andriod Developer",
    },
  ]
  tabId: number = 0;
  tabClick(e: number) {
    console.warn(e);
    this.tabId = e;
  }
  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    autoHeight: true,
    autoWidth: false,
    rtl: false,
    dots: false,
    margin: 30,
    navText: ['<', '>'],
    lazyLoad: false,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 4
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: true
  }
}
