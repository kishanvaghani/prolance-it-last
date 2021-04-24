import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  serviceData = [
    {
      id: 1,
      img: "../../assets/dot_net.svg",
      title: "WebSite Development",
    },
    {
      id: 2,
      img: "../../assets/angular.svg",
      title: "Mobile App Development",
    },
    {
      id: 3,
      img: "../../assets/vue-js.svg",
      title: "UI/UX Design",
    },
    {
      id: 4,
      img: "../../assets/react-native.svg",
      title: "CMS & CRM",
    },
    {
      id: 5,
      img: "../../assets/bootstrap.svg",
      title: "ERP System",
    },
    {
      id: 6,
      img: "../../assets/node_js.svg",
      title: "Graphic & Logo Designing",
    },
    
  ]
  tabData = [
    {
      id: 1,
      img: "dot-net.jpg",
      title: "WebSite Development",
      paraGraph: {
        p1: ".NET is a software framework which is designed and developed by Microsoft. The first version of the .Net framework was 1.0 which came in the year 2002. In easy words, it is a virtual machine for compiling and executing programs written in different languages like C#, VB.Net etc. ",
        p2: "Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.",
        p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia: {
        pTitle: "Akshar Gems",
        pImg: "akshargems.png",
        pImg1: "redemix.png",
        pImg2: "ratnakalaexport.png",
        pTitle1: "Red Exim",
        pTitle2: "Ratnakala Exports",
      }
    },
    {
      id: 2,
      img: "angular.jpg",
      title: "Mobile App Development",
      paraGraph: {
        p1: "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps. AngularJS used to be the “golden child” among JavaScript frameworks, as it was initially introduced by Google corporation in 2012. It was built with the Model-View-Controller concept in mind, though authors of the framework often called it “Model-View-*” or even “Model-View-Whatever”.",
        p2: "The framework, written in pure JavaScript, was intended to decouple an application’s logic from DOM manipulation, and aimed at dynamic page updates. Still, it wasn’t very intrusive: you could have only a part of the page controlled by AngularJS. This framework introduced many powerful features allowing the developer to create rich, single-page applications quite easily.",
        // p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia: {
        pTitle: "Akshar Gems",
        pImg: "akshargems.png",
        pImg1: "redemix.png",
        pImg2: "ratnakalaexport.png",
        pTitle1: "Red Exim",
        pTitle2: "Ratnakala Exports",
      }
    },
    {
      id: 3,
      img: "vue-js.jpg",
      title: "UI/UX Design",
      paraGraph: {
        p1: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
        p2: "As Vue is basically built for frontend development, we are going to deal with lot of HTML, JavaScript and CSS files in the upcoming chapters. To understand the details, let us start with a simple example.",
        // p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia: {
        pTitle: "Demo Hair",
        pImg: "hair.png",
        // pImg1:"redemix.png",
        // pImg2:"ratnakalaexport.png",
        // pTitle1:"Red Exim",
        // pTitle2:"Ratnakala Exports",
      }
    },
    {
      id: 4,
      img: "react-native.jpg",
      title: "CMS & CRM",
      paraGraph: {
        p1: "React is a JavaScript library that forces you to think in terms of components. This model of thinking fits user interfaces well. Depending on your background it might feel alien at first. You will have to think very carefully about the concept of state and where it belongs.",
        p2: "Because state management is a difficult problem, a variety of solutions have appeared. In this book, we'll start by managing state ourselves and then push it to a Flux implementation known as Alt. There are also implementations available for several other alternatives, such as Redux, MobX, and Cerebral.",
        p3: "React is pragmatic in the sense that it contains a set of escape hatches. If the React model doesn't work for you, it is still possible to revert back to something lower level. For instance, there are hooks that can be used to wrap older logic that relies on the DOM. This breaks the abstraction and ties your code to a specific environment, but sometimes that's the pragmatic thing to do.",
      },
      portFolia: {
        pTitle: "Diamond Selling App",
        pImg: "portfolio-4.png",
        // pImg1:"redemix.png",
        // pImg2:"ratnakalaexport.png",
        // pTitle1:"Red Exim",
        // pTitle2:"Ratnakala Exports",
      }
    },
    {
      id: 5,
      img: "bootstrap.jpg",
      title: "ERP System",
      paraGraph: {
        p1: "Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites. It solves many problems which we had once, one of which is the cross-browser compatibility issue. Nowadays, the websites are perfect for all the browsers (IE, Firefox and Chrome) and for all sizes of screens (Desktop, Tablets, Phablets, and Phones).",
        p2: "All thanks to Bootstrap developers -Mark Otto and Jacob Thornton of Twitter, though it was later declared to be an open-source project.",
        // p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia: {
        pTitle: "Akshar Gems",
        pImg: "akshargems.png",
        pImg1: "redemix.png",
        pImg2: "hair.png",
        pTitle1: "Red Exim",
        pTitle2: "Demo Hair",
      }
    },
    {
      id: 6,
      img: "node-js.jpg",
      title: "Graphic & Logo Designing",
      paraGraph: {
        p1: "Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. The definition of Node.js as supplied by its official documentation is as follows −",
        p2: "Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.",
        p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia: {
        pTitle: "Akshar Gems",
        pImg: "akshargems.png",
        pImg1: "redemix.png",
        pImg2: "ratnakalaexport.png",
        pTitle1: "Red Exim",
        pTitle2: "Ratnakala Exports",
      }
    }
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
