import NotificationBannerApproved from '@/components/account/notification-banner-approved';
import NotificationBannerDeactivated from '@/components/account/notification-banner-deactivated';
import NotificationBannerRejected from '@/components/account/notification-banner-rejected';
import SkeletonAccount from '@/components/account/skeleton-account';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Accueil',
        href: '/dashboard',
    },
];

export default function Home() {
    const { flash, data } = usePage<SharedData>().props;
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);

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
                        message={message || 'Les informations que vous avez fournies sont erronées'}
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
                {showNotificationBanner()}

                {!data?.student?.is_validated && <SkeletonAccount />}
            </div>
        </AppLayout>
    );
}
