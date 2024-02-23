import {MouseEvent, PropsWithChildren} from 'react';
import CloseIcon from '@/icons/CloseIcon';

type ModalOverlayProps = PropsWithChildren<{
    onClose: () => void;
    handleModalClick: (event: MouseEvent<HTMLDivElement>) => void;
}>

export default function ModalOverlay({children, handleModalClick, onClose}: ModalOverlayProps) {
    return (
        <div className={'fixed inset-0 bg-black/80 flex items-center justify-center'} onClick={onClose}>
            <div className={'bg-white px-4 py-10 w-full max-w-xl m-4 rounded max-h-full overflow-auto relative'}
                 onClick={handleModalClick}>
                {children}
                <CloseIcon onClick={onClose} className={'w-8 h-8 absolute top-2 right-2 cursor-pointer'}/>
            </div>
        </div>
    );
}
