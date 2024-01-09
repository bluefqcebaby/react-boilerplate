import { useTranslation } from 'react-i18next';
import { FC, HTMLProps, useState } from 'react';
import * as UI from '@/shared/ui-kit';
import { AddTodoModal } from './add-todo-modal';

interface IProps extends HTMLProps<HTMLDivElement> {}

export const AddTodo: FC<IProps> = (props) => {
  const { t } = useTranslation(['app'], { keyPrefix: 'todo' });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTodo = () => {
    setIsModalOpen(true);
  };

  return (
    <div {...props}>
      <UI.Button onClick={handleAddTodo}>{t('add')}</UI.Button>
      <AddTodoModal isVisible={isModalOpen} setIsVisible={setIsModalOpen} />
    </div>
  );
};
