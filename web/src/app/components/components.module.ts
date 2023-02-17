import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavbarPublicComponent } from './navbar-public/navbar-public.component';

@NgModule({
    declarations: [
      NavbarPublicComponent

    ],
    imports: [
      CommonModule,
      IonicModule,
 
    ],
    exports: [
        NavbarPublicComponent

    ]
  })
  export class ComponentsModule { }