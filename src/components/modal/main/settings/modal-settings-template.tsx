import { FC, forwardRef } from 'react';
import { ModalSettingsTemplateProps } from './types';
import { Label, LabelSize } from '../../../typography';
import { Input, InputType } from '../../../form';
import { IconEye } from '../../../../elements';
import clsx from 'clsx';

export const ModalSettingsTemplate: FC<ModalSettingsTemplateProps> = forwardRef(
    ({ className }, ref) => {
        return (
            <form className={clsx('mb-l flex flex-col gap-l', className)}>
                <section className="flex flex-col gap-s">
                    <Label size={LabelSize.XL} className="inline-flex w-full">
                        Persönliche Einstellungen
                    </Label>
                    <Input
                        ref={ref}
                        onChange={() => {}}
                        placeholder="Name Vorname"
                        label="Name Vorname"
                        type={InputType.TEXT}
                        name="nameAndSurname"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="E-Mail Adresse"
                        label="E-Mail Adresse"
                        type={InputType.EMAIL}
                        name="email"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="Ortschaft"
                        label="Ortschaft"
                        type={InputType.TEXT}
                        name="city"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="Biografie"
                        label="Biografie"
                        type={InputType.TEXT}
                        name="biography"
                    />
                </section>

                <section className="flex flex-col gap-s">
                    <Label size={LabelSize.XL} className="inline-flex w-full">
                        Passwort ändern
                    </Label>
                    <Input
                        onChange={() => {}}
                        placeholder="Altes Passwort"
                        Icon={IconEye}
                        label="Altes Passwort"
                        type={InputType.PASSWORD}
                        name="oldPassword"
                    />
                    <Input
                        onChange={() => {}}
                        placeholder="Neues Passwort"
                        Icon={IconEye}
                        label="Neues Passwort"
                        type={InputType.PASSWORD}
                        name="newPassword"
                    />
                </section>
            </form>
        );
    },
);
