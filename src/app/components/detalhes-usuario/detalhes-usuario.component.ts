import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { Usuario } from '../../usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-usuario',
  imports: [CommonModule],
  templateUrl: './detalhes-usuario.component.html',
  styleUrl: './detalhes-usuario.component.css'
})
export class DetalhesUsuarioComponent implements OnInit {
  private usuarioService = inject(UsuarioService);
  private route = inject(ActivatedRoute);
  loading: boolean = false;
  usuario!: Usuario;

  ngOnInit(): void {
    this.retornarDetalhesUsuario()
  };

  retornarDetalhesUsuario(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;

    this.usuarioService.getById(id).subscribe((usuario: Usuario) => {
      this.usuario = usuario;
      this.loading = false;
    });
  };
}
