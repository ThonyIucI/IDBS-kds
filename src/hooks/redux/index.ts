import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;