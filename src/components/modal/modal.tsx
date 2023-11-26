import { FC, Fragment, useRef, useState } from 'react';
import { ModalProps } from './types';
import { Dialog, Transition } from '@headlessui/react';
import { Variant } from '../../utlis';
import { Button, ButtonSize } from '../button';
import { IconCancel, IconCheckmark, IconSize } from '../../elements';
import { Heading, HeadingSize } from '../typography';
import { MSettings } from './main/settings';

export const Modal: FC<ModalProps> = ({
    initialOpen = true,
    title,
    onActionPrimary,
    onActionSecondary,
    buttonLabelPrimary,
    buttonLabelSecondary,
}) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    onActionSecondary = () => setIsOpen(false);
    onActionPrimary = () => {};

    const initialFocusInputRef = useRef(null);

    const dialogPanelClasses = 'w-full max-w-sm rounded';
    const headerClasses = 'py-m px-l bg-primary-600 rounded-tl-s rounded-tr-s flex';
    const mainClasses = 'flex w-full flex-row justify-between gap-l px-l pb-l bg-white';
    const footerClasses =
        'flex w-full flex-row justify-between gap-l pt-xs p-l rounded-bl-s rounded-br-s bg-white';
    const buttonClasses = 'hover:cursor-pointer basis-1/2';

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                initialFocus={initialFocusInputRef}
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-40"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div
                        role="backgrop"
                        className="fixed inset-0 bg-primary-600"
                        aria-hidden="true"
                    />
                </Transition.Child>

                <div className="p-4 fixed inset-0 flex w-screen items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className={dialogPanelClasses}>
                            {title && (
                                <header className={headerClasses}>
                                    <Heading size={HeadingSize.H3} className="grow text-white">
                                        {title}
                                    </Heading>
                                    <button
                                        name="Cancel"
                                        className="fill-white hover:cursor-pointer"
                                        onClick={onActionSecondary}
                                    >
                                        <IconCancel size={IconSize.M} />
                                    </button>
                                </header>
                            )}

                            <main className={mainClasses}>
                                <MSettings
                                    formClasses="[&_.wrap-input]:pb-s [&_.wrap-label]:pb-s"
                                    labelClasses="w-full inline-flex pt-l"
                                    initialFocusInputRef={initialFocusInputRef}
                                />
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
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};
