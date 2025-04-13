import { Component } from '@angular/core';
import { DadosComponent } from "../dados/dados.component";
import { InputPaiComponent } from "../input-pai/input-pai.component";
import { DiretivasComponent } from "../diretivas/diretivas.component";
import { IfRenderComponent } from "../if-render/if-render.component";
import { EventosComponent } from "../eventos/eventos.component";
import { OutputPaiComponent } from "../output-pai/output-pai.component";
import { ListRenderComponent } from "../list-render/list-render.component";
import { PipeComponent } from "../pipe/pipe.component";
import { TwoWayBindingComponent } from "../two-way-binding/two-way-binding.component";

@Component({
  selector: 'app-primeiro-componente',
  imports: [DadosComponent, InputPaiComponent, DiretivasComponent, IfRenderComponent, EventosComponent, OutputPaiComponent, ListRenderComponent, PipeComponent, TwoWayBindingComponent],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent {

}
