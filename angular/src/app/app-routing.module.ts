import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewPostComponent} from './new-post/new-post.component';
import {PostListComponent} from './post-list/post-list.component';

const appRoutes: Routes = [
    {path: 'posts', component: PostListComponent},
    {path: 'newPost', component: NewPostComponent},
    {path: '**', redirectTo: '/posts'}
]
;

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
