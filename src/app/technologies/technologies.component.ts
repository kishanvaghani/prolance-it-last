import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  serviceData=[
    {
      id: 1,
      img: "../../assets/dot_net.svg",
      title: ".NET",
    },
    {
      id: 2,
      img: "../../assets/angular.svg",
      title: "Angular",
    },
    {
      id: 3,
      img: "../../assets/vue-js.svg",
      title: "Vue-Js",
    },
    {
      id: 4,
      img: "../../assets/react-native.svg",
      title: "React-Native",
    },
    {
      id: 5,
      img: "../../assets/bootstrap.svg",
      title: "Bootstrap",
    },
    {
      id: 6,
      img: "../../assets/node_js.svg",
      title: "Node-Js",
    },
    {
      id: 7,
      img: "../../assets/python.svg",
      title: "Python",
    },
    {
      id: 8,
      img: "../../assets/laravel.svg",
      title: "Laravel",
    },
  ] 
    tabData = [
    {
      id: 1,
      img: "dot-net.jpg",
      title: "Dot-NET",
      paraGraph:{
      p1: ".NET is a software framework which is designed and developed by Microsoft. The first version of the .Net framework was 1.0 which came in the year 2002. In easy words, it is a virtual machine for compiling and executing programs written in different languages like C#, VB.Net etc. ",
      p2: "Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.",
      p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia:{
        pTitle:"Akshar Gems",
        pImg:"akshargems.png",
        pImg1:"redemix.png",
        pImg2:"ratnakalaexport.png",
        pTitle1:"Red Exim",
        pTitle2:"Ratnakala Exports",
      }
    },
    {
      id: 2,
      img: "angular.jpg",
      title: "Angular",
      paraGraph:{
      p1: "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps. AngularJS used to be the “golden child” among JavaScript frameworks, as it was initially introduced by Google corporation in 2012. It was built with the Model-View-Controller concept in mind, though authors of the framework often called it “Model-View-*” or even “Model-View-Whatever”.",
      p2: "The framework, written in pure JavaScript, was intended to decouple an application’s logic from DOM manipulation, and aimed at dynamic page updates. Still, it wasn’t very intrusive: you could have only a part of the page controlled by AngularJS. This framework introduced many powerful features allowing the developer to create rich, single-page applications quite easily.",
      // p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia:{
        pTitle:"Akshar Gems",
        pImg:"akshargems.png",
        pImg1:"redemix.png",
        pImg2:"ratnakalaexport.png",
        pTitle1:"Red Exim",
        pTitle2:"Ratnakala Exports",
      }
    },
    {
      id: 3,
      img: "vue-js.jpg",
      title: "Vue JS",
      paraGraph:{
      p1: "Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.",
      p2: "As Vue is basically built for frontend development, we are going to deal with lot of HTML, JavaScript and CSS files in the upcoming chapters. To understand the details, let us start with a simple example.",
      // p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia:{
        pTitle:"Demo Hair",
        pImg:"hair.png",
        // pImg1:"redemix.png",
        // pImg2:"ratnakalaexport.png",
        // pTitle1:"Red Exim",
        // pTitle2:"Ratnakala Exports",
      }
    },
    {
      id: 4,
      img: "react-native.jpg",
      title: "React-Native",
      paraGraph:{
      p1: "React is a JavaScript library that forces you to think in terms of components. This model of thinking fits user interfaces well. Depending on your background it might feel alien at first. You will have to think very carefully about the concept of state and where it belongs.",
      p2: "Because state management is a difficult problem, a variety of solutions have appeared. In this book, we'll start by managing state ourselves and then push it to a Flux implementation known as Alt. There are also implementations available for several other alternatives, such as Redux, MobX, and Cerebral.",
      p3: "React is pragmatic in the sense that it contains a set of escape hatches. If the React model doesn't work for you, it is still possible to revert back to something lower level. For instance, there are hooks that can be used to wrap older logic that relies on the DOM. This breaks the abstraction and ties your code to a specific environment, but sometimes that's the pragmatic thing to do.",
      },
      portFolia:{
        pTitle:"Diamond Selling App",
        pImg:"portfolio-4.png",
        // pImg1:"redemix.png",
        // pImg2:"ratnakalaexport.png",
        // pTitle1:"Red Exim",
        // pTitle2:"Ratnakala Exports",
      }
    },
    {
      id: 5,
      img: "bootstrap.jpg",
      title: "Bootstrap",
      paraGraph:{
      p1: "Bootstrap is a free and open-source tool collection for creating responsive websites and web applications. It is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first web sites. It solves many problems which we had once, one of which is the cross-browser compatibility issue. Nowadays, the websites are perfect for all the browsers (IE, Firefox and Chrome) and for all sizes of screens (Desktop, Tablets, Phablets, and Phones).",
      p2: "All thanks to Bootstrap developers -Mark Otto and Jacob Thornton of Twitter, though it was later declared to be an open-source project.",
      // p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia:{
        pTitle:"Akshar Gems",
        pImg:"akshargems.png",
        pImg1:"redemix.png",
        pImg2:"hair.png",
        pTitle1:"Red Exim",
        pTitle2:"Demo Hair",
      }
    },
    {
      id: 6,
      img: "node-js.jpg",
      title: "Node JS",
      paraGraph:{
      p1: "Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js was developed by Ryan Dahl in 2009 and its latest version is v0.10.36. The definition of Node.js as supplied by its official documentation is as follows −",
      p2: "Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.",
      p3: "Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.",
      },
      portFolia:{
        pTitle:"Akshar Gems",
        pImg:"akshargems.png",
        pImg1:"redemix.png",
        pImg2:"ratnakalaexport.png",
        pTitle1:"Red Exim",
        pTitle2:"Ratnakala Exports",
      }
    },
    {
      id: 7,
      img: "python.jpg",
      title: "Python",
      paraGraph:{
      p1: "Python is a dynamic, interpreted (byte-code-compiled) language. There are no type declarations of variables, parameters, functions, or methods in source code. This makes the code short and flexible, and you lose the compile-time type checking of the source code. Python tracks the types of all values at runtime and flags code that does not make sense as it runs.",
      p2: "Python is a widely used general-purpose, high level programming language. It was created by Guido van Rossum in 1991 and further developed by the Python Software Foundation. It was designed with an emphasis on code readability, and its syntax allows programmers to express their concepts in fewer lines of code.",
      p3: "Python is a programming language that lets you work quickly and integrate systems more efficiently.",
      }
    },
    {
      id: 8,
      img: "laravel.jpg",
      title: "Laravel",
      paraGraph:{
      p1: "Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as authentication, routing, sessions, and caching.",
      p2: "Laravel aims to make the development process a pleasing one for the developer without sacrificing application functionality. Happy developers make the best code. To this end, we've attempted to combine the very best of what we have seen in other web frameworks, including frameworks implemented in other languages, such as Ruby on Rails, ASP.NET MVC, and Sinatra.",
      p3: "Laravel is accessible, yet powerful, providing powerful tools needed for large, robust applications. A superb inversion of control container, expressive migration system, and tightly integrated unit testing support give you the tools you need to build any application with which you are tasked.",
      },
      portFolia:{
        pTitle:"Demo hair",
        pImg:"hair.png",
        // pImg1:"redemix.png",
        // pImg2:"ratnakalaexport.png",
        // pTitle1:"Red Exim",
        // pTitle2:"Ratnakala Exports",
      }
    }
  ]
  tabId: number=0;
  tabClick(e:number){
    console.warn(e);
    this.tabId=e;
  }
    constructor() { }
  
    ngOnInit(): void {
    }
  customOptions: OwlOptions = {
      loop: false,
      autoplay: false,
      autoHeight: true,
      autoWidth: false,
      rtl: false,
      dots:false,
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
