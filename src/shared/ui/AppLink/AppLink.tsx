import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';
import { ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
interface AppLinkProps extends LinkProps {
  className?: string
  children?: ReactNode
  theme?: AppLinkTheme
}
const AppLink = (props: AppLinkProps) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
    } = props;

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
            {children}
        </Link>
    );
};

export default AppLink;
