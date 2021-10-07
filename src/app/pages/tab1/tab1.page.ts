import { Component, OnInit } from '@angular/core';
import { GetPost, PostService } from 'src/app/services/post-service/post.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: GetPost[] = [];

  constructor(
    private _postService: PostService,
  ) {}

  ngOnInit(){
    this.getAllPost();
  }

  // Trae la lista de posts y los guarda en el componente
  getAllPost(){
    this._postService.getAllPost().subscribe( data =>{
      console.log(data.posts[0])
      this.posts = data.posts
      this.posts.sort((a, b) => a.fecha < b.fecha ? 1 :
                                    (a.fecha > b.fecha ? -1 : 0))
    })
  }
}
