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

  getPost(){}

  crearPost(){
    //this.api.post(this._URLroot+this._URLadd)
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

