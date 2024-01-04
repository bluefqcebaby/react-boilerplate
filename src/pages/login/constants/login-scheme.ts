import i18n from '@/shared/lib/i18n';
import { z } from 'zod';

const basePath = 'login_form.validation';

export const loginSchema = z.object({
  email: z.string().email({ message: i18n.t(`${basePath}.email`) }),
  password: z.string().min(8, { message: i18n.t(`${basePath}.password`) }),
});
