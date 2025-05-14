import React from 'react';
import { X } from 'lucide-react';

interface ActiveAccountModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
}

const ActiveAccountModal: React.FC<ActiveAccountModalProps> = ({
    show,
    onClose,
    onConfirm,
    title = 'Confirmer l’action',
    message = 'Êtes-vous sûr de vouloir continuer ?',
    confirmText = 'Confirmer',
    cancelText = 'Annuler',
}) => {
    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50" onClick={onClose} />
            <div className="relative z-50 w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">{message}</p>
                    </div>
                </div>
                <div className="mt-5 flex justify-end space-x-3">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2"
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white hover:bg-[#1E3A8A]/90 focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ActiveAccountModal;
