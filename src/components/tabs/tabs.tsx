'use client';
import { FC, useState } from 'react';
import { defaultTabsState, TabsProps } from './types';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { Label, LabelSize, LabelType } from '../typography';
import clsx from 'clsx';

export const Tabs: FC<TabsProps> = ({ tabs, activeTabIndex = 0 }) => {
    const [{ id, selectedIndex, hoverOnIndex }, setState] = useState(
        defaultTabsState(activeTabIndex),
    );

    const tabListClasses =
        'flex flex-row justify-between list-none items-center bg-secondary-200 p-2xs rounded-s gap-[10px] w-fit h-fit';
    const tabClasses = (index: number) =>
        clsx(
            'group relative m-0 cursor-pointer rounded-xs border-none bg-transparent px-[13px] py-[10px] leading-none outline-none',
            index === selectedIndex
                ? 'text-primary-600'
                : 'text-secondary-600 hover:text-secondary-800',
            'disabled:cursor-not-allowed disabled:text-secondary-400',
        );
    const activeTabClasses = (extendedSide: 'left' | 'right' | 'none') =>
        clsx(
            'absolute bottom-0 left-0 right-0 top-0 rounded-xs bg-white',
            {
                left: 'ml-[-10px] w-[calc(100%+10px)]',
                right: 'w-[calc(100%+10px)]',
                none: '',
            }[extendedSide],
        );

    return (
        <Tab.Group
            selectedIndex={selectedIndex}
            onChange={(index) => {
                setState((prevState) => ({ ...prevState, selectedIndex: index }));
                tabs[index].onClick();
            }}
        >
            <Tab.List className={tabListClasses}>
                {tabs.map((listTab, index) => {
                    const extendedSide =
                        hoverOnIndex === undefined || hoverOnIndex === selectedIndex
                            ? 'none'
                            : hoverOnIndex > selectedIndex
                              ? 'right'
                              : 'left';
                    return (
                        <motion.span
                            key={`${id}-${index}`}
                            onHoverStart={() =>
                                setState((prevState) => ({ ...prevState, hoverOnIndex: index }))
                            }
                            onHoverEnd={() =>
                                setState((prevState) => ({ ...prevState, hoverOnIndex: undefined }))
                            }
                        >
                            <Tab
                                key={`tab-${id}-${index}`}
                                className={tabClasses(index)}
                                disabled={listTab.disabled}
                            >
                                <Label
                                    type={LabelType.SPAN}
                                    size={LabelSize.L}
                                    className={'relative z-10 whitespace-nowrap'}
                                >
                                    {listTab.label}
                                </Label>
                                {index === selectedIndex && (
                                    <motion.span
                                        key={`activeTab-${id}-${index}`}
                                        layoutId={`activeTab-${id}`}
                                        className={activeTabClasses(extendedSide)}
                                        aria-hidden={true}
                                    />
                                )}
                            </Tab>
                        </motion.span>
                    );
                })}
            </Tab.List>
        </Tab.Group>
    );
};
