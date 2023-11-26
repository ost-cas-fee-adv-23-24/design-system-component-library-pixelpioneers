import { FC } from 'react';
import { MSettingsProps } from './types';
import { Label, LabelSize } from '../../../typography';
import { Input, InputType } from '../../../form';
import { IconEye } from '../../../../elements';

export const MSettings: FC<MSettingsProps> = ({
    formClasses,
    labelClasses,
    initialFocusInputRef,
}) => {
    return (
        <form className={formClasses}>
            <Label size={LabelSize.XL} className={labelClasses}>
                Persönliche Einstellungen
            </Label>
            <Input
                ref={initialFocusInputRef}
                onChange={() => {}}
                placeholder="Name Vorname"
                value=""
                label="Name Vorname"
                type={InputType.TEXT}
                name="nameAndSurname"
            />
            <Input
                onChange={() => {}}
                placeholder="E-Mail Adresse"
                value=""
                label="E-Mail Adresse"
                type={InputType.EMAIL}
                name="email"
            />
            <Input
                onChange={() => {}}
                placeholder="Ortschaft"
                value=""
                label="Ortschaft"
                type={InputType.PASSWORD}
                name="city"
            />
            <Input
                onChange={() => {}}
                placeholder="Biografie"
                value=""
                label="Biografie"
                type={InputType.TEXT}
                name="biography"
            />
            <Label size={LabelSize.XL} className={labelClasses}>
                Passwort ändern
            </Label>
            <Input
                onChange={() => {}}
                placeholder="Altes Passwort"
                value=""
                Icon={IconEye}
                label="Altes Passwort"
                type={InputType.PASSWORD}
                name="oldPassword"
            />
            <Input
                onChange={() => {}}
                placeholder="Neues Passwort"
                value=""
                Icon={IconEye}
                label="Neues Passwort"
                type={InputType.PASSWORD}
                name="newPassword"
            />
        </form>
    );
};
