import { FC, forwardRef } from 'react';
import { ModalSettingsTemplateProps } from './types';
import { Label, LabelSize } from '../../../typography';
import { Input, InputType } from '../../../form';
import { IconEye } from '../../../../elements';
import clsx from 'clsx';

export const ModalSettingsTemplate: FC<ModalSettingsTemplateProps> = forwardRef(
    ({ formClasses, labelClasses }, ref) => {
        console.log('ref', ref);

        // Demo 2
        // const newRef = useRef(null);
        // useEffect(() => {
        //     newRef.current.focus();
        //     console.log(newRef.current);
        // });
        return (
            <form className={clsx('w-full', formClasses)}>
                <Label size={LabelSize.XL} className={labelClasses}>
                    Persönliche Einstellungen
                </Label>
                <Input
                    // ref={newRef}
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
    },
);
