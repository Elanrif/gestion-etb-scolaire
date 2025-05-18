'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

export default function NotificationBannerDeactivated() {
    
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
            </Alert>
        </div>
    );
}
