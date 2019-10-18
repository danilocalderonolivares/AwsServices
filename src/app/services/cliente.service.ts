import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
type EntityResponseType = HttpResponse<Cliente>;


import {Cliente} from '../interfaces/Cliente';
@Injectable({
    providedIn: 'root'
  })
  export class ClienteService {
    URI = 'https://1va0c8scvj.execute-api.us-east-2.amazonaws.com/devDanilo/cliente';

    constructor(private http: HttpClient) { }
    crear(cliente: Cliente): Observable<EntityResponseType>  {
        return this.http.post<Cliente>(this.URI,cliente,{observe: 'response'});
    }
  }