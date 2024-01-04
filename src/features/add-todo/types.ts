import { z } from 'zod';
import { addTodoValidationSchema } from './constants';

export type AddTodoSchemaType = z.infer<typeof addTodoValidationSchema>;
