import { z } from 'zod';
import { loginSchema } from './constants/login-scheme';

export type LoginSchemaType = z.infer<typeof loginSchema>;
