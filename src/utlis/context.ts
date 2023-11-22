import { LikeContext, FileUploadContext } from '../components';

export const defaultLikeContext = (amount: number, isLiked: boolean): LikeContext => ({
    actualAmount: amount,
    isLikedNow: isLiked,
    justLiked: false,
});

export const defaultObserveFileUploadContext = (): FileUploadContext => ({
    isDragIsOver: false,
    isValidFileSize: true,
    isValidFileType: true,
});
