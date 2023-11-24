import { FC, useRef, useState } from 'react';
import { ModalProps } from './types';
import { Dialog } from '@headlessui/react';
import { Variant } from '../../utlis';
import { Button, ButtonSize } from '../button';
import { IconCancel, IconCheckmark, IconEye } from '../../elements';
import { Label, LabelSize } from '../typography';
import { Input, InputType } from '../form';

export const Modal: FC<ModalProps> = ({
    initialOpen = true,
    title,
    onActionPrimary,
    onActionSecondary,
    buttonLabelPrimary,
    buttonLabelSecondary,
    // TODO: Replace Content
    // children,
}) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    onActionSecondary = () => setIsOpen(false);
    onActionPrimary = () => {};

    const initialFocusInputRef = useRef(null);

    const dialogPanelClasses = 'w-full max-w-sm rounded ';
    const dialogTitleClasses = 'w-full py-m px-l bg-primary-600 rounded-tl-s rounded-tr-s';
    const mainClasses = 'flex w-full flex-row justify-between gap-l px-l pb-l bg-white';
    const formClasses = '[&_.wrap-input]:pb-s [&_.wrap-label]:pb-s';
    const labelClasses = 'w-full inline-flex pt-l';
    const footerClasses =
        'flex w-full flex-row justify-between gap-l pt-xs p-l rounded-bl-s rounded-br-s bg-white';
    const buttonClasses = 'hover:cursor-pointer basis-1/2';

    return (
        <Dialog initialFocus={initialFocusInputRef} open={isOpen} onClose={() => setIsOpen(false)}>
            {/* The backdrop, rendered as a fixed sibling to the panel container */}
            <div className="fixed inset-0 bg-secondary-200" aria-hidden="true" />

            <div className="p-4 fixed inset-0 flex w-screen items-center justify-center">
                <Dialog.Panel className={dialogPanelClasses}>
                    {title && (
                        <Dialog.Title className={dialogTitleClasses}>
                            <Label size={LabelSize['2XL']} className="text-white">
                                {title}
                            </Label>
                        </Dialog.Title>
                    )}

                    <main className={mainClasses}>
                        <form className={formClasses}>
                            <Label size={LabelSize.XL} className={labelClasses}>
                                Persönliche Einstellungen
                            </Label>
                            {/* TODO: Need to check with team regarding ref issue */}
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
                    </main>

                    <footer className={footerClasses}>
                        <Button
                            className={buttonClasses}
                            onClick={onActionSecondary}
                            name={'Cancel'}
                            variant={Variant.SECONDARY}
                            size={ButtonSize.M}
                            Icon={IconCancel}
                            label={buttonLabelSecondary}
                        />

                        <Button
                            className={buttonClasses}
                            onClick={onActionPrimary}
                            name={'Save'}
                            variant={Variant.PRIMARY}
                            size={ButtonSize.M}
                            Icon={IconCheckmark}
                            label={buttonLabelPrimary}
                        />
                    </footer>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
};
