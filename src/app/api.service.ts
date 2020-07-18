import { Injectable } from '@angular/core';
import {Api} from './api';

  import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs/internal/Observable';
import { strict } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*Initialize http with HttpClient*/
  constructor(private http:HttpClient ) { }
/*getApi() fetches the data from the URL by http get method*/
  getApi():Observable<Array<Api>>{
    /*Authenticating the url with access token key*/
    const options={
      headers: new HttpHeaders({'Authorization':'Bearer FYTe9u7kqq2_MTTjQyAG',
      'Content-Type':'application/json; charset=utf-8'})
    };
    return this.http.get<Array<Api>>('https://gitlab.stackroute.in/api/v4/projects',options);
  }
  addApi(favi):Observable<Api>{
    return this.http.post<Api>('http://localhost:3000/favourite',favi);
  }
  getFavourite():Observable<Array<Api>>{
    return this.http.get<Array<Api>>('http://localhost:3000/favourite');
  }
  deleteFavourite(id):Observable<any>{
    return this.http.delete<any>('http://localhost:3000/favourite/'+id)
  }
}
