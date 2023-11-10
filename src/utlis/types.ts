export enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
}

export interface Wording {
    zero: string;
    singular: string;
    plural: string;
}

export interface WordingExtended extends Wording {
    pastParticiple: string;
}
