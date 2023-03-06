import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private headers = {
    "Content-Type":"application/json",
  }

  constructor(private http:HttpClient,) { }

  get(url:string):Observable<any>{
    return this.http.get(url,{headers : this.headers})
  }

  post(url:string):Observable<any>{
    return this.http.post(url,{headers : this.headers})
  }

}
