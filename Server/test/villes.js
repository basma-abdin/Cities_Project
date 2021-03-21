process.env.NODE_ENV = 'test';


const sequelize = require('../db/db.config').sequelize;
var initModels = require("../models/init-models");

var ville = initModels(sequelize).villes_france_free


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
var expect = chai.expect

chai.use(chaiHttp);

describe('Villes', () => {
  describe('Get all cities from DB without params', () => {
      it('it should GET all the cities (549 in total in DB)', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(549)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(2)
                  expect(res.body.villes.length).to.equals(500)
                  expect(res.body.villes[0].ville_id).to.equals(1)
                  expect(res.body.currentPage).to.equals(0)
              done();
            });
      });
  });

  describe('Get all cities from DB with param page 1', () => {
      it('it should GET all the after 500 (549 in total in DB)', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes?page=1')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(549)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(2)
                  expect(res.body.villes.length).to.equals(49)
                  expect(res.body.villes[0].ville_id).to.equals(501)
              done();
            });
      });
  });

  describe('Get all cities from DB with sort =  ASC', () => {
      it('it should GET cities in Ascending order (549) villes', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes?sort=asc')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(549)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(2)
                  expect(res.body.villes.length).to.equals(500)
                  expect(res.body.villes[0].ville_id).to.equals(444)
              done();
            });
      });
  });
  describe('Get all cities from DB with sort =  DESC', () => {
      it('it should GET cities in descending order  (549) villes', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes?sort=desc')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(549)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(2)
                  expect(res.body.villes.length).to.equals(500)
                  expect(res.body.villes[0].ville_id).to.equals(333)
              done();
            });
      });
  });

  describe('Get all villes from DB with bad parameter sort =  xxx', () => {
      it('it should GET all the cities (549) villes', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes?sort=xxx')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(549)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(2)
                  expect(res.body.villes.length).to.equals(500)
                  expect(res.body.villes[0].ville_id).to.equals(1)
              done();
            });
      });
  });

  describe('Get all villes from DB with parameter departement =  02', () => {
      it('it should GET all the cities of 02 department (549) villes', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes?departement=02')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(130)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(1)
                  expect(res.body.villes.length).to.equals(130)
                  expect(res.body.villes[0].ville_id).to.equals(420)
              done();
            });
      });
  });

  describe('Get all villes from DB with bad parameter ', () => {
      it('it should GET all the villes (549) villes', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes?ss=ss')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(549)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(2)
              done();
            });
      });
  });

  describe('Get all villes from DB with  parameters sort & departement ', () => {
      it('it should GET all the villes (549) villes', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes?sort=ASC&departement=02')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.totalItems).to.equals(130)
                  // 500 per page
                  expect(res.body.totalPages).to.equals(1)
                  expect(res.body.villes[0].ville_id).to.equals(444)
              done();
            });
      });
  });

  describe('Get city by id', () => {
      it('it should GET city ', (done) => {
        chai.request('http://localhost:8000')
            .get('/api/v1/villes/1')
            .end((err, res) => {
                  res.should.have.status(200);
                  expect(res.body.ville.ville_id).to.equals(1)
                  // 500 per page
                  expect(res.body.ville.ville_nom_reel).to.equals("Ozan")
              done();
            });
      });
  });

});