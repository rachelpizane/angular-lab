import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  imports: [],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent {
  titulo: string = "Exibindo dados no template";
  dadosPessoais: any = {
    nome: "João da Silva",
    idade: 25,
    cidade: "São Paulo",
    profissao: "Desenvolvedor"
  }
}
