import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-filho',
  imports: [],
  templateUrl: './output-filho.component.html',
  styleUrl: './output-filho.component.css'
})
export class OutputFilhoComponent {
  @Output() mudarNumero = new EventEmitter<boolean>();

  handleClick(incrementaValor: boolean) {
    this.mudarNumero.emit(incrementaValor);
  }
}
