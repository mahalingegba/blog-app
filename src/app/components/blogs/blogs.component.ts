import { Component } from '@angular/core';
import { blogList } from '../../../shared/blogs';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatCard, MatCardActions, MatCardContent, MatCardImage, MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-blogs',
  imports: [CommonModule,MatCard,MatCardActions,MatCardContent,MatCardModule,FormsModule,MatCardImage,MatBottomSheetModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
 selectedType:string='all'
 articles=blogList
  filteredArticles: any = [];
  constructor() {
    this.filterArticles();
  }
  
  ngOnInit(){

  }
   filterArticles():void{
    if(this.selectedType ==='all'){
      this.filteredArticles = [...this.articles];
    }else{
      this.filteredArticles=this.articles.filter((art:any)=>art.category ===this.selectedType);
    }
  }

  onCategoryChange(): void {
    this.filterArticles();
  }
}
