import Service, { ServiceError } from '.';
import { Car, carZodSchema } from '../interfaces/CarInterface';
import CarModel from '../models/Car';

class CarService extends Service<Car> {
  constructor(model = new CarModel()) {
    super(model);
  }

  create = async (obj: Car): Promise<Car | ServiceError | null> => {
    const parsed = carZodSchema.safeParse(obj);
    if (!parsed.success) {
      return { error: parsed.error };
    }
    return this.model.create(obj);
  };

  // readOne = async (id: string): Promise<Car | ServiceError | null> => {
  //   const parsed = carZodSchema.safeParse(id);
  //   if (!parsed.success) {
  //     return { error: parsed.error };
  //   }
  //   return this.model.readOne(id);
  // };
}

export default CarService;
