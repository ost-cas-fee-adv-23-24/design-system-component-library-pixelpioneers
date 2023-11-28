export enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    QUATERNARY = 'quaternary',
}

export type Wording = {
    zero: string;
    singular: string;
    plural: string;
};

export type WordingExtended = Wording & {
    pastParticiple: string;
};
