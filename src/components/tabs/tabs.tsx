import { FC, useState } from 'react';
import { ExtendedSide, TabsProps } from './types';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { Label, LabelSize, LabelType } from '../typography';
import clsx from 'clsx';

export const Tabs: FC<TabsProps> = ({ tabs, activeTabIndex = 0 }) => {
    const [id] = useState(Math.random());
    const [selectedIndex, setSelectedIndex] = useState(activeTabIndex);
    const [hoverOnIndex, setHoverOnIndex] = useState<number | undefined>(undefined);

    const tabListClasses =
        'flex flex-row justify-between list-none items-center bg-slate-200 p-2xs rounded-s gap-[10px]';
    const tabClasses = (index: number) =>
        clsx(
            'bg-transparent group relative m-0 cursor-pointer rounded-xs border-none px-[13px] py-[10px] leading-none ring-primary-400 focus:outline-none focus:ring-2',
            index === selectedIndex
                ? 'text-primary-600'
                : 'text-secondary-600 hover:text-slate-800',
        );
    const activeTabClasses = (extendedSide: ExtendedSide) =>
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
                setSelectedIndex(index);
                tabs[index].onClick();
            }}
        >
            <Tab.List className={tabListClasses}>
                {tabs.map((listTab, index) => {
                    const extendedSide =
                        hoverOnIndex === undefined || hoverOnIndex === selectedIndex
                            ? ExtendedSide.NONE
                            : hoverOnIndex > selectedIndex
                              ? ExtendedSide.RIGHT
                              : ExtendedSide.LEFT;
                    return (
                        <motion.span
                            onHoverStart={() => setHoverOnIndex(index)}
                            onHoverEnd={() => setHoverOnIndex(undefined)}
                        >
                            <Tab key={index} className={tabClasses(index)}>
                                <Label
                                    type={LabelType.SPAN}
                                    size={LabelSize.L}
                                    className={'relative z-10 whitespace-nowrap'}
                                >
                                    {listTab.label}
                                </Label>
                                {index === selectedIndex && (
                                    <motion.span
                                        layoutId={`segmentedControlActive-${id}`}
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
