import { classNames } from 'shared/lib/classNames/classNames';
import { type ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  theme?: ThemeButton
}
function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;
