export type TabsProps = {
    listTabs: ListTab[];
    isActive: number;
};

export type ListTab = {
    label: string;
    onClick: () => void;
};
