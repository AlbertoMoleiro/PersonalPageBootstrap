import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

    article: any = {};

        constructor(private articlesService: ArticlesService,private route:ActivatedRoute) {
        this.article = this.articlesService.getArticleById(this.route.snapshot.params['id']);
            console.log(this.article);
        }
}
