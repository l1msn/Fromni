import { MainPage } from '@/client/pages/MainPage';
import { ForbiddenPage } from '@/client/pages/ForbiddenPage';
import { AppRoutes, RoutePaths } from '@/client/shared/consts/routerPaths';
import { AppRoutesProps } from '@/client/shared/types/router';
import NotFoundPage from '@/client/pages/NotFoundPage';

const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePaths.getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};

export { routeConfig };
