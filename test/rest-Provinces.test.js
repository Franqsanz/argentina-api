'use strict';
/* eslint-disable prettier/prettier */

const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

let URL = '/api/v1/provinces'

describe('/GET provinces', () => {
    it('GET all the provinces', (done) => {
        chai.request(server)
            .get(URL)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.an('array');
                expect(res.body).to.have.lengthOf(24);
                done();
            });
    });
});
describe('/GET province id', () => {
    it('GET one the province id', (done) => {
        chai.request(server)
            .get(`${URL}/1`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('_id').to.be.equal(1);
                expect(res.body).to.be.an('object');
                done()
            });
    });
});