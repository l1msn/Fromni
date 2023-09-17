import { IStateSchema, IThunkExtraArg } from '@/client/app/providers/StoreProvider';

interface IThunkConfig<T> {
    state: IStateSchema;
    rejectValue: T;
    extra: IThunkExtraArg;
}

export default IThunkConfig;
