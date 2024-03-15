import { HTMLAttributes } from 'react';

export type HintProps = Omit<HTMLAttributes<HTMLSpanElement>, 'className' | 'role'> & {
    status: HintVariant;
};

export enum HintVariant {
    HINT = 'hint',
    ERROR = 'error',
}
