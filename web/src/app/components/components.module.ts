import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SwiperModule } from 'swiper/angular';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { GoogleMapComponent } from './google-map/google-map.component';
import { TechnetBannerComponent } from './technet-banner/technet-banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WhyUsComponent } from './why-us/why-us.component';

//

@NgModule({
  declarations: [
    NavbarPublicComponent,
    FooterComponent,
    TestimonialsComponent,
    CommonHeaderComponent,
    ContactFormComponent,
    GoogleMapComponent,
    TechnetBannerComponent,
    WelcomeComponent,
    WhyUsComponent
  ],
  imports: [
    GoogleMapsModule,
    CommonModule,
    IonicModule,
    SwiperModule

  ],
  exports: [
    NavbarPublicComponent,
    FooterComponent,
    TestimonialsComponent,
    CommonHeaderComponent,
    ContactFormComponent,
    GoogleMapComponent,
    TechnetBannerComponent,
    WelcomeComponent,
    WhyUsComponent
  ]
})
export class ComponentsModule { }