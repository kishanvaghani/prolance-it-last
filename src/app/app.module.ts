import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './company/about-us/about-us.component';
import { HiringComponent } from './company/hiring/hiring.component';
import { OurProductComponent } from './company/our-product/our-product.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './home/banner/banner.component';
import { FooterComponent } from './home/footer/footer.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ServicesComponent } from './services/services.component';
import { ItserviceComponent } from './share/itservice/itservice.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TestonomialComponent } from './testonomial/testonomial.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerComponent,
    FooterComponent,
    ContactComponent,
    TestonomialComponent,
    TechnologiesComponent,
    ServicesComponent,
    AboutUsComponent,
    OurProductComponent,
    HiringComponent,
    ItserviceComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    CarouselModule,
    CommonModule,
    BrowserAnimationsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
