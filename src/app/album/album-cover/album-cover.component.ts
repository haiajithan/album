import { Sort } from './../../Entity/common.enum';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/Entity/album';
import { AlbumService } from 'src/app/service/album.service';


@Component({
  selector: 'app-album-cover',
  templateUrl: './album-cover.component.html',
  styleUrls: ['./album-cover.component.css']
})
export class AlbumCoverComponent implements OnInit {

  albums: Album[]=[];
  loader:boolean=false;
  
  constructor(private albumService: AlbumService, private router: Router,) { }
  
  ngOnInit(): void {
    this.getAlbum();
  }

  // Get Album
  getAlbum() {
    this.loader=true;
    this.albumService.getAlbum().subscribe(
      (res) => {
        this.albums = res;
        this.sortingData(Sort.ASC);
        this.loader =false;
      },
      (error) => {
        this.loader =false;
        console.error(error)
      },
    )
  }

 // Redirect to Next Page
  onClickImage(item: any) {
    this.router.navigateByUrl('/album/grid/' + item.id);
  }

  // Sorting the list of Album
  sortingData(event: any) {
    if (event === Sort.ASC) {
      this.albums.sort((a: any, b: any) => a.title.localeCompare(b.title));
    } else {
      this.albums.sort((a: any, b: any) => b.title.localeCompare(a.title));
    }
  }

}
