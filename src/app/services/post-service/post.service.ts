import { Injectable } from '@angular/core';
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

  getAllPost(){
    this.api.get(this._URLroot+this._URLall)
  }

  getPost(){}

  crearPost(){
    this.api.post(this._URLroot+this._URLadd)
  }

}

export interface GetPost{
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
}

