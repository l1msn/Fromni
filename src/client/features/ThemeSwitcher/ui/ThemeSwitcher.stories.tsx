import type { Meta, StoryObj } from '@storybook/react';
import themeDecorator from '@/client/shared/config/storybook/themeDecorator/themeDecorator';
import ThemeSwitcher from './ThemeSwitcher';
import Themes from '@/client/shared/consts/theme';
import storeDecorator from '@/client/shared/config/storybook/storeDecorator/storeDecorator';

const meta = {
    title: 'features/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

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
