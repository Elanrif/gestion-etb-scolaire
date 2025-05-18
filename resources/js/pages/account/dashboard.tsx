import NotificationBannerApproved from '@/components/account/notification-banner-approved';
import NotificationBannerDeactivated from '@/components/account/notification-banner-deactivated';
import NotificationBannerRejected from '@/components/account/notification-banner-rejected';
import SkeletonAccount from '@/components/account/skeleton-account';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Accueil',
        href: '/dashboard',
    },
];


export default function Dashboard() {
    const { flash, data } = usePage<SharedData>().props;
    const [showNotification, setShowNotification] = useState(!!data?.student?.message);
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);

    const handleDismissNotification = () => {
        setShowNotification(false);
    };

    const showNotificationBanner = () => {

        if (!data?.student) return null;

        const { is_validated, activation_status, message } = data.student;

        if (is_validated) {
            return <NotificationBannerApproved/>;
        }

        switch (activation_status) {
            case 'deactivated':
                return (
                    <NotificationBannerDeactivated
                    />
                );
            case 'rejected':
                return (
                    <NotificationBannerRejected
                        message={message || 'Veuillez corriger les informations de votre compte'}
                        onDismiss={handleDismissNotification}
                        student= {data.student}
                    />
                );
            default:
                return null;
        }
    };
            
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accueil" />

            <div className="px-3">
                {showNotification && showNotificationBanner()}

                {!data?.student?.is_validated && <SkeletonAccount />}
            </div>
        </AppLayout>
    );
}
