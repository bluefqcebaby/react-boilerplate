import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const useAppDispatch: () => typeof AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<typeof RootState> =
  useSelector;
