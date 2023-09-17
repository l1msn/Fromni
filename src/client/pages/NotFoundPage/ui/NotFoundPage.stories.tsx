import type { Meta, StoryObj } from '@storybook/react';

import themeDecorator from '@/client/shared/config/storybook/themeDecorator/themeDecorator';
import NotFoundPage from './NotFoundPage';
import storeDecorator from '@/client/shared/config/storybook/storeDecorator/storeDecorator';
import Themes from '@/client/shared/consts/theme';

const meta = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

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
