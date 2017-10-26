import * as $ from 'jquery';

class ArticleRepository {

    public getArticles(tags: string[]): Promise<Array<Article>> {
        let self = this;

        let promise = new Promise<Array<Article>>(
        (
            resolve: (items: Array<Article>) => void,
            reject: (message: string) => void) => {

                

        });

        return promise;
    }
}