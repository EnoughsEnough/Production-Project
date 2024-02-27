import {classNames} from "shared/lib/classNames/classNames";
import cls from './Sidebar.module.scss'
import {useState} from "react";
import Button from "shared/ui/Button/ui/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
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
                {/*<LangSwitcher />*/}
            </div>
        </div>
    );
};

export default Sidebar;