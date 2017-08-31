'use strict';
import index from './indexController';
const controllerInit = {
    getAllrouters(app, router) {
        app.use(router(_ => {
            _.get('/', index.index());
            _.get('/about', index.index());
            _.get('/counter', index.index());
            _.get('/topics/:id', index.index());
             _.get('/test', index.index());
            _.get('/index/getdata', index.getData());
        }));
    }
};
export default controllerInit;