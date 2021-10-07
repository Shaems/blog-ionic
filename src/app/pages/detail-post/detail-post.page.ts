import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetPost, PostService } from 'src/app/services/post-service/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.page.html',
  styleUrls: ['./detail-post.page.scss'],
})
export class DetailPostPage implements OnInit {

  id: string;
  post: GetPost = {
    id: '',
    titulo: '',
    descripcion: '',
    fecha: '',
  };

  constructor(
    private aRoute: ActivatedRoute,
    private _postService: PostService,
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id') || '';
    console.log(this.id)
    this.cargarPost();
   }

  ngOnInit() {
  }

  cargarPost(){
    this._postService.getAllPost().subscribe(data => {
      this.post = data.posts.find(post => post.id == this.id) || this.post
    })
  }

}
