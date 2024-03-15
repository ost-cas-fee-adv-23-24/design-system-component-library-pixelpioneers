import { Wording } from './types';

export const generateLabel = (amount: number, label: Wording) =>
    amount > 0 ? `${amount} ${amount === 1 ? label.singular : label.plural}` : label.zero;
