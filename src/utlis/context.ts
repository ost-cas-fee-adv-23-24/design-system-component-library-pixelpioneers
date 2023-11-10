import { LikeContext } from '../components';

export const defaultLikeContext = (amount: number, isLiked: boolean): LikeContext => ({
    actualAmount: amount,
    isLikedNow: isLiked,
    justLiked: false,
});
