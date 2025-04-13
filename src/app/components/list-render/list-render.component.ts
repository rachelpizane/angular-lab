import { Component } from '@angular/core';
import { Animal } from '../../animal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animais: Animal[] = [
    { tipo: 'Cachorro', nome: 'Rex', idade: 5 },
    { tipo: 'Gato', nome: 'Mimi', idade: 3 },
    { tipo: 'Pássaro', nome: 'Loro', idade: 2 },
    { tipo: 'Peixe', nome: 'Nemo', idade: 1 }
  ];
}
