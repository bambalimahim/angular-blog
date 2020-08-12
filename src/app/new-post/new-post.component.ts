import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { Post } from '../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private postService: PostService,
    private router: Router) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSubmitForm() {
    const post = new Post(
      this.postForm.get('title').value,
      this.postForm.get('content').value
    );
    this.postService.addPost(post);
    this.router.navigate(['/posts']);
  }

}
