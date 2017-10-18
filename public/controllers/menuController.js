import {templates} from 'templates';
import 'bootstrap';

function all(){
    let data = [];
    $.getJSON('../data/data.json', function(json) {
        for(let i = 0; i < json.objects.length; i++)
        {
            data[i] = json.objects[i];
        }
    });
        templates.getPage('menu', data);
        $('.common-footer').css("display", "initial");
}

let menuController = {
    all
};

export { menuController as menuController };