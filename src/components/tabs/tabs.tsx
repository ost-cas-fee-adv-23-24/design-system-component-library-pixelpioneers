import { FC, useState } from 'react';
import { TabsProps } from './types';
import { motion } from 'framer-motion';
import { Label, LabelSize } from '../typography';
import clsx from 'clsx';

export const Tabs: FC<TabsProps> = ({ listTabs }) => {
    const [activeItem, setActiveItem] = useState(0);
    const [hoverItem, setHoverItem] = useState<number | undefined>(undefined);

    const tabListClasses =
        'flex flex-row justify-between list-none items-center bg-slate-200 p-2xs rounded-s';
    // const tabItemClasses =
    ('w-full flex cursor-pointer rounded-xs whitespace-nowrap px-base py-[10px] focus:outline-none border-none outline-none transition-all ease-in-out duration-400');
    const labelClasses = (index: number) =>
        clsx(
            'relative whitespace-nowrap',
            index === activeItem ? 'text-primary-600' : 'text-secondary-600 hover:text-slate-800',
        );
    return (
        <div className="w-full">
            <ol className={tabListClasses}>
                {listTabs.map((listTab, index) => {
                    const isActive = index === activeItem;
                    const hoverRight = hoverItem !== undefined && hoverItem > activeItem;
                    const hoverLeft = hoverItem !== undefined && hoverItem < activeItem;
                    return (
                        <motion.li
                            className={isActive || index === activeItem - 1 ? '' : ''}
                            whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
                            key={listTab.label}
                        >
                            <button
                                onClick={() => {
                                    setActiveItem(index);
                                    listTab.onClick();
                                }}
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
                                            ' absolute bottom-0 left-0 right-0 top-0 rounded-xs bg-white',
                                            hoverRight && 'w-[calc(100%+10px)]',
                                            hoverLeft && 'ml-[-10px] w-[calc(100%+10px)]',
                                        )}
                                    />
                                )}
                                {isActive ? (
                                    <Label
                                        text={listTab.label}
                                        size={LabelSize.L}
                                        className={labelClasses(index)}
                                    />
                                ) : (
                                    <motion.div
                                        onHoverStart={() => setHoverItem(index)}
                                        onHoverEnd={() => setHoverItem(undefined)}
                                    >
                                        <Label
                                            text={listTab.label}
                                            size={LabelSize.L}
                                            className={labelClasses(index)}
                                        />
                                    </motion.div>
                                )}
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
