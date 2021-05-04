import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { ContactComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { MenuComponent } from './menu/menu.component';
import { UtilService } from './shared/services/util.service';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    HomeComponent,
    PageNotFoundComponent,
    BookmarkComponent,
    ContactComponent,
    TodoComponent,
    ProfileComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
