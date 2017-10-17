'use strict';
import { firebaseModule } from 'firebase-config';

class DataBase {

    constructor(config) {
        this.database = config.database;
    }

    getAllMenus() {
        return new Promise((resolve, reject) => {
            let reviews = this.database.ref('menu/');
            reviews.once('value', data => {
                resolve(data.val());
            });
        });
    }
}

const dataBase = new DataBase(firebaseModule);

export { dataBase };