import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/Cliente';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
  }
  onSubmit(nombre: HTMLInputElement , cedula: HTMLInputElement, celular: HTMLInputElement, newClientkForm: NgForm) {
    this.cliente = {
      cedula: parseInt(cedula.value, 10),
      nombreCompleto: nombre.value,
      celular: parseInt(celular.value, 10),
    };
    this.clienteService.crearCliente(this.cliente).subscribe(
      res => {
        console.log(res);
        nombre.value = '';
        cedula.value = '';
        celular.value = '';
      },
      err => {
        console.log(err.status);
      }
    );
  }
}
