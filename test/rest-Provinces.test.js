'use strict';
/* eslint-disable prettier/prettier */

const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);

let URL = `/api/v1/provinces`;

describe('provinces', () => {
    it('GET all the provinces', async () => {
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