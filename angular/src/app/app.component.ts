import {Component, OnInit} from '@angular/core';
import {PostService} from './services/post.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    allPosts: any[];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        this.allPosts = this.postService.allPosts;
    }


}
