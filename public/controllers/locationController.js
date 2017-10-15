import {templates} from 'templates';
import 'bootstrap';

async function all(){
    $('.common-footer').css("display","initial");
    templates.getPage('location');
}

let locationController = {
    all
};

export { locationController as locationController };
