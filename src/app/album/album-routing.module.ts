import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumCoverComponent } from './album-cover/album-cover.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';


const routes: Routes = [{ path: '', component: AlbumCoverComponent },
{ path: 'grid', component: AlbumGridComponent },
{ path: 'grid/:id', component: AlbumGridComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
