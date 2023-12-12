import { Wording } from './types';

export const generateLabel = (amount: number, label: Wording) => {
    return amount > 0 ? `${amount} ${amount === 1 ? label.singular : label.plural}` : label.zero;
};
