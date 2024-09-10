import { Component, OnInit } from '@angular/core';
import { GetPostService } from '../../../../services/getpost.service';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrl: './viewpost.component.css'
})
export class ViewpostComponent implements OnInit{
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