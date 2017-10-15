import {templates} from 'templates';
import 'bootstrap';

function all(){
    return new Promise((resolve, reject) => {
        let reviews = firebase.database().ref('menu/');
        reviews.once('value', (snapshot) => {
        let arr = [];
        snapshot.forEach(element => {
            let cat = element.key;
            console.log(cat);
            element.forEach(el=>{
                let dbElements = {
                    'name': el.key,
                    'description': el.val().description,
                    'image': el.val().image,
                    'price': el.val().price,
                    'category': cat
                };
                arr.push(dbElements);
            });
        });
        templates.getPage('menu', arr);
        $('.common-footer').css("display", "initial");
    });
    });
}

let menuController = {
    all
};

export { menuController as menuController };