import { Injectable } from '@angular/core';
import { Produto } from '../../Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Produto 1', preco: 10.0, categoria: 'Categoria 1' },
    { id: 2, nome: 'Produto 2', preco: 20.0, categoria: 'Categoria 2' },
    { id: 3, nome: 'Produto 3', preco: 30.0, categoria: 'Categoria 3' }
  ];

  constructor() { }

  getAll(): Produto[] {
    return this.produtos;
  }

  removeByProduto(produtoRemovido : Produto): void {
    this.produtos = this.produtos.filter(produto => produto.id !== produtoRemovido.id);
  }
}
