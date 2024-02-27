import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import Button from "shared/ui/Button/Button";
import ThemeSwitcher from "shared/ui/ThemeSwitcher/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";
interface SidebarProps {
    className?: string;
}
const Sidebar = (props: SidebarProps) => {
    const {
        className
    } = props;
    const [collapsed, setCollapsed] = useState(false)

    const onToogle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button onClick={onToogle}>Toogle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};

export default Sidebar;