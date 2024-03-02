import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}
const PageLoader = (props: PageLoaderProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
