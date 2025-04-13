import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";
import { UpperCasePipe } from '@angular/common';
import { DadosComponent } from "./components/dados/dados.component";
import { InputPaiComponent } from "./components/input-pai/input-pai.component";

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, PrimeiroComponenteComponent, DadosComponent, InputPaiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Laboratório de Angular';
}
