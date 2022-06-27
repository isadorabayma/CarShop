import { expect } from 'chai';
import { Request, Response } from 'express';
import sinon from 'sinon';
import CarController from '../../../controllers/Car';
import { Model } from 'mongoose';
import {
  createBodyMock,
  wrongBodyMock,
  createResultMock,
  readResultMock,
} from '../../mocks/car';

const controllerInstance = new CarController();
const res = {
  status: () => {},
  json: () => {},
} as unknown as Response;

describe('--- Car controller test ---', ()=>{
  describe('- Success cases -', ()=>{
    before(() => {
      sinon.stub(Model, 'create').resolves(createResultMock)
      // sinon.stub(Model, 'find').resolves(readResultMock)
      // sinon.stub(Model, 'findOne').resolves(createResultMock)
      // sinon.stub(Model, 'findByIdAndUpdate').resolves(createResultMock)
      // sinon.stub(Model, 'findOneAndDelete').resolves(createResultMock)

      sinon.stub(res, 'status').returns(res);
      sinon.stub(res, 'json').returns(res);
    })
  
    after(() => {
      (Model.create as sinon.SinonStub).restore();
      // (Model.find as sinon.SinonStub).restore();
      // (Model.findOne as sinon.SinonStub).restore();
      // (Model.findByIdAndUpdate as sinon.SinonStub).restore();
      // (Model.findOneAndDelete as sinon.SinonStub).restore();
    })
    
    it('1. Create module returns the car created', async ()=>{
      const req = {
        body: createBodyMock,
      } as unknown as Request;
      
      await controllerInstance.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(createResultMock))
      .to.be.true;  
    })
  
    // it('2. Read module returns all cars in the db', async ()=>{
    //   const req = {} as unknown as Request;
      
    //   const result = await controllerInstance.read(req, res);

    //   expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    //   // expect((res.json as sinon.SinonStub).calledWith(readResultMock))
    //   // .to.be.true;        
    // })
  
    // it('3. ReadOne module returns a car in the db by id', async ()=>{
    //   const req = {
    //     params: { id: "62b76ebdf8823499b8f9828c" },
    //   } as any;
      
    //   await controllerInstance.readOne(req, res);

    //   expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    //   expect((res.json as sinon.SinonStub).calledWith(createResultMock))
    //   .to.be.true;  
    // })  
    
  //   it('4. Update module returns an updated car', async ()=>{
  
  //     const id =  "62b76ebdf8823499b8f9828c";
  //     const result = await controllerInstance.update(id, createBodyMock);
  //     expect(result).to.be.equal(createResultMock);  
  //   })
  
  //   it('5. Delete module returns a cars in the db by id', async ()=>{
  
  //     const id =  "62b76ebdf8823499b8f9828c";
  //     const result = await controllerInstance.delete(id);
  //     expect(result).to.be.equal(createResultMock);  
  //   })
  })
  // describe('- Fail cases -', ()=>{
  //   before(() => {
  //     sinon.stub(Model, 'create').resolves(createResultMock)
  //     sinon.stub(Model, 'find').resolves(readResultMock)
  //     sinon.stub(Model, 'findOne').resolves(createResultMock)
  //     sinon.stub(Model, 'findByIdAndUpdate').resolves(createResultMock)
  //     sinon.stub(Model, 'findOneAndDelete').resolves(createResultMock)
  //   })
  
  //   after(() => {
  //     (Model.create as sinon.SinonStub).restore();
  //     (Model.find as sinon.SinonStub).restore();
  //     (Model.findOne as sinon.SinonStub).restore();
  //     (Model.findByIdAndUpdate as sinon.SinonStub).restore();
  //     (Model.findOneAndDelete as sinon.SinonStub).restore();
  //   })
    
  //   it('1. Create module returns the car created', async ()=>{
  
  //     const result = await controllerInstance.create(wrongBodyMock);
  //     expect(result).to.have.property('error');  
  //   })
    
  //   it('2. Update module returns an updated car', async ()=>{
  
  //     const id =  "62b76ebdf8823499b8f9828c";
  //     const result = await controllerInstance.update(id, wrongBodyMock);
  //     expect(result).to.have.property('error');  
  //   })
  // })
})
