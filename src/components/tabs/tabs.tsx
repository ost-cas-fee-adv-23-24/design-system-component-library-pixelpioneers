import { FC, useState } from 'react';
import { TabsProps } from './types';
// import { Label, LabelSize } from '../typography';
// import clsx from 'clsx';
import { motion } from 'framer-motion';
import { LabelSize } from '../typography/label/types';
import { Label } from '../typography/label/label';
import clsx from 'clsx';

export const Tabs: FC<TabsProps> = ({ listTabs }) => {
    const [activeItem, setActiveitem] = useState(0);

    const tabListClasses =
        'flex flex-row justify-between list-none items-center bg-slate-200 p-2xs rounded-s';
    // const tabItemClasses =
    ('w-full flex cursor-pointer rounded-xs whitespace-nowrap px-base py-[10px] focus:outline-none border-none outline-none transition-all ease-in-out duration-400');

    return (
        <div className="w-full">
            <ol className={tabListClasses}>
                {listTabs.map((category, index) => {
                    const isActive = index === activeItem;
                    return (
                        <motion.li
                            className={isActive || index === activeItem - 1 ? '' : ''}
                            whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
                            key={category}
                        >
                            <button
                                onClick={() => setActiveitem(index)}
                                type="button"
                                className={clsx(
                                    'bg-transparent relative m-0 border-none px-[30px] py-[7px] leading-none outline-none hover:cursor-pointer focus:cursor-pointer',
                                    isActive && 'group',
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="SegmentedControlActive"
                                        className={clsx(
                                            'z-1 absolute bottom-0 left-0 right-0 top-0 rounded-xs bg-white',
                                            !isActive && 'group-hover:[&:not(:hover)]:bg-black',
                                            // index === 0 && 'group-hover:transition-all group-hover:w-[calc(100%+10px)]',
                                            // index === 1 && 'group-hover:transition-all group-hover:left-[-10px]',
                                        )}
                                    />
                                )}
                                <Label
                                    text={category}
                                    size={LabelSize.L}
                                    className={`z-2 relative whitespace-nowrap ${
                                        index === activeItem
                                            ? 'text-primary-600'
                                            : 'text-secondary-600 hover:text-slate-800'
                                    }`}
                                />
                            </button>
                        </motion.li>
                    );
                })}
            </ol>
            {/* <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <Tab.List className={tabListClasses}>
                    {list.map((category, index) => (
                        <Tab
                            key={`${category}+${index}`}
                            className={() =>
                                clsx(
                                    tabItemClasses,
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
            </Tab.Group> */}
        </div>
    );
};
