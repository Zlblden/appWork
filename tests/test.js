var assert = require('assert');
var should = require('should');
var request = require('supertest'),
    express = require('express');
var app = express();
describe('categories', function() {
    describe('#indexOf()', function () {
        it('should create category', function () {
            request(app)
                .post('/categories')
                .set('Content-Type', 'application/json')
                .send({
                    'name': 'test'
                })
                .expect(200)
                .end(function(err, res){
                    if (err) throw err;

                });
        });
    });
});