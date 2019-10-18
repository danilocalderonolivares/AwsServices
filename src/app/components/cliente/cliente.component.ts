import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente;

  constructor() { }

  ngOnInit() {
  }
  Save(cedula:HTMLInputElement,nombre:HTMLInputElement,celular:HTMLInputElement){
   console.log(cedula.value);
   console.log(nombre.value);
   console.log(celular.value);
  }
}
