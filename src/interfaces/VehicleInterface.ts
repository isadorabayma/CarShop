import { z } from 'zod'; 

const vehicleZodSchema = z.object({
  model: z.string().min(3, { message: 'Model must be at least 3 caracteres' }),
  year: z.number().gte(1900, { message: 'Year must be at least 1900' })
    .lte(2022, { message: 'Year cannot be higher than 2021' }),
  color: z.string().min(3, { message: 'Color must be at least 3 caracteres' }),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

type Vehicle = z.infer<typeof vehicleZodSchema>;
export { Vehicle, vehicleZodSchema };