import NotificationBanner from '@/components/account/notification-banner';
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
    console.log('data : ', data);
    const [showNotification, setShowNotification] = useState(!!data?.student?.message);
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);

    const handleDismissNotification = () => {
        //setShowNotification(false);
        setShowNotification(true);
    };

    const handleEditProfile = () => {
        setShowNotification(true);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accueil" />

            <div className="px-3">
                {showNotification && (
                    <NotificationBanner message={data?.student?.message as string} onDismiss={handleDismissNotification} onEdit={handleEditProfile} />
                )}

                {!data?.student?.is_validated && <SkeletonAccount />}
            </div>
        </AppLayout>
    );
}
