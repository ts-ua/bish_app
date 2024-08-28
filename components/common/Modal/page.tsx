import React, { ReactNode, useState } from 'react';

interface ModalProps {
    isVisible: boolean;
    setSelectedLocation: (item: any) => void;
    onClose: () => void;
    children: ReactNode;
    data: any;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, data, setSelectedLocation, children }) => {
    if (!isVisible) return null;
    const [selected, setSelected] = useState(0);
    const handleRadioChange = (item: any, index: number) => {
        setSelectedLocation(item);
        setSelected(index);
        onClose();
    };

    return (
        <>
            <div className="fixed inset-0 bg-gray-50 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative max-h-screen overflow-y-auto opacity-85">
                    <div className="mb-4 rounded-3xl">
                        <div className="flexBetween pb-2 border border-gray-50">
                            <h2 className="text-sm">Select Address</h2>
                            <input
                                type="radio"
                                name="location"
                                className="mr-2"
                            />
                        </div>
                        <div className="pb-4 border-gray-500">
                            {data.map((item: any, index: number) => (
                                <div key={index} className="flex justify-between items-center py-2">
                                    <label htmlFor={`location-${index}`} className="text-sm">
                                        {item.summaryline}
                                    </label>
                                    <input
                                        type="radio"
                                        id={`location-${index}`}
                                        name="location"
                                        value={index}
                                        checked={selected === index}
                                        onChange={() => handleRadioChange(item, index)}
                                        className="mr-2"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Modal;
