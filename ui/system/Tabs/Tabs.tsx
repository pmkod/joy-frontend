import React, {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useState,
} from "react";
import { isValidElementType } from "react-is";

type TabIndex = number;

type TabsPanelProps = {
    children: React.ReactNode;
    selectedTabIndex?: TabIndex;
};

type TabsTabProps = {
    icon?: React.ReactNode;
    children: React.ReactNode;
    selectedTabIndex?: TabIndex;
    setSelectedTabIndex?: React.Dispatch<SetStateAction<TabIndex>>;

    tabIndex?: TabIndex;
};
type TabsListProps = {
    children: React.ReactElement<TabsTabProps>[];
    selectedTabIndex?: TabIndex;
    setSelectedTabIndex?: React.Dispatch<SetStateAction<TabIndex>>;
};

type TabsBodyProps = {
    children: React.ReactElement<TabsPanelProps>[];
    selectedTabIndex?: TabIndex;
};

type TabsComponents = React.FC<{
    children: (
        | React.ReactElement<TabsListProps>
        | React.ReactElement<TabsBodyProps>
    )[];
}> & {
    List: React.FC<TabsListProps>;
    Tab: React.FC<TabsTabProps>;
    Body: React.FC<TabsBodyProps>;
    Panel: React.FC<TabsPanelProps>;
};
//
//
//
//
//

const TabsTab = ({
    children,
    icon,
    selectedTabIndex,
    setSelectedTabIndex,
    tabIndex,
}: TabsTabProps) => {
    const changeSelectedIndex = () => {
        if (setSelectedTabIndex !== undefined && tabIndex !== undefined) {
            setSelectedTabIndex(tabIndex);
        }
    };
    return (
        <div
            onClick={changeSelectedIndex}
            className={`h-10 cursor-pointer border-b-2 flex items-center justify-center gap-x-3 min-w-[120px] px-6 transition-colors ${
                selectedTabIndex === tabIndex
                    ? "border-b-slate-800 text-gray-800"
                    : "border-b-transparent text-slate-400 hover:border-b-slate-400"
            }`}
        >
            {icon && <div className="w-6 h-6">{icon}</div>}
            <div className="font-semibold">{children}</div>
        </div>
    );
};

const TabsList = ({
    children,
    selectedTabIndex,
    setSelectedTabIndex,
}: TabsListProps) => {
    return (
        <div className="flex border-b border-b-slate-200">
            {React.Children.map(
                children,
                (child: React.ReactElement<TabsTabProps>, index) => {
                    if (isValidElementType(TabsTab)) {
                        return React.cloneElement(child, {
                            selectedTabIndex,
                            setSelectedTabIndex,
                            tabIndex: index,
                            key: index,
                        });
                    }
                    return null;
                }
            )}
        </div>
    );
};

const TabsBody = ({ children, selectedTabIndex }: TabsBodyProps) => {
    return (
        <div className="mt-1">
            {React.Children.map(
                children,
                (child: React.ReactElement<TabsPanelProps>, index) => {
                    if (
                        isValidElementType(TabsPanel) &&
                        selectedTabIndex === index
                    ) {
                        return React.cloneElement(child, {
                            selectedTabIndex,
                            key: index,
                        });
                    }
                    return null;
                }
            )}
        </div>
    );
};
const TabsPanel = ({ children, selectedTabIndex }: TabsPanelProps) => {
    return <div className="">{children}</div>;
};

const Tabs: TabsComponents = ({ children }) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    return (
        <div>
            {React.Children.map(
                children,
                (
                    child: React.ReactElement<TabsListProps> &
                        React.ReactElement<TabsBodyProps>,
                    index
                ) => {
                    if (
                        isValidElementType(TabsList) ||
                        isValidElementType(TabsBody)
                    ) {
                        return React.cloneElement(child, {
                            selectedTabIndex,
                            setSelectedTabIndex: setSelectedTabIndex,
                            key: index,
                        });
                    }
                    return null;
                }
            )}
        </div>
    );
};

Tabs.List = TabsList;
Tabs.Tab = TabsTab;
Tabs.Body = TabsBody;
Tabs.Panel = TabsPanel;

export default Tabs;

//
//
//
//
//
//
//
//
//
