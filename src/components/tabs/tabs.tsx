import { FC, useState } from 'react';
import { TabsProps } from './types';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Label, LabelSize } from '../typography';
import clsx from 'clsx';

export const Tabs: FC<TabsProps> = ({ listTabs }) => {
    const [activeItem, setActiveItem] = useState(0);
    const [hoverItem, setHoverItem] = useState<number | undefined>(undefined);
    const activeTabMotion = useMotionValue(0);
    const animateSpring = useSpring(activeTabMotion, { stiffness: 400, damping: 30, mass: 1 });

    const tabListClasses =
        'flex flex-row justify-between list-none items-center bg-slate-200 p-2xs rounded-s gap-[10px]';
    const labelClasses = (index: number) =>
        clsx(
            'relative z-10 whitespace-nowrap hover:cursor-pointer',
            index === activeItem ? 'text-primary-600' : 'text-secondary-600 hover:text-slate-800',
        );
    const buttonClasses = clsx(
        'bg-transparent relative m-0 border-none px-[13px] py-[10px] leading-none outline-none',
    );
    const activeTabClasses = (hoverRight: boolean, hoverLeft: boolean) =>
        clsx(
            'absolute bottom-0 left-0 right-0 top-0 rounded-xs bg-white',
            hoverRight && 'w-[calc(100%+10px)]',
            hoverLeft && 'ml-[-10px] w-[calc(100%+10px)]',
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
                            whileTap={isActive ? { scale: 0.95 } : { opacity: 0.6 }}
                            key={listTab.label}
                        >
                            <button
                                onClick={() => {
                                    setActiveItem(index);
                                    listTab.onClick();
                                }}
                                type="button"
                                className={buttonClasses}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="segmentedControlActive"
                                        className={activeTabClasses(hoverRight, hoverLeft)}
                                        style={{
                                            transform: `translateX(${animateSpring.get()}px)`,
                                        }}
                                    />
                                )}
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
                            </button>
                        </motion.li>
                    );
                })}
            </ol>
        </div>
    );
};
