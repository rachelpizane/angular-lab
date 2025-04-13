import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  exibir: boolean = false;
  cores: string[] = ['red', 'blue', 'green', 'yellow', 'purple'];
  corAtual: string = this.cores[0];
  intervalo!: any;

  handleMouseEnter(): void {
    this.exibir = true;
  }

  handleMouseLeave(): void {
    this.exibir = false;
  }

  trocarCorUnicaVez(): void {
    const ehUltimaCor = this.corAtual == this.cores[this.cores.length - 1]
    this.corAtual = ehUltimaCor ? this.cores[0] : this.cores[this.cores.indexOf(this.corAtual) + 1];
  }

  trocarCor(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
      this.intervalo = null
      return
    }

    this.intervalo = setInterval(() => {
      this.trocarCorUnicaVez()
    }, 300);
  }
}
