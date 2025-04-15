import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private http: HttpClient = inject(HttpClient);
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor() { }

  getAll() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  getById(id: number) : Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  };

  removeById(id: number) : Observable<Usuario> {
    return this.http.delete<Usuario>(`${this.apiUrl}/${id}`);
  }
}
