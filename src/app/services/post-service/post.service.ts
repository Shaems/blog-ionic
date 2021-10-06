import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  crearPost() {

  }
}

export interface GetPost{
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
}

