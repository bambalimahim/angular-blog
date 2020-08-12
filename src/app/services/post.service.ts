import { Post } from '../post';
import { Subject } from 'rxjs';

export class PostService {

  posts = [
    new Post('18 Safar', 'Préparation du Grand Magal de Touba 18 Safar'),
    new Post('Safar', '<Sant Lé lénma Yalla> Safar jour de bénédiction'),
    new Post('Touba', 'La ville Sainte')
  ]
  postsSubject = new Subject<Post[]>();

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPost();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPost();
  }

  emitPost() {
    this.postsSubject.next(this.posts.slice());
  }

  plus(post: Post) {
    this.posts.find(
      (postEl) => {
        if (postEl === post) {
          postEl.loveIts ++;
          return true;
        }
      }
    )
    this.emitPost();
  }

  moins(post: Post) {
    this.posts.find(
      (postEl) => {
        if (postEl === post) {
          postEl.loveIts --
          return true;
        }
      }
    )
    this.emitPost();
  }
}