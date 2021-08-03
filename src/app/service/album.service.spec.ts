import { Photos } from './../Entity/photos';
import { Album } from 'src/app/Entity/album';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { AlbumService } from './album.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpConfigInterceptor } from 'src/app/interceptor/httpconfig.interceptor';
import { of } from 'rxjs';

describe('AlbumService', () => {


  let httpClientSpy: { get: jasmine.Spy };
  let albumService: AlbumService;
  
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    albumService = new AlbumService(httpClientSpy as any);
  });
  
  it('Album api should return expected value', (done: DoneFn) => {
    const album: Album[] =
      [ {
        id: 11,
        title: "quam nostrum impedit mollitia quod et dolor",
        userId: 2
      },  {
        id: 12,
        title: "quam nostrum impedit mollitia quod et dolor",
        userId: 3
      }];
  
    httpClientSpy.get.and.returnValue(of(album));
   
    albumService.getAlbum().subscribe(
      res => {
        expect(res[0].title).toEqual("quam nostrum impedit mollitia quod et dolor");
        done();
      },
      done.fail
    );
  });

  it('Photos api should return expected value', (done: DoneFn) => {
    const albumId=1;
    const photos: Photos[] =
      [ {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
      }];
  
    httpClientSpy.get.and.returnValue(of(photos));
   
    albumService.getPhoto(albumId).subscribe(
      res => {
        expect(res[0].title).toEqual("accusamus beatae ad facilis cum similique qui sunt");
        done();
      },
      done.fail
    );
  });







});


