export interface TabsProps {
    listTabs: Array<string>;
    isActive: number;
    onTabSwitch: (index: number) => void;
}
