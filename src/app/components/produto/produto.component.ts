import { Component, inject, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto/produto.service';
import { Produto } from '../../Produto';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {
  private produtoService: ProdutoService = inject(ProdutoService);
  produtos: Produto[] = [];

  ngOnInit(): void {
    this.getTodosProdutos();
  }

  getTodosProdutos(): void{
    this.produtos = this.produtoService.getAll();
  }

  removerProduto(produto: Produto): void {
    this.produtoService.removeByProduto(produto);
    this.getTodosProdutos();
    console.log('Produto removido:', produto.nome);
  }
}
