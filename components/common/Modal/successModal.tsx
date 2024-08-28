import React, { ReactNode, useState } from 'react';

interface ModalProps {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;

}

const SuccessModal: React.FC<ModalProps> = ({ isVisible, onClose, children }) => {
    if (!isVisible) return null;

    return (
        <>
            <div className="fixed inset-0 bg-gray-50 flex justify-center items-center bg-opacity-75 text-white">
                <div className="bg-pink-50 rounded-sm shadow-lg max-w-md w-full relative max-h-screen overflow-y-auto text-center py-24 px-2">
                    <button className="absolute top-0 right-2 text-black text-2xl" onClick={onClose}>
                        &times;
                    </button>
                    {children}
                </div>
            </div>

        </>
    );
};

export default SuccessModal;
