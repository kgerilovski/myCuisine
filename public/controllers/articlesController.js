import {templates} from 'templates';
import 'bootstrap';


function all(){
    templates.getPage('articles')

}


let articlesControl = {
    all
}

export { articlesControl as articlesController }