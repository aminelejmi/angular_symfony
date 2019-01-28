import {Component, OnInit, Input} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() id: number;
    @Input() title: string;
    @Input() content: string;

    constructor(private postService: PostService) {
    }

    ngOnInit() {
    }

    onDelete(id: number) {
        console.log(id);
        this.postService.deletePostFromServer(id);
        this.postService.emitPostSubject();
    }

}
