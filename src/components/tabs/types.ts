import { v4 as uuid } from 'uuid';

export type TabsProps = {
    tabs: Tab[];
    activeTabIndex: number;
};

export type Tab = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
};

export type TabsState = {
    id: string;
    selectedIndex: number;
    hoverOnIndex: number | undefined;
};

export const defaultTabsState = (activeTabIndex: number): TabsState => ({
    id: uuid(),
    selectedIndex: activeTabIndex,
    hoverOnIndex: undefined,
});
