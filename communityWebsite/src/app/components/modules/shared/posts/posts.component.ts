import { Component } from '@angular/core';
import { GetPostService } from '../../../../services/getpost.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: any[] = [];
  errorMessage: string = '';
  baseUrl: string='http://localhost:5114';
  constructor(private postService: GetPostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts() {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts.map(post => ({
        ...post,
        mediaUrl: this.baseUrl + post.mediaUrl 
      }));
    });
}
}
