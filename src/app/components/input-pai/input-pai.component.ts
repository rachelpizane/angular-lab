import { Component } from '@angular/core';
import { InputFilhoComponent } from "../input-filho/input-filho.component";

@Component({
  selector: 'app-input-pai',
  imports: [InputFilhoComponent],
  templateUrl: './input-pai.component.html',
  styleUrl: './input-pai.component.css'
})
export class InputPaiComponent {
  infoPai: string = "Essa mensagem veio pelo componente pai"
}
