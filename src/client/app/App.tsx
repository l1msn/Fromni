import React, { JSX, Suspense } from 'react';
import classNames from '@/client/shared/lib/classNames/classNames';
import AppRouter from '@/client/app/providers/Router';
import { MainLayout } from '@/client/shared/layouts';
import useTheme from '@/client/shared/lib/hooks/useTheme/useTheme';

interface IAppProps {
    className?: string;
}

const App: React.FC<IAppProps> = ({ className }: IAppProps): JSX.Element => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense>
                <AppRouter />
            </Suspense>
        </div>
    );
};

export default App;
