import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('navbar');

    return (
        <div>
            {t('Главная')}
        </div>
    );
};

export default MainPage;
