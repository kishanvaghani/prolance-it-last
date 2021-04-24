import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './company/about-us/about-us.component';
import { HiringComponent } from './company/hiring/hiring.component';
import { OurProductComponent } from './company/our-product/our-product.component';
import { ContactComponent } from './contact/contact.component';
import { BannerComponent } from './home/banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TestonomialComponent } from './testonomial/testonomial.component';

const routes: Routes = [
  {
    path:'contact-us',  
    component:ContactComponent,
    
  },
  {
    path:'our-product',  
    component:OurProductComponent,
    
  },
  {
    path:'hiring',  
    component:HiringComponent,
    
  },
  {
    path:'about-us',  
    component:AboutUsComponent,
    
  },
  {
    path:'services',  
    component:ServicesComponent,
    
  },
  {
    path:'testimonials',  
    component:TestonomialComponent,
    
  },
  {
    path:'technologies',  
    component:TechnologiesComponent,
    
  },
  {
    path:'',  
    component:BannerComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
