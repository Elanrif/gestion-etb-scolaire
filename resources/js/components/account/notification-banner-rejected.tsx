'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Student } from '@/types/models';
import { Link } from '@inertiajs/react';
import { AlertCircle } from 'lucide-react';

interface NotificationBannerProps {
    message: string;
    student: Student;
}

const scheme = {
    name: 'Refined Red',
    alertBg: 'bg-red-100',
    alertText: 'text-red-900',
    titleText: 'text-red-800',
    descText: 'text-red-500',
    buttonBorder: 'border border-red-700',
    buttonText: 'text-red-700',
    buttonHover: 'hover:bg-red-50',
};
export default function NotificatinBannerRejected({ message, student }: NotificationBannerProps) {
    return (
        <div className="mx-auto max-w-4xl">
            <Alert variant="destructive" className={`mb-6 ${scheme.alertBg} ${scheme.alertText} rounded-lg shadow-sm`}>
                <AlertCircle className="h-5 w-5" />
                <div className="flex-1">
                    <AlertTitle className={`mb-2 ${scheme.titleText} font-semibold`}>Votre compte n'a pas reçu l'approbation requise. Pour toute information supplémentaire, veuillez contacter votre directeur.</AlertTitle>
                    <AlertDescription className={`mb-2 ${scheme.descText} font-semibold`}>{message}</AlertDescription>
                </div>
                <div className="mt-3 ml-7 flex space-x-2">
                    <Link href={route('account.user.index_student', student.id)} className="flex">
                        <Button variant="outline" size="sm" className={`${scheme.buttonBorder} ${scheme.buttonText} ${scheme.buttonHover}`}>
                            Modifier mes informations
                        </Button>
                    </Link>
                </div>
            </Alert>
        </div>
    );
}
