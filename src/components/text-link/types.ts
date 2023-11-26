import { AnchorHTMLAttributes } from 'react';

export type TextLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    label: string;
    link: string;
};
