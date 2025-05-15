import { type BreadcrumbItem} from '@/types';
import { Head, usePage } from '@inertiajs/react';

import DeleteUser from '@/components/shared/delete-user';
import HeadingSmall from '@/components/shared/heading-small';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { StudentEditForm } from '@/components/account/settings/form/student-edit-form';
import { Classe, Student } from '@/types/models';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Modifier vos informations',
        href: '/settings/profile',
    },
];

interface PageProps {
    student: Student;
    classes: Classe[];
    [key: string]: Student | Classe[];
}


export default function StudentEdit() {
    
    const { student, classes } = usePage<PageProps>().props;

    console.log('student manage account', student);
      const student_form = {
        id: student.id,
        first_name: student.first_name,
        last_name: student.last_name,
        gender: student.gender,
        matricule:student.matricule,
        classe_id: student.classe?.id,
        level: student.level,
        relationship: student.relationship,
        guardian_first_name: student.guardian_first_name,
        guardian_last_name: student.guardian_last_name,
        guardian_email: student.guardian_email,
        guardian_phone_number: student.guardian_phone_number,
        
        /* user info */
        email: student.user?.email,
        birthday: student.user?.birthday,
        phone_number: student.user?.phone_number,
        address: student.user?.address,
      }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />
            {JSON.stringify(student)}
            <SettingsLayout student={student}>
                <div className="space-y-6">
                    <HeadingSmall title="Information du profil" description="Mettre à jour votre nom et votre nom." />

                    <StudentEditForm student={student_form} classes={classes} />
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
