import {templates} from 'templates';

import { homeController } from 'homeController';
import { locationController } from 'locationController';
import { menuController }  from 'menuController';
import { articlesController } from 'articlesController';

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController.all())
    .on({
        '/#': () => homeController.all(),
        '/#/location': () => locationController.all(),
        '/#/menu': () => menuController.all(),
        '/#/articles': () => articlesController.all(),
    })
    .resolve();