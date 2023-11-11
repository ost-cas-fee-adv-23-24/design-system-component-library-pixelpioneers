export interface MenuBarProps {
    bgColor?: string;
    alignment?: Alignment;
    onClick?: () => void;
}

export enum Alignment {
    LEFT = 'justify-start',
    RIGHT = 'justify-end',
}
