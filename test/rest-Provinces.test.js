'use strict';
/* eslint-disable prettier/prettier */

const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

async function test() {
    chai.request(server).get(`/api/v1/provinces`);
}

async function expectStructure(body) {
    expect(body).to.be.an('Array');
}

describe('provinces', () => {
    it('GET all the provinces', async () => {
        const { body } = await test()
        expectStructure(body);
        // expect(body).to.have.length(11)
    });
});
describe('GET province id', () => {
    it('GET one the province id', async () => {
        const body = await test()
        // expect(body).to.be.an('object')
        // expect(body._id).to.equal(1);
    });
});