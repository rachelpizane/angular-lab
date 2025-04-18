import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";
import { UpperCasePipe } from '@angular/common';
import { DadosComponent } from "./components/dados/dados.component";
import { InputPaiComponent } from "./components/input-pai/input-pai.component";
import { DiretivasComponent } from "./components/diretivas/diretivas.component";
import { IfRenderComponent } from "./components/if-render/if-render.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { OutputPaiComponent } from "./components/output-pai/output-pai.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipeComponent } from "./components/pipe/pipe.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Laboratório de Angular';
}
