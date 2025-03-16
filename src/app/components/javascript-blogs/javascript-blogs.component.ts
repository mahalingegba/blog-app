import { Component } from '@angular/core';
import { blogList } from '../../../shared/blogs';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardActions, MatCardContent, MatCardImage } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-javascript-blogs',
  imports: [CommonModule,MatCard,MatCardActions,MatCardContent,FormsModule,MatCardImage,MatBottomSheetModule],
  templateUrl: './javascript-blogs.component.html',
  styleUrl: './javascript-blogs.component.css'
})
export class JavascriptBlogsComponent {
  javascriptBlogs:any[]=[];
 articles=blogList
  ngOnInit(){
    this.javascriptBlogs=this.articles.filter((art:any)=>art.category === 'javascript')
  }
}
