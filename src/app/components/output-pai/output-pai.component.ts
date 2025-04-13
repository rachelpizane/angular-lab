import { Component } from '@angular/core';
import { OutputFilhoComponent } from "../output-filho/output-filho.component";

@Component({
  selector: 'app-output-pai',
  imports: [OutputFilhoComponent],
  templateUrl: './output-pai.component.html',
  styleUrl: './output-pai.component.css'
})
export class OutputPaiComponent {
  contador:number = 0

  alterarContador(incrementaValor : boolean) {
    if(incrementaValor) {
      this.contador++
    } else {
      this.contador--
    }
  }
}
