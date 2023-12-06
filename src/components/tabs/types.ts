export type TabsProps = {
    tabs: Tab[];
    activeTabIndex: number;
};

export type Tab = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

export type TabsContext = {
    id: string;
    selectedIndex: number;
    hoverOnIndex: number | undefined;
};
