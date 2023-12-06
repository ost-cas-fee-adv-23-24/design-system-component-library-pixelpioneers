import { FileUploadContext, LikeContext, TabsContext } from '../components';
import { v4 as uuid } from 'uuid';

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

export const defaultTabsContext = (activeTabIndex: number): TabsContext => ({
    id: uuid(),
    selectedIndex: activeTabIndex,
    hoverOnIndex: undefined,
});
