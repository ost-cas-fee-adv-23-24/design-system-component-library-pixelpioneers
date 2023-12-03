import { Button, ButtonSize } from '../button';
import { Variant } from '../../utlis';
import { FC } from 'react';
import { IconButtonProps } from './types';

export const IconOnlyButton: FC<IconButtonProps> = (props) => (
    <Button size={ButtonSize.L} variant={Variant.SECONDARY} {...props} />
);
