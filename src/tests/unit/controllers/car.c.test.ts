import * as sinon from 'sinon';
import CarController from '../../../controllers/Car';
import { ServiceError } from '../../../services';
import CarService from '../../../services/Car';

import {
  createBodyMock,
  createResultMock,
  readResultMock,
} from '../../mocks/car';

describe('--- car controller test ---', () => {
  const carService = new CarService();
  const carController = new CarController();
  const req = {
    body: {},
    params: {},
  } as any;

  const res = {
    json: sinon.spy(),
    status: sinon.stub().returns({ json: sinon.spy() }),
  } as any;

  describe('create car', () => {
    beforeEach(() => {
      sinon.stub(carService, 'create');
    });

    afterEach(() => {
      (carService.create as sinon.SinonStub).restore()
    });

    it('returns status 400', async () => {
      req.params = { id: '262e0f6kikoe22ed5fb11120' };
      (carService.create as sinon.SinonStub).resolves(null);
      await carController.create(req, res);

      sinon.assert.calledWith(res.status, 400);
      // sinon.assert.calledWith(res.status(400).json, resErro);
    })

    // it('returns status 500', async () => {
    //   req.params = { id: '262e0f6kikoe22ed5fb11120' };
    //   (carService.create as sinon.SinonStub).rejects();
    //   await carController.create(req, res);

    //   sinon.assert.calledWith(res.status, 500);
    //   // sinon.assert.calledWith(res.status(400).json, resErro);
    // })
  })

  describe('Delete a Car test', () => {
    beforeEach(() => {
      sinon.stub(carService, 'delete');
    });

    afterEach(() => {
      (carService.delete as sinon.SinonStub).restore()
    });

    it('delete and return 500', async () => {
      req.params = { id: '62b76ebdf8823499b8f9828c' };
      (carService.delete as sinon.SinonStub).rejects();
      // const resErro = { error: 'Internal Server Error' };

      await carController.delete(req, res);

      sinon.assert.calledWith(res.status, 500);
      // sinon.assert.calledWith(res.status(500).json, resErro);
    });
  });

  describe('Update Car test', () => {
    beforeEach(() => {
      sinon.stub(carService, 'update');
    });

    afterEach(() => {
      (carService.update as sinon.SinonStub).restore()
    });

    it('update new car', async () => {
      req.params = { id: '62b76ebdf8823499b8f9828c' };
      (carService.update as sinon.SinonStub).rejects();
      await carController.update(req, res);

      sinon.assert.calledWith(res.status, 500);
    });
  });

  // describe('Find all Cars test', () => {
  //   beforeEach(() => {
  //     sinon.stub(carService, 'read');
  //   });

  //   afterEach(() => {
  //     (carService.read as sinon.SinonStub).restore()
  //   });

  //   it('find a car', async () => {
  //     (carService.read as sinon.SinonStub).rejects();
  //     await carController.read(req, res);

  //     sinon.assert.calledWith(res.json, 500);
  //   });
  // })

  describe('Find one Car test', () => {
    beforeEach(() => {
      sinon.stub(carService, 'readOne');
    });

    afterEach(() => {
      (carService.readOne as sinon.SinonStub).restore()
    });

    it('return status 500 if receiving error', async () => {
      req.params = { id: '262e0f6kikoe22ed5fb11120' };
      const resErro = { error: 'Internal Server Error' };
      (carService.readOne as sinon.SinonStub).rejects();
      await carController.readOne(req, res);

      sinon.assert.calledWith(res.status, 500);
      sinon.assert.calledWith(res.status(500).json, resErro);
    });
  });
});
