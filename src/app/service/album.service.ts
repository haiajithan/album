import { Photos } from './../Entity/photos';
import { Album } from './../Entity/album';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app-settings';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  // Api Url
  commonUrl:string =AppSettings.Web_api;

  constructor(public http: HttpClient) { }

  //Get Album 
  getAlbum(): Observable<Album[]> {
    const url =  this.commonUrl+'albums?userId='+AppSettings.User_id;
    return this.http.get<Album[]>(url);
  }
  //Get Photo
  getPhoto(id:number): Observable<Photos[]> {
    const url =  this.commonUrl+'photos?albumId='+id;
    return this.http.get<Photos[]>(url);
  }
}
