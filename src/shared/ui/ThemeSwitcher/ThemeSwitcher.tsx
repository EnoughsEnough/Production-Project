import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string
}
const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {
        className = '',
    } = props;
    const { theme, toogleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toogleTheme}
        >
            {theme === 'light' ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
