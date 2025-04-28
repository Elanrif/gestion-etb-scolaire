import { StudentEditForm } from '@/components/dashboard/student/forms/student-edit-form'
import AdminLayout from '@/layouts/admin-layout'
import { Student } from '@/types/models';
import { StudentForm } from '@/types/models/forms';
import { usePage } from '@inertiajs/react';

interface PageProps {
    student: Student;
    [key: string]: StudentForm; // Signature d'index requise
}


export default function StudentEditFormPage() {
  const { student } = usePage<PageProps>().props;
  return (
<AdminLayout>
        <StudentEditForm student={student}/>
    </AdminLayout>
  )
}