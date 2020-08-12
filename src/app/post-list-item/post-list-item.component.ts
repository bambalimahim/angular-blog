import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post = new Post('default', 'no content');
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onPlus(post: Post) {
    this.postService.plus(post);
  }

  onMoins(post: Post) {
    this.postService.moins(post);
  }

  onRemove(post: Post) {
    this.postService.removePost(post);
  }

}
