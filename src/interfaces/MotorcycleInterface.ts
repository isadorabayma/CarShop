import { z } from 'zod';
import { vehicleZodSchema } from './VehicleInterface';

enum Category {
  Street,
  Custom,
  Trail,
}

const motoZodSchema = vehicleZodSchema.extend({
  category: z.nativeEnum(Category),
  engineCapacity: z.number().positive().int()
    .max(2500, { message: 'Engine must be no more than 2500' }),
});

type Motorcycle = z.infer<typeof motoZodSchema>;

export { Motorcycle, motoZodSchema, Category };