import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor( private _http: HttpClient, private _state:StateService) { }

  login(data : any){
    return this._http.post( environment.url +  '/login', data);
  }

  getTodos(){
    const headers = new HttpHeaders({'x-access-token':this._state.token});
    return this._http.get( environment.url +  '/todos', {headers});
  }
}
