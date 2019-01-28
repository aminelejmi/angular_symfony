import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../model/Post.model';

@Injectable()
export class PostService {

    postSubject = new Subject<any[]>();

    allPosts = [];

    constructor(private httpClient: HttpClient) {
    };

    emitPostSubject() {
        this.postSubject.next(this.allPosts.slice());
    }
    getPostsFromServer() {
        this.httpClient
            .get<any[]>('http://127.0.0.1:8000/api/articles.json')
            .subscribe(
                (response) => {
                    this.allPosts = response;
                    this.emitPostSubject();
                },
                (error) => {
                    console.log('Erreur : ' + error);
                }
            );
    }

    addNewPostToServer(post: Post) {
        this.httpClient
            .post('http://127.0.0.1:8000/api/articles.json', post)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé !');
                },
                (error) => {
                    console.log('Erreur : ' + error);
                }
            );
    }

    deletePostFromServer(id: number) {
        this.httpClient
            .delete('http://127.0.0.1:8000/api/articles/' + id)
            .subscribe(
                () => {
                    console.log('Suppression effectuée !');
                    this.getPostsFromServer();
                },
                (error) => {
                    console.log('Erreur : ', +error);
                }
            );
    }
}
