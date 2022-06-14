import { z } from 'zod';
import { vehicleZodSchema } from './VehicleInterface';

const motoZodSchema = vehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().positive().int()
    .max(2500, { message: 'Engine must be no more than 2500' }),
});

type Motorcycle = z.infer<typeof motoZodSchema>;

export { Motorcycle, motoZodSchema };