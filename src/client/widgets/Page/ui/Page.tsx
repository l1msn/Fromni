import React, { JSX } from 'react';
import classNames from '@/client/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import PAGE_ID from '@/client/shared/consts/ids';
import TestProps from '@/client/shared/types/tests';
import Motion from '@/client/shared/ui/Motion';

interface IPageProps extends TestProps {
    className?: string;
    children?: React.ReactNode;
    onScrollEnd?: () => void;
}

const Page: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
    const { className, children } = props;

    return (
        <Motion>
            <main
                className={classNames(cls.page, {}, [className])}
                id={PAGE_ID}
                data-testid={props['data-testid'] ?? 'Page'}
            >
                {children}
            </main>
        </Motion>
    );
};

export default Page;
