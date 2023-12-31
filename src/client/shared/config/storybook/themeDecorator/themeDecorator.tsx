import { Story } from '@storybook/react';
import { ThemeProvider } from '@/client/app/providers/ThemeProvider';
import Themes from '@/client/shared/consts/theme';

function themeDecorator(theme: Themes) {
    // eslint-disable-next-line react/display-name
    return (StoryComponent: Story) => {
        return (
            <ThemeProvider initialTheme={theme}>
                <div className={`app ${theme}`}>
                    <StoryComponent />
                </div>
            </ThemeProvider>
        );
    };
}

export default themeDecorator;
