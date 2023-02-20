import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { SwiperModule } from 'swiper/angular';
import { CommonHeaderComponent } from './common-header/common-header.component';

//

@NgModule({
  declarations: [
    NavbarPublicComponent,
    FooterComponent,
    TestimonialsComponent,
    CommonHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    SwiperModule

  ],
  exports: [
    NavbarPublicComponent,
    FooterComponent,
    TestimonialsComponent,
    CommonHeaderComponent
  ]
})
export class ComponentsModule { }