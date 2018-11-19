import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ClipArtApiService {
  url: string = 'https://openclipart.org/search/json/?query='
  data: IOpenClipArt;
  constructor(private _http: HttpClient) { }
 
  // http call to open clip art api to get images based on a search query
  getImages(imageStr: string)  : Observable<IOpenClipArt>  {
    return this._http.get<IOpenClipArt>(this.url+imageStr)
  } 
}
