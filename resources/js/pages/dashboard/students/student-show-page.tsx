import StudentDetail from '@/components/dashboard/student/student-detail'
import AdminLayout from '@/layouts/admin-layout';
import { Student } from '@/types/models';
import { usePage } from '@inertiajs/react';

interface PageProps {
    student: Student;
    [key: string]: Student; // Signature d'index requise
}


export default function StudentShowPage() {
    const { student } = usePage<PageProps>().props;
  return (
    <AdminLayout>
        <StudentDetail student={student} />
    </AdminLayout>
  )
}
