import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-filho',
  imports: [],
  templateUrl: './input-filho.component.html',
  styleUrl: './input-filho.component.css'
})
export class InputFilhoComponent {
  @Input() infoFilho!: string;
}
