import { data } from "./seed";
import { Article } from "./seed";
import { ArticleType } from "./seed";

export class ArticleData {
    getData(): ArticleType[] {
        let articles : ArticleType[] = [];
        for (let i = 0; i < data.length; i++) {
            articles[i] = new Article(data[i].title, data[i].description, data[i].author, data[i].imageUrl);
            
        }
        return articles;
    }
}