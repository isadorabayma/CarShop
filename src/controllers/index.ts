import { Request, Response } from 'express';
import Service from '../services';

export type ResponseError = {
  error: unknown;
};

export interface RequestWithBody<T> extends Request {
  body: T;
}

enum ControllerErrors {
  internal = 'Internal Server Error',
  notFound = 'Object not found',
  requiredId = 'Id is required',
  badRequest = 'Bad request',
  shortId = 'Id must have 24 hexadecimal characters',
}

abstract class Controller<T> {
  abstract route: string;
  // route vai ser um parametro da class? por que que ele tem que ser abstrato?

  protected errors = ControllerErrors;

  constructor(protected service: Service<T>) { }

  abstract create(
    req: RequestWithBody<T>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  read = async (
    _req: Request,
    res: Response<T[] | ResponseError>,
  ): Promise<typeof res> => {
    try {
      const objs = await this.service.read();
      // e os status? não entrariam aqui?
      return res.json(objs);
    } catch (err) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  abstract readOne(
    req: Request<{ id: string; }>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res>;

  update = async (
    req: Request<{ id: string, body: T }>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res> => {
    const { body, params: { id } } = req;
    if (id.length < 24) {
      return res.status(400).json({ error: this.errors.shortId });
    }
    try {
      if (!body.model) {
        return res.status(400).json({ error: this.errors.badRequest });
      } 

      const objUpdated = await this.service.update(id, body);
      
      if (objUpdated) return res.status(200).json(objUpdated);

      return res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  delete = async (
    req: Request<{ id: string }>,
    res: Response<T | ResponseError>,
  ): Promise<typeof res> => {
    const { id } = req.params;
    try {
      if (id.length < 24) {
        return res.status(400).json({ error: this.errors.shortId });
      }
      const objDeleted = await this.service.delete(id);
      if (objDeleted) {
        return res.status(204).json(objDeleted);
        // no readme pede para não ter resposta mas não estou conseguindo colocar .end() por conta da tipagem
      }
      return res.status(404).json({ error: this.errors.notFound });
    } catch (error) {
      return res.status(500).json({ error: this.errors.internal });
    }
  };

  // abstract update(
  //   req: Request<{ id: string, body: T }>,
  //   res: Response<T | ResponseError>,
  // ): Promise<typeof res>;

  // abstract delete(
  //   req: Request<{ id: string }>,
  //   res: Response<T | ResponseError>,
  // ): Promise<typeof res>;
}
export default Controller;
