import HomeStudent from '@/components/account/home_student';
import NotificationBannerApproved from '@/components/account/notification-banner-approved';
import NotificationBannerDeactivated from '@/components/account/notification-banner-deactivated';
import NotificationBannerRejected from '@/components/account/notification-banner-rejected';
import SkeletonAccount from '@/components/account/skeleton-account';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, type SharedData } from '@/types';
import { Classe, Cour, Matiere, Professor, Student } from '@/types/models';
import { Head, usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Accueil',
        href: '/dashboard',
    },
];

/* interface PageProps {
    students: Student[];
    professors: Professor[];
    matieres: Matiere[];
    cours: Cour[];
    classes: Classe[];
    [key: string]: Student[] | Professor[] | Matiere [] | Cour[] | Classe[];
} */

export default function Home() {
    const { flash, data, students, professors, matieres, cours, classes } = usePage<SharedData & {
        students?: Student[];
        professors?: Professor[];
        matieres?: Matiere[];
        cours?: Cour[];
        classes?: Classe[];
    }>().props;
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);

    const showNotificationBanner = () => {
        if (!data?.student) return null;

        const { is_validated, activation_status, message } = data.student;

        if (is_validated) {
            return <NotificationBannerApproved />;
        }

        switch (activation_status) {
            case 'deactivated':
                return (
                    <NotificationBannerDeactivated />
                );
            case 'rejected':
                return (
                    <NotificationBannerRejected
                        message={message || 'Les informations que vous avez fournies sont erronées'}
                        student={data.student}
                    />
                );
            default:
                return null;
        }
    };

    /* const { students, professors, matieres, cours, classes } = usePage<PageProps>().props;
 */
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Accueil" />

            <div className="px-3">
                {showNotificationBanner()}

                {!data?.student?.is_validated && <SkeletonAccount />}
            </div>
            <div>
                <HomeStudent
                    students={students ?? []}
                    professors={professors ?? []}
                    matieres={matieres ?? []}
                    cours={cours ?? []}
                    classes={classes ?? []}
                />
            </div>
        </AppLayout>
    );
}