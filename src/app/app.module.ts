import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ArticleComponent } from './pages/article/article.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ArticlesService } from './services/articles.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ArticleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
