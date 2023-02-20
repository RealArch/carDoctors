import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicPage } from './public.page';

const routes: Routes = [
  {
    path: '',
    component: PublicPage,
    children:[
      {
        path: '',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'quotation',
        loadChildren: () => import('./quotation/quotation.module').then( m => m.QuotationPageModule)
      },
      {
        path: 'contact-us',
        loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
      },
    ]
  },




 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicPageRoutingModule {}
