import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // {
  //   path: '',
  //   redirectTo: 'public',
  //   pathMatch: 'full'
  // },
  {
    path: 'construction',
    loadChildren: () => import('./pages/construction/construction.module').then( m => m.ConstructionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module').then( m => m.PublicPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
