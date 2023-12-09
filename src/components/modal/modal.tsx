import { FC, Fragment } from 'react';
import { ModalProps } from './types';
import { Dialog, Transition } from '@headlessui/react';
import { Variant } from '../../utlis';
import { Button, ButtonSize } from '../button';
import { IconCancel, IconCheckmark, IconSize } from '../../elements';
import { Heading, HeadingSize } from '../typography';
import clsx from 'clsx';

export const Modal: FC<ModalProps> = ({
    isOpen = false,
    title,
    children,
    size,
    onSubmit,
    onCancel,
    labelSubmit,
    labelCancel,
    className,
}) => {
    const modalWidth = clsx(
        'w-full',
        {
            s: 'md:max-w-[465px]',
            m: 'md:max-w-[494px]',
        }[size],
    );
    const dialogPanelClasses = 'w-full rounded';
    const headerClasses = 'py-m px-l bg-primary-600 rounded-t-m flex';
    const mainClasses = clsx('w-full justify-between bg-white px-l pb-l', className);
    const footerClasses =
        'flex w-full flex-row justify-between gap-m pt-0 p-l rounded-b-m bg-white';
    const buttonClasses = 'hover:cursor-pointer basis-1/2';

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog onClose={onCancel}>
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
                                            onClick={onCancel}
                                            aria-label="close modal"
                                        >
                                            <IconCancel size={IconSize.M} />
                                        </button>
                                    </header>
                                )}

                                <main className={mainClasses}>{children}</main>

                                <footer className={footerClasses}>
                                    <Button
                                        className={buttonClasses}
                                        onClick={onCancel}
                                        name={'Cancel'}
                                        variant={Variant.SECONDARY}
                                        size={ButtonSize.M}
                                        Icon={IconCancel}
                                        label={labelCancel}
                                    />

                                    <Button
                                        className={buttonClasses}
                                        onClick={onSubmit}
                                        name={'Save'}
                                        variant={Variant.PRIMARY}
                                        size={ButtonSize.M}
                                        Icon={IconCheckmark}
                                        label={labelSubmit}
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
