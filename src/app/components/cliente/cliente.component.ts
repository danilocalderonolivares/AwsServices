import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/interfaces/Cliente';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.sass']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente;
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.getALLUsers();
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
        Swal.fire({
           position: 'top',
           type: 'success',
            title: 'El cliente se ha guardado exitosamente',
            showConfirmButton: false,
            timer: 1500
            });
        this.getALLUsers();
      },
      err => {
        console.log(err.status);
      }
    );
  }

  getALLUsers(){
    this.clienteService.obtenerClientes().subscribe(
      res => {
        this.clientes = res;
       console.log(res);
       console.log(this.clientes);
      },
      err => {
          console.log(err);
      }
    );
  }
}
