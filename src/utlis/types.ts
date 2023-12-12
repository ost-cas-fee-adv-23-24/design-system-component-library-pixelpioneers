export enum Variant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    TERTIARY = 'tertiary',
    QUATERNARY = 'quaternary',
}

/**
 * Multiple words for labelling content in singular, plural and none
 */
export type Wording = {
    zero: string;
    singular: string;
    plural: string;
};

/**
 * Multiple words for labelling content in singular, plural, none and additional past participle
 */
export type WordingExtended = Wording & {
    pastParticiple: string;
};
