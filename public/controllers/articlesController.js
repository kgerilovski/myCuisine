import {templates} from 'templates';
import 'bootstrap';


function all(){
    templates.getPage('articles');

}

let articlesController = {
    all
};

export { articlesController as articlesController }