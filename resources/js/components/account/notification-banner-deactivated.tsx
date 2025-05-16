'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Student } from '@/types/models';
import { Link } from '@inertiajs/react';
import { AlertCircle } from 'lucide-react';

interface NotificationBannerProps {
    student: Student;
    onDismiss: () => void;
}
export default function NotificatinBannerDeactivated({ onDismiss, student }: NotificationBannerProps) {
    
    const scheme = {
        name: 'Warm Amber',
        alertBg: 'bg-amber-50',
        alertText: 'text-amber-900',
        titleText: 'text-amber-800',
        descText: 'text-amber-700',
        buttonBorder: 'border border-amber-600',
        buttonText: 'text-amber-600',
        buttonHover: 'hover:bg-amber-100',
    };

    const message = (
        <div>
            Votre compte a été temporairement désactivé. Il sera réactivé par un administrateur après vérification. <br />
            Nous vous invitons à consulter régulièrement votre espace personnel pour suivre l'évolution de la situation.
        </div>
    );
    return (
        <div className="mx-auto max-w-4xl">
            <Alert variant="destructive" className={`mb-6 ${scheme.alertBg} ${scheme.alertText} rounded-lg shadow-sm`}>
                <AlertCircle className="h-5 w-5" />
                <div className="flex-1">
                    <AlertTitle className={`mb-2 ${scheme.titleText} font-semibold`}>Message de l'administrateur</AlertTitle>
                    <AlertDescription className={`mb-2 ${scheme.descText} font-semibold`}>{message}</AlertDescription>
                </div>
                <div className="mt-3 ml-7 flex space-x-2" onClick={onDismiss}>
                    <Link href={route('settings.edit', student.id)} className="flex">
                        <Button variant="outline" size="sm" className={`${scheme.buttonBorder} ${scheme.buttonText} ${scheme.buttonHover}`}>
                            Modifier mes informations
                        </Button>
                    </Link>
                </div>
            </Alert>
        </div>
    );
}
