import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';


const route: Routes = [
  { path: '', redirectTo: 'album', pathMatch: 'full' },

  {
    path: 'album', component: SingleLayoutComponent, data: { title: '' },
    children: [
      {
        path: '',
        loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)
      },

    ]

  },
  // { path: 'album', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule) }

];



@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
