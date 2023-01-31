import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";

//
//
//
//
//
//

const MenuTarget: React.FC<PropsWithChildren> = ({ children }) => {
    const menuTargetRef = useRef<HTMLDivElement>(null);

    const onClickMenuTarget = () => {
        menuTargetRef.current?.parentNode
            ?.querySelector(".menu-dropdown")
            ?.classList.toggle("invisible");
    };

    useEffect(() => {
        menuTargetRef.current?.firstElementChild?.addEventListener(
            "click",
            onClickMenuTarget
        );

        return () => {
            menuTargetRef.current?.firstElementChild?.removeEventListener(
                "click",
                onClickMenuTarget
            );
        };
    }, []);

    return (
        <div className="w-min h-min rounded" ref={menuTargetRef}>
            {children}
        </div>
    );
};

//
//
//
//
//

interface MenuItemProps {
    children: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children }) => {
    return (
        <div className="w-full min-w-max flex py-2 px-2.5 hover:bg-gray-150 cursor-pointer rounded">
            <div>.</div>
            <div>{children}</div>
            <div>.</div>
        </div>
    );
};

//
//
//
//
//

const MenuLabel: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className="text-sm">{children}</div>;
};

//
//
//
//
//

interface MenuDropdownProps {
    children: React.ReactNode;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ children }) => {
    return (
        <div
            className={`menu-dropdown min-w-full bg-white absolute rounded-md top-full p-1 right-0 border border-gray-300 shadow-lg invisible`}
        >
            {children}
        </div>
    );
};

//
//
//
//
//

type MenuComponents = React.FunctionComponent<PropsWithChildren> & {
    Target: React.FC<PropsWithChildren>;
    Item: React.FC<MenuItemProps>;
    Label: React.FC<PropsWithChildren>;
    DropDown: React.FC<MenuDropdownProps>;
};

const Menu: MenuComponents = ({ children }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const onClickOutsideMenuTarget = () => {
        menuRef.current
            ?.querySelector(".menu-dropdown")
            ?.classList.add("invisible");
    };

    useClickAway(menuRef, onClickOutsideMenuTarget);

    // const onClickOutsideMenuTarget = () => {
    //   menuTargetRef.current?.parentElement?.classList.add("invisible");
    // };
    // useClickAway(menuTargetRef, onClickOutsideMenuTarget);
    return (
        <div ref={menuRef} className="relative w-min h-min">
            {children}
        </div>
    );
};
Menu.Target = MenuTarget;
Menu.Item = MenuItem;
Menu.Label = MenuLabel;
Menu.DropDown = MenuDropdown;

export default Menu;
