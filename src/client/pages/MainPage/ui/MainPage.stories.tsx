import type { Meta, StoryObj } from '@storybook/react';

import themeDecorator from '@/client/shared/config/storybook/themeDecorator/themeDecorator';
import MainPage from './MainPage';
import storeDecorator from '@/client/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/client/shared/consts/theme';

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {},
    decorators: [storeDecorator({})],
};

export const Dark: Story = {
    args: {},
    decorators: [themeDecorator(Themes.DARK), storeDecorator({})],
};
