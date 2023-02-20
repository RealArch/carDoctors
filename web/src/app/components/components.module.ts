import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarPublicComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,

  ],
  exports: [
    NavbarPublicComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }