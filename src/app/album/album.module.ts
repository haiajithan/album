import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumHeaderComponent } from './album-header/album-header.component';
import { AlbumCoverComponent } from './album-cover/album-cover.component';
import { AlbumGridComponent } from './album-grid/album-grid.component';
import { AlbumService } from '../service/album.service';
import { AlbumFooterComponent } from './album-footer/album-footer.component';
import { LoaderComponent } from '../layout/loader/loader.component';




@NgModule({
  declarations: [
    AlbumHeaderComponent,
    AlbumCoverComponent,
    AlbumGridComponent,
    AlbumFooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    TooltipModule,
    
  ],
 providers:[AlbumService]
})
export class AlbumModule { }
