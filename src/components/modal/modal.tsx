import { FC, Fragment, useEffect, useRef } from 'react';
import { InitialElement, ModalProps } from './types';
import { Dialog, Transition } from '@headlessui/react';
import { Variant } from '../../utlis';
import { Button, ButtonSize } from '../button';
import { IconCancel, IconCheckmark, IconSize } from '../../elements';
import { Heading, HeadingSize } from '../typography';
import clsx from 'clsx';
import { ModalSettingsTemplate } from './main/settings';
import { ContentVariant } from './types';

export const Modal: FC<ModalProps> = ({
    isOpen = false,
    title,
    children,
    size,
    onActionPrimary,
    onActionSecondary,
    buttonLabelPrimary,
    buttonLabelSecondary,
    className,
    variant,
    initial,
}) => {
    // Initial focus Input
    const initialFocusInputRef = useRef(null);
    console.log(initialFocusInputRef);

    // Initial focus Button
    const initalFocusButtonRef = useRef(null);
    console.log(initalFocusButtonRef);

    useEffect(() => {
        if (isOpen) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            initialFocusInputRef.current?.focus();
        }
    }, [isOpen]);

    const modalWidth = clsx(
        'w-full',
        {
            s: 'md:max-w-[400px]',
            m: 'md:max-w-[600px]',
        }[size],
    );
    const dialogPanelClasses = 'w-full rounded';
    const headerClasses = 'py-m px-l bg-primary-600 rounded-tl-s rounded-tr-s flex';
    const mainClasses = clsx('w-full justify-between bg-white px-l pb-l', className);
    const footerClasses =
        'flex w-full flex-row justify-between gap-l pt-xs p-l rounded-bl-s rounded-br-s bg-white';
    const buttonClasses = 'hover:cursor-pointer basis-1/2';

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                initialFocus={
                    initial === InitialElement.INPUT ? initialFocusInputRef : initalFocusButtonRef
                }
                onClose={onActionSecondary}
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
                    <div className={modalWidth}>
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
                                    {variant === ContentVariant.SETTINGS && (
                                        <ModalSettingsTemplate
                                            ref={initialFocusInputRef}
                                            formClasses="[&_.wrap-input]:pb-s [&_.wrap-label]:pb-s"
                                            labelClasses="w-full inline-flex pt-l"
                                        />
                                    )}
                                    {variant === null || (ContentVariant.UPLOAD && children)}
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
                                        ref={initalFocusButtonRef}
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
                </div>
            </Dialog>
        </Transition>
    );
};
