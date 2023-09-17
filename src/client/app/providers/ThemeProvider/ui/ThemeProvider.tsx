import React, { JSX, useEffect, useMemo, useState } from 'react';
import Themes from '@/client/shared/consts/theme';
import { ThemeContext } from '@/client/shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/client/shared/consts/localStorage';

interface IThemeProviderProps {
    children?: React.ReactNode;
    initialTheme?: Themes;
}

const ThemeProvider: React.FC<IThemeProviderProps> = (props): JSX.Element => {
    const { initialTheme, children } = props;

    const [theme, setTheme] = useState<Themes>(Themes.LIGHT);
    const [isThemeInit, setIsThemeInit] = useState<boolean>(false);

    useEffect(() => {
        if (!isThemeInit && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInit((prevState) => !prevState);
        }
    }, [isThemeInit, initialTheme]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
