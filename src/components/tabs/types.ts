export type TabsProps = {
    tabs: Tab[];
    activeTabIndex: number;
};

export type Tab = {
    label: string;
    onClick: () => void;
};

export enum ExtendedSide {
    RIGHT = 'right',
    LEFT = 'left',
    NONE = 'none',
}
