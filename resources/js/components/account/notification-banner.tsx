'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, X } from 'lucide-react';

interface NotificationBannerProps {
    message: string;
    onDismiss: () => void;
    onEdit: () => void;
}
// const message_demo = "Certaines de vos informations semblent être incomplètes ou incorrectes. Veuillez mettre à jour votre profil pour assurer l'exactitude de vos données"
export default function NotificationBanner({ onDismiss, onEdit, message }: NotificationBannerProps) {
    return (
        <div className='mx-auto max-w-7xl'>
            <Alert variant="destructive" className="mb-6 bg-amber-100 text-amber-800">
                <AlertCircle className="h-5 w-5" />
                <div className="flex-1">
                    <AlertTitle className='text-slate-800 mb-2'>Informations incomplètes</AlertTitle>
                    <AlertDescription className='text-slate-800'>{message}</AlertDescription>
                </div>
                <div className="flex space-x-2 mt-3 ml-7">
                    <Button variant="outline" size="sm" className="border-amber-800 text-amber-800 hover:bg-amber-100" onClick={onEdit}>
                        Modifier
                    </Button>
                    <Button variant="ghost" size="sm" className="text-amber-800 hover:bg-amber-100" onClick={onDismiss}>
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </Alert>
        </div>
    );
}
