// import { expect } from 'chai';
// import { Request, Response } from 'express';
// import sinon from 'sinon';
// import CarController from '../../../controllers/Car';
// import CarService from '../../../services/Car';
// import {
//   createBodyMock,
//   createResultMock,
//   readResultMock,
// } from '../../mocks/car';

// describe('--- Car controller test ---', ()=>{
//   const serviceInstance = new CarService();
//   const controllerInstance = new CarController();

//   const req = {
//     body: {},
//     params: {},
//   } as unknown as Request;

//   const res = {
//     status: sinon.stub().returns({ json: sinon.spy()}),
//     json: sinon.spy,
//   } as unknown as Response;

//   describe('- Success cases -', ()=>{
//     before(() => {
//       sinon.stub(serviceInstance, 'create')
//       sinon.stub(serviceInstance, 'read')
//       sinon.stub(serviceInstance, 'readOne')
//     })
  
//     after(() => {
//       (serviceInstance.create as sinon.SinonStub).restore();
//       (serviceInstance.read as sinon.SinonStub).restore();
//       (serviceInstance.readOne as sinon.SinonStub).restore();
//     })
    
//     it('1. Create module returns the car created', async ()=>{
//       req.body = createBodyMock;
//       (serviceInstance.create  as sinon.SinonStub).resolves(createResultMock)
//       await controllerInstance.create(req, res);

//       expect(res.status).to.be.equal(200);
//       // expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
//       // expect((res.json as sinon.SinonStub).calledWith(createResultMock))
//       // .to.be.true;  

//       // sinon.assert.calledWith(res.status, 201);
//     })
  
//     // it('2. Read module returns all cars in the db', async ()=>{
//     //   (serviceInstance.read  as sinon.SinonStub).resolves(readResultMock)
//     //   await controllerInstance.read(req, res);

//     //   expect((res.status as sinon.SinonStub).called).to.be.true;
//     //   // expect((res.json as sinon.SinonStub).calledWith(readResultMock))
//     //   // .to.be.true;        
//     // })
  
//     // it('3. ReadOne module returns a car in the db by id', async ()=>{
//     //   req.params = { id: "62b76ebdf8823499b8f9828c" };
      
//     //   await controllerInstance.readOne(req, res);

//     //   expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
//     //   expect((res.json as sinon.SinonStub).calledWith(createResultMock))
//     //   .to.be.true;  
//     // })  
//   })
// })
