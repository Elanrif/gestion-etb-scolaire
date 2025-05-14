import StudentDetail from '@/components/dashboard/student/student-detail'
import AdminLayout from '@/layouts/admin-layout';
import { SharedData } from '@/types';
import { Student } from '@/types/models';
import { usePage } from '@inertiajs/react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

interface PageProps {
    student: Student;
    [key: string]: Student; // Signature d'index requise
}


export default function StudentShowPage() {
    const { student } = usePage<PageProps>().props;
    const { flash } = usePage<SharedData>().props;
        useEffect(() => {
            
            if (flash.success) {
                toast.success(flash.success);
            }
        }, [flash.success]);
  return (
    <AdminLayout>
        <StudentDetail student={student} />
    </AdminLayout>
  )
}
