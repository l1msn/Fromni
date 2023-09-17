import { IStateSchema } from '@/client/app/providers/StoreProvider';
import { ReducersList } from '../../../components/DynamicModuleLoader/DynamicModuleLoader';
import Themes from '@/client/shared/consts/theme';

interface IComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: ReducersList;
    theme?: Themes;
}

export default IComponentRenderOptions;
