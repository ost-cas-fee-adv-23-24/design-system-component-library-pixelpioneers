export interface FieldHintProps {
    hintName: string;
    hintText: string | null | undefined;
    errorText: string | null | undefined;
    status: TextStatusVariant;
}

export enum TextStatusVariant {
    HINT = 'hint',
    ERROR = 'error',
}
