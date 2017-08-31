//应用配置文件
import path from 'path';
import local from './local';
import _ from 'lodash';
let config = {
    "viewDir": path.join(__dirname, '..', 'views'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname, '..','assets'),
    "env":process.env.NODE_ENV//"development" production
};
const server = {
    //端口号配置
    "port": 80
};
//本地调试环境
if (!config.env || config.env === 'development') {
    config = _.extend(config, local);
} else {
    config = _.extend(config, server);
}
export default config;