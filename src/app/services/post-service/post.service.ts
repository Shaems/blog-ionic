import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api-service/api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  _URLroot = '/posts'
  _URLall = '/all'
  _URLadd = '/add'

  constructor(
    private api: ApiService,
  ) { }

  // Traer todos los posts
  getAllPost(): Observable<Posts>{
    return this.api.get<Posts>(this._URLroot+this._URLall)
  }

  crearPost(body: NuevoPost): Observable<CreatedPost>{
    return this.api.post<CreatedPost>(this._URLroot+this._URLadd, body)
  }

}

export interface Posts{
  posts: GetPost[];
}

export interface GetPost{
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
}

export interface CreatedPost{
  post: any;
  message: string;
}

export interface NuevoPost{
  titulo: string;
  descripcion: string;
}

