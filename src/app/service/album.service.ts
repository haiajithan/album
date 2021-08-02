import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
//Api Url
  commonUrl:string ='https://jsonplaceholder.typicode.com/'

  constructor(public http: HttpClient) { }

  //Get Album 
  getAlbum(): Observable<any> {
    const url =  this.commonUrl+'albums?userId=2';
    return this.http.get(url);
  }
  //Get Photo
  getPhoto(id:any): Observable<any> {
    const url =  this.commonUrl+'photos?albumId='+id;
    return this.http.get(url);
  }
}
