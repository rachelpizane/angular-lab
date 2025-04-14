import { Component, inject, OnInit } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-http',
  imports: [CommonModule, RouterModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent implements OnInit {
  private usuarioService = inject(UsuarioService);
  loading: boolean = false;
  usuarios: Usuario[] = [];

  ngOnInit(): void {
    this.retornarTodosUsuarios()
  }

  retornarTodosUsuarios(): void {
    this.loading = true;
    this.usuarioService.getAll().subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      this.loading = false;
    });
  }
}
