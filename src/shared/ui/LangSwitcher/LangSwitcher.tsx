import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import Button, {ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
}
const LangSwitcher = (props: LangSwitcherProps) => {
    const {
        className
    } = props;
    const {t, i18n} = useTranslation()

    const toogleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
            <Button
                className={classNames('', {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toogleLanguage}
            >
                {t('Язык')}
            </Button>
    );
};

export default LangSwitcher;