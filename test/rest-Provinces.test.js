const chai = require('chai');
const chaiHttp = require('chai-http')
const server = require('../server')

chai.use(chaiHttp);

describe('provinces', () => {
    it('GET all the provinces', (done) => {
        chai.request(server)
            .get('/provinces')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });
});