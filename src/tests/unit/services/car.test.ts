import { expect } from 'chai';
import sinon from 'sinon';
import CarService from '../../../services/Car';
import { Model } from 'mongoose';
import {
  createBodyMock,
  wrongBodyMock,
  createResultMock,
  readResultMock,
} from '../../mocks/car';

const serviceInstance = new CarService();

describe('--- Car Service test ---', ()=>{
  describe('- Success cases -', ()=>{
    before(() => {
      sinon.stub(Model, 'create').resolves(createResultMock)
      sinon.stub(Model, 'find').resolves(readResultMock)
      sinon.stub(Model, 'findOne').resolves(createResultMock)
      sinon.stub(Model, 'findByIdAndUpdate').resolves(createResultMock)
      sinon.stub(Model, 'findOneAndDelete').resolves(createResultMock)
    })
  
    after(() => {
      (Model.create as sinon.SinonStub).restore();
      (Model.find as sinon.SinonStub).restore();
      (Model.findOne as sinon.SinonStub).restore();
      (Model.findByIdAndUpdate as sinon.SinonStub).restore();
      (Model.findOneAndDelete as sinon.SinonStub).restore();
    })
    
    it('1. Create module returns the car created', async ()=>{
  
      const result = await serviceInstance.create(createBodyMock);
      expect(result).to.be.equal(createResultMock);  
    })
  
    it('2. Read module returns all cars in the db', async ()=>{
  
      const result = await serviceInstance.read();
      expect(result).to.be.equal(readResultMock);  
    })
  
    it('3. ReadOne module returns a car in the db by id', async ()=>{
  
      const id =  "62b76ebdf8823499b8f9828c";
      const result = await serviceInstance.readOne(id);
      expect(result).to.be.equal(createResultMock);  
    })  
    
    it('4. Update module returns an updated car', async ()=>{
  
      const id =  "62b76ebdf8823499b8f9828c";
      const result = await serviceInstance.update(id, createBodyMock);
      expect(result).to.be.equal(createResultMock);  
    })
  
    it('5. Delete module returns a cars in the db by id', async ()=>{
  
      const id =  "62b76ebdf8823499b8f9828c";
      const result = await serviceInstance.delete(id);
      expect(result).to.be.equal(createResultMock);  
    })
  })
  describe('- Fail cases -', ()=>{
    before(() => {
      sinon.stub(Model, 'create').resolves(createResultMock)
      sinon.stub(Model, 'find').resolves(readResultMock)
      sinon.stub(Model, 'findOne').resolves(createResultMock)
      sinon.stub(Model, 'findByIdAndUpdate').resolves(createResultMock)
      sinon.stub(Model, 'findOneAndDelete').resolves(createResultMock)
    })
  
    after(() => {
      (Model.create as sinon.SinonStub).restore();
      (Model.find as sinon.SinonStub).restore();
      (Model.findOne as sinon.SinonStub).restore();
      (Model.findByIdAndUpdate as sinon.SinonStub).restore();
      (Model.findOneAndDelete as sinon.SinonStub).restore();
    })
    
    it('1. Create module returns the car created', async ()=>{
  
      const result = await serviceInstance.create(wrongBodyMock);
      expect(result).to.have.property('error');  
    })
    
    it('2. Update module returns an updated car', async ()=>{
  
      const id =  "62b76ebdf8823499b8f9828c";
      const result = await serviceInstance.update(id, wrongBodyMock);
      expect(result).to.have.property('error');  
    })
  })
})
