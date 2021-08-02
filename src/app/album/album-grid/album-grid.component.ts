import { Photos } from './../../Entity/photos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/service/album.service';
import { Sort } from 'src/app/Entity/common.enum';

@Component({
  selector: 'app-album-grid',
  templateUrl: './album-grid.component.html',
  styleUrls: ['./album-grid.component.css']
})
export class AlbumGridComponent implements OnInit {
  id: number = 0;
  albumName: string = '';
  photos: Photos[] = []
  loader: boolean = false;
  constructor(private albumService: AlbumService, public activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    })
    this.getAlbum();
    this.getAlbumName();
  }

  // Get Album
  getAlbum() {
    this.loader = true;
    this.albumService.getPhoto(this.id).subscribe(
      (res) => {
        this.photos = res;
        this.sortingData(Sort.ASC);
        this.loader = false;
      },
      (error) => {
        this.loader = false;
        console.error(error)
      },
    )
  }

  // Sorting the list of photos
  sortingData(event: string) {
    if (event === Sort.ASC) {
      this.photos.sort((a: any, b: any) => a.title.localeCompare(b.title));
    } else {
      this.photos.sort((a: any, b: any) => b.title.localeCompare(a.title));
    }
  }

  // Get Album Name
  getAlbumName() {
    this.albumService.getAlbum().subscribe(
      (res) => {
        this.albumName = res.find((album: any) => album.id === Number(this.id)).title;
      },
      (error) => {
        console.error(error)
      },
    )
  }







}
