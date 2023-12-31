import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import '@/client/app/styles/index.scss';
import Themes from '@/client/shared/consts/theme';
import themeDecorator from '@/client/shared/config/storybook/themeDecorator/themeDecorator';

const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [themeDecorator(Themes.DARK)],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        variant: 'clear',
        children: 'Text',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Text',
    },
};
