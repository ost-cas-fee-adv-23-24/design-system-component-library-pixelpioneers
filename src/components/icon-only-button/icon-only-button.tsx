'use client';
import { Button, ButtonSize } from '../button';
import { Variant } from '../../utlis';
import { FC, forwardRef } from 'react';
import { IconButtonProps } from './types';

export const IconOnlyButton: FC<IconButtonProps> = forwardRef((props, ref) => (
    <Button size={ButtonSize.L} variant={Variant.SECONDARY} ref={ref} {...props} />
));
