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
 
  getImages(imageStr: string)  : Observable<IOpenClipArt>  {
    return this._http.get<IOpenClipArt>(this.url+imageStr)
  } 
}
