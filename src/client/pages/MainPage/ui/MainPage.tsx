import React, { JSX } from 'react';
import Page from '@/client/widgets/Page';
import { useTranslation } from 'react-i18next';

const MainPage: React.FC = (): JSX.Element => {
    const { t } = useTranslation();

    return <Page data-testid={'MainPage'}>hi!!</Page>;
};

export default MainPage;
