import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Student } from '@/types/models';
import { router } from '@inertiajs/react';

interface MessageStudentModalProps {
    show: boolean;
    onClose: () => void;
    student: Student;
}

const MessageStudentModal: React.FC<MessageStudentModalProps> = ({
    show,
    onClose,
    student,
}) => {
    const [message, setMessage] = useState('');

    if (!show) return null;

    const handleSend = () => {
        if (message.trim()) {
            router.post(route('dashboard.students.reject_account', student.id), { message });
            setMessage('');
            onClose();
        }
    };

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
                <div className="mt-3">
                    <h3 className="text-lg font-medium text-gray-900 text-center">
                        Envoyer un message à {student.first_name}
                    </h3>
                    <textarea
                        className="mt-4 w-full rounded-md border border-gray-300 p-2 text-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A]"
                        rows={5}
                        placeholder="Écris ton message ici..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className="mt-5 flex justify-end space-x-3">
                    <button
                        type="button"
                        className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                        onClick={onClose}
                    >
                        Annuler
                    </button>
                    <button
                        type="button"
                        className="rounded-md border border-transparent bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white hover:bg-[#1E3A8A]/90"
                        onClick={handleSend}
                    >
                        Envoyer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MessageStudentModal;
