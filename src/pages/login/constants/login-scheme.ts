import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Неверный адрес электронной почты' }),
  password: z
    .string()
    .min(8, { message: 'Пароль должен содержать не менее 8 символов' }),
});
