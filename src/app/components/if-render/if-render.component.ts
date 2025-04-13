import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  imports: [CommonModule],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  podeMostrar: boolean = false;
  conteudoBotao: string = 'Mostrar';
  conteudo: string = 'Ta curioso hein....';

  conteudoBotao2: string = 'Trocar nome';
  name: string = "Luana"

  handleClick():void {
    this.podeMostrar = !this.podeMostrar;
    this.conteudoBotao = this.podeMostrar ? 'Esconder' : 'Mostrar';
  }

  trocarNome():void {
    this.name = this.name === 'Luana' ? 'Rachel' : 'Luana';
    this.conteudoBotao2 = this.name === 'Luana' ? 'Trocar nome' : 'Trocar nome de volta';
  }
}
