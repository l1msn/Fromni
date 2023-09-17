import React, { JSX, memo } from 'react';
import classNames from '@/client/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { LinkProps, NavLink } from 'react-router-dom';
import AppLinkVariant from '../consts/AppLinkVariant';
import TestProps from '@/client/shared/types/tests';
import Icon from '@/client/shared/ui/Icon';
import DotIcon from '@/client/shared/assets/icons/dot-icon.svg';

interface IAppLinkProps extends LinkProps, TestProps {
    className?: string;
    variant?: AppLinkVariant;
    children?: React.ReactNode;
    activeClassName?: string;
    withDot?: boolean;
}

const AppLink: React.FC<IAppLinkProps> = memo(
    (props: IAppLinkProps): JSX.Element => {
        const {
            to,
            className,
            children,
            withDot = false,
            variant = 'primary',
            activeClassName = '',
            ...otherProps
        } = props;

        return (
            <NavLink
                {...otherProps}
                to={to}
                className={({ isActive }) =>
                    classNames(
                        cls.appLink,
                        {
                            [activeClassName]: isActive,
                        },
                        [className, cls[variant]],
                    )
                }
            >
                {({ isActive }) => (
                    <>
                        {children}
                        {withDot && isActive && (
                            <Icon className={cls.dot} Svg={DotIcon} />
                        )}
                    </>
                )}
            </NavLink>
        );
    },
);

export default AppLink;
