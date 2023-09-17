import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/client/app/providers/StoreProvider/config/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
