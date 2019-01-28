import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostListItemComponent} from './post-list-item/post-list-item.component';
import {PostService} from './services/post.service';
import {NewPostComponent} from './new-post/new-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderNavComponent} from './header-nav/header-nav.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent,
        NewPostComponent,
        HeaderNavComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        PostService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
