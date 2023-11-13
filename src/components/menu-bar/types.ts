export interface MenuBarProps {
    navBgColor?: string;
    alignment?: Alignment;
    onClick?: () => void;
    className?: string;
    borderActive?: boolean;
}

export enum Alignment {
    LEFT = 'left',
    RIGHT = 'right',
}
