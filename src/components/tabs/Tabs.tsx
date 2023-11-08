import React from 'react';
import { Tab } from '@headlessui/react';
import { TabsProps } from './types';
import { useState } from 'react';
import { Label } from '../typography/label/Label';
import { LabelSize } from '../typography/label';
import clsx from 'clsx';

export const Tabs = ({ listTabs = [], isActive = 0, onTabSwitch }: TabsProps) => {
    const [list] = useState(listTabs);
    const [selectedIndex, setSelectedIndex] = useState(isActive);

    onTabSwitch(selectedIndex);

    const styleTabList =
        'flex flex-row justify-between items-center bg-slate-200 py-2xs px-xs rounded-s';
    const styleTabItem =
        'w-full cursor-pointer rounded-s whitespace-nowrap px-m py-2xs focus:outline-none border-none outline-none transition-all ease-in-out duration-400';

    return (
        <div className="w-full">
            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <Tab.List className={styleTabList}>
                    {list.map((category, index) => (
                        <Tab
                            key={`${category}+${index}`}
                            className={() =>
                                clsx(
                                    styleTabItem,
                                    selectedIndex === index
                                        ? 'bg-white'
                                        : 'text-secondary-600 hover:text-secondary-800',
                                )
                            }
                        >
                            <Label
                                text={category}
                                size={LabelSize.L}
                                className={
                                    selectedIndex === index
                                        ? 'text-primary-600'
                                        : 'text-secondary-600 hover:text-slate-800'
                                }
                            />
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    );
};
