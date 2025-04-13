import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  imports: [CommonModule],
  templateUrl: './diretivas.component.html',
  styleUrl: './diretivas.component.css'
})
export class DiretivasComponent {
  tamanhoFonte: number = 12;
  estilo: any = {
    'font-size': this.tamanhoFonte + 'px',
    'text-transform': 'uppercase',
    'color': 'red',
    'background-color': 'yellow'
  };

  classe: string = 'class1';
  classes: string[] = ['class2', 'class3'];
}
