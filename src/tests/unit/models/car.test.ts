import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import {
  createBodyMock,
  createResultMock,
  readResultMock,
} from '../../mocks/car';

const modelInstance = new CarModel();

describe('--- Car Model test ---', ()=>{
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

    const result = await modelInstance.create(createBodyMock);
    expect(result).to.be.equal(createResultMock);  
  })

  it('2. Read module returns all cars in the db', async ()=>{

    const result = await modelInstance.read();
    expect(result).to.be.equal(readResultMock);  
  })

  it('3. ReadOne module returns a car in the db by id', async ()=>{

    const id =  "62b76ebdf8823499b8f9828c";
    const result = await modelInstance.readOne(id);
    expect(result).to.be.equal(createResultMock);  
  })  
  
  it('4. Update module returns an updated car', async ()=>{

    const id =  "62b76ebdf8823499b8f9828c";
    const result = await modelInstance.update(id, createBodyMock);
    expect(result).to.be.equal(createResultMock);  
  })

  it('5. Delete module returns a cars in the db by id', async ()=>{

    const id =  "62b76ebdf8823499b8f9828c";
    const result = await modelInstance.delete(id);
    expect(result).to.be.equal(createResultMock);  
  })
})