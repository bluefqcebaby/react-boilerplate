import i18n from '@/shared/lib/i18n';
import { z } from 'zod';

export const addTodoValidationSchema = z.object({
  title: z.string().min(5, { message: i18n.t('todo.validation.title') }),
});
