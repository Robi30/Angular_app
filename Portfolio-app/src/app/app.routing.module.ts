import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LogoChildComponent } from './logo/logo/logo-child/logo-child.component';
import { Tile1ChildComponent } from './nav-tiles/tile1/tile1-child/tile1-child.component';
import { Tile2ChildComponent } from './nav-tiles/tile2/tile2-child/tile2-child.component';
import { Tile3ChildComponent } from './nav-tiles/tile3/tile3-child/tile3-child.component';
import { Tile4ChildComponent } from './nav-tiles/tile4/tile4-child/tile4-child.component';


// Przechowuje //
const app_Routes: Routes = [
   {
      path: '',
      redirectTo: '/RobertPilszczek',
      pathMatch: 'full'
   },
   {
    path: 'RobertPilszczek',
    component: LogoChildComponent
   },
   {
    path: 'Kimjestem',
    component: Tile1ChildComponent
   },
   {
     path: 'Oferta',
     component: Tile2ChildComponent
   },
   {
     path: 'Cv',
     component: Tile3ChildComponent
   },
   {
     path: 'Kontakt',
     component: Tile4ChildComponent
   },
     // Gdy podany adres nie istnieje //
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(app_Routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
