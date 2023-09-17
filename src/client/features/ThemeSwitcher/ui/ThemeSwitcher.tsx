import React, { JSX, memo } from 'react';
import cls from './ThemeSwitcher.module.scss';
import SwitchIcon from '@/client/shared/assets/icons/theme-icon.svg';
import useTheme from '@/client/shared/lib/hooks/useTheme/useTheme';
import Icon from '@/client/shared/ui/Icon';

interface IThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = memo(
    ({ className }: IThemeSwitcherProps): JSX.Element => {
        const { toggleTheme } = useTheme();

        return (
            <Icon
                width={50}
                height={50}
                Svg={SwitchIcon}
                className={cls.icon}
                onClick={toggleTheme}
                clickable
            />
        );
    },
);

export default ThemeSwitcher;
