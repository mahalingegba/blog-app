import { Component } from '@angular/core';
import { blogList } from '../../../shared/blogs';
import { MatCard, MatCardActions, MatCardContent, MatCardImage } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-blogs',
  imports: [CommonModule,MatCard,MatCardActions,MatCardContent,FormsModule,MatCardImage],
  templateUrl: './angular-blogs.component.html',
  styleUrl: './angular-blogs.component.css'
})
export class AngularBlogsComponent {
  angularBlogs:any[]=[];
 articles=blogList
  ngOnInit(){
    this.angularBlogs=this.articles.filter((art:any)=>art.category === 'angular')
  }

}
