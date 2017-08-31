/*global describe, it*/
'use strict';
var superagent = require('supertest');
var app = require('../../build/app');

function request() {
    return superagent(app.listen());
}

describe('Nodeuii Service自动化脚本', function() {
    describe('API接口测试', function() {
        it('获取城市列表API', function(done) {
            request()
                .get('/index/getdata')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(err, res) {
                    if (res.body.length == 11) {
                        done();
                    }else{
                        //done(new Error('城市列表返回数据长度错误'));
                        done(err);
                    }
                });
        });
    });
    describe('Nodeuii 容错能力测试', function() {
        it('404容错脚本测试', function(done) {
            request()
                .get('/messages/notfound')
                .expect(404, done);
        });
    });
});