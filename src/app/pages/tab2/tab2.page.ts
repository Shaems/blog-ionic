import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NuevoPost, PostService } from 'src/app/services/post-service/post.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  addForm: FormGroup;

  constructor(
    private _postService: PostService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.addForm = this.fb.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }

  ngOnInit(){
  }

  addPost(){
    let post: NuevoPost = {
      titulo: this.addForm.value.titulo, 
      descripcion: this.addForm.value.descripcion
    }
    this._postService.crearPost(post).subscribe( postCreado => {
      this.router.navigate(['/tabs/tab1'])
    })
  }
}
