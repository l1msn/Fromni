import { Story } from '@storybook/react';
import '@/client/app/styles/index.scss';

const styleDecorator = (story: () => Story<any>) => story();

export default styleDecorator;
