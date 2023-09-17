import type { Meta, StoryObj } from '@storybook/react';
import '@/client/app/styles/index.scss';
import Modal from './Modal';
import themeDecorator from '@/client/shared/config/storybook/themeDecorator/themeDecorator';

import Themes from '@/client/shared/consts/theme';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'Text',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'Text',
    },
    decorators: [themeDecorator(Themes.DARK)],
};
