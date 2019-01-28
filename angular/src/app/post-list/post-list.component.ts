import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from "../services/post.service";


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

    @Input() posts: any[];
    postsSubscription: Subscription;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getPostsFromServer();
        this.postsSubscription = this.postService.postSubject.subscribe(
            (allPosts: any[]) => {
                this.posts = allPosts;
            }
        );
        this.postService.emitPostSubject();
    }

    ngOnDestroy(){
        this.postsSubscription.unsubscribe();
    }

}
