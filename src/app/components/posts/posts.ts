import { Component, inject } from '@angular/core';
import { PostService } from '../../services/post-service';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-posts',
  imports: [AsyncPipe],
  templateUrl: './posts.html',
  styleUrl: './posts.scss',
})
export class Posts {

  private postService = inject(PostService);

  posts$ = this.postService.getPosts()

}
