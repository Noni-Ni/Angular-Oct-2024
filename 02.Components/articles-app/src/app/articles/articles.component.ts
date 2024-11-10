import { Component, OnInit } from '@angular/core';
import { Article, data } from '../data/seed';
import { ArticleData } from '../data/data';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ ArticleComponent],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles : Article[];
  
  constructor() {
    this.articles = []
  }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
    
  }
}
