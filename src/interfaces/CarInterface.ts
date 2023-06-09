import { z } from 'zod';
import { vehicleZodSchema } from './VehicleInterface';

const carZodSchema = vehicleZodSchema.extend({
  // _id: z.string()
  //   .min(24, { message: 'Id must have 24 hexadecimal characters' }),
  doorsQty: z.number().min(2, { message: 'Car must have at least 2 doors' })
    .max(4, { message: 'Car must have no more than 4 doors' }),
  seatsQty: z.number().min(2, { message: 'Car must have at least 2 seats' })
    .max(7, { message: 'Car must have no more than 4 seats' }),
});

type Car = z.infer<typeof carZodSchema>;

export { Car, carZodSchema };