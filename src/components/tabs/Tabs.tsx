import React from 'react';
import { Tab } from '@headlessui/react';
import { TabsProps } from './types';
import { useState } from 'react';
import { classNames } from './utils';

export const Tabs = ({ listTabs = [], onClick }: TabsProps) => {
    console.log('listTab', listTabs);
    console.log(onClick);

    const [list] = useState(listTabs);

    const styleTabList = 'flex bg-slate-200 py-[4px] px.[5px] rounded-md';
    const styleTabItem =
        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-offset-3 ring-offset-white focus:outline-none focus:ring-3 border-none outline-none transition-all ease-in-out duration-350';

    return (
        <div className="w-full">
            <Tab.Group>
                <Tab.List className={styleTabList}>
                    {Object.keys(list).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    styleTabItem,
                                    selected
                                        ? 'bg-white text-violet-600'
                                        : 'text-slate-800 hover:text-slate-600',
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(list).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={classNames(
                                'rounded-xl p-3 bg-white',
                                'ring-offset-blue-400 ring-white/60 ring-offset-2 focus:outline-none focus:ring-2',
                            )}
                        >
                            <ul>
                                {posts.map((post) => (
                                    <li
                                        key={post.id}
                                        className="rounded-md p-3 hover:bg-gray-100 relative"
                                    >
                                        <h3 className="leading-5 text-sm font-medium">
                                            {post.title}
                                        </h3>

                                        <ul className="mt-1 space-x-1 font-normal leading-4 text-gray-500 flex text-xs">
                                            <li>{post.date}</li>
                                            <li>&middot;</li>
                                            <li>{post.commentCount} comments</li>
                                            <li>&middot;</li>
                                            <li>{post.shareCount} shares</li>
                                        </ul>

                                        <a
                                            href="#"
                                            className={classNames(
                                                'inset-0 rounded-md absolute',
                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                                            )}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};
