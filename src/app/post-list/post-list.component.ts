import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  
  postSubcription: Subscription;
  posts: Post[];
  constructor(private postService: PostService){
  }

  ngOnInit() {
    this.postSubcription = this.postService.postsSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    )
    this.postService.emitPost();
  }

  ngOnDestroy() {
    this.postSubcription.unsubscribe();
  }
}
