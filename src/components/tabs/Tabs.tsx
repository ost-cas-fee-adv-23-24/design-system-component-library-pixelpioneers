import React from 'react';
import { Tab } from '@headlessui/react';
import { TabsProps } from './types';
import { useState } from 'react';
import { classNames } from './utils';

export const Tabs = ({ listTabs = [], onClick }: TabsProps) => {
    console.log('listTab', listTabs);
    console.log(onClick);

    const [list] = useState(listTabs);

    const styleTabList =
        'flex flex-row justify-between items-center bg-slate-200 py-[4px] px-[5px] rounded-s';
    const styleTabItem =
        'w-full rounded-s whitespace-nowrap px-[20px] py-2.5 text-sm font-medium leading-5 ring-white ring-offset-3 ring-offset-white focus:outline-none focus:ring-3 border-none outline-none transition-all ease-in-out duration-400';

    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className={styleTabList}>
                    {list.map((category, i) => (
                        <Tab
                            key={`${category}+${i}`}
                            className={({ selected }) =>
                                classNames(
                                    styleTabItem,
                                    selected
                                        ? 'bg-white text-violet-600'
                                        : 'text-slate-600 hover:text-slate-800',
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    );
};
