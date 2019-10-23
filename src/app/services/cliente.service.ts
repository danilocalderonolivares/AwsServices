import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Config } from 'protractor';
import {Cliente} from '../interfaces/Cliente';
@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  constructor(private http: HttpClient) { }
  apiUriCliente = 'https://1va0c8scvj.execute-api.us-east-2.amazonaws.com/devDanilo/cliente';

  crearCliente(cliente: Cliente): Observable<HttpResponse<Config>> {
    return this.http.post<any>(`${this.apiUriCliente}`, cliente);
  }
  obtenerClientes( ){
    return this.http.get<Cliente[]>(`${this.apiUriCliente}`);
  }
}
