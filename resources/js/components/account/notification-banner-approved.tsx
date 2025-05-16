'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { student_key } from '@/types/models/shared.data';
import { AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NotificationBannerProps {
    message?: string;
}

const defaultMessage = 'Votre compte a été approuvé. Vous pouvez maintenant accéder à toutes les fonctionnalités de la plateforme.';

export default function NotificationBannerApproved({ message = defaultMessage }: NotificationBannerProps) {
    const [isVisible, setIsVisible] = useState(false);

    console.log('banner keys : ', localStorage.getItem(student_key));
    useEffect(() => {
        const isDismissed = localStorage.getItem(student_key) === 'true';
        setIsVisible(!isDismissed);
    }, []);

    const handleDismiss = () => {
        localStorage.setItem(student_key, 'true');
        setIsVisible(false);
    };

    if (!isVisible === true) return null;

    const scheme = {
        name: 'Soothing Teal',
        alertBg: 'bg-teal-50',
        alertText: 'text-teal-900',
        titleText: 'text-teal-800',
        descText: 'text-teal-700',
        buttonBorder: 'border border-teal-600',
        buttonText: 'text-teal-600',
        buttonHover: 'hover:bg-teal-100',
    };

    return (
        <div className="mx-auto max-w-4xl">
                    <Alert variant="destructive" className={`mb-6 ${scheme.alertBg} ${scheme.alertText} rounded-lg shadow-sm`}>
                        <AlertCircle className="h-5 w-5" />
                        <div className="flex-1">
                            <AlertTitle className={`mb-2 ${scheme.titleText} font-semibold`}>Message de l'administrateur</AlertTitle>
                            <AlertDescription className={`mb-2 ${scheme.descText} font-semibold`}>{message}</AlertDescription>
                        </div>
                        <div className="mt-3 ml-7 flex space-x-2" onClick={handleDismiss}>
                            <Button
                                variant="outline"
                                size="sm"
                                className={`${scheme.buttonBorder} ${scheme.buttonText} ${scheme.buttonHover}`}
                            >
                                Fermer
                            </Button>
                        </div>
                    </Alert>
                </div>
    );
}
