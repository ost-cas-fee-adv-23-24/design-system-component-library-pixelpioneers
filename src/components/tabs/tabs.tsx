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
    const labelClasses = (index: number) =>
        clsx(
            'relative whitespace-nowrap hover:cursor-pointer focus:cursor-pointer',
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
                                    'bg-transparent relative m-0 border-none px-[13px] py-[10px] leading-none outline-none',
                                    isActive && 'group',
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="segmentedControlActive"
                                        className={clsx(
                                            'absolute bottom-0 left-0 right-0 top-0 rounded-xs bg-white',
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
        </div>
    );
};
