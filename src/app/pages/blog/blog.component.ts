import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

        articles: any[] = [];

        constructor(private articlesService: ArticlesService) {
            this.articles = articlesService.getArticles();
        }

}
