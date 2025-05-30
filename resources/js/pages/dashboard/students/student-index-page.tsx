import { useEffect, useState } from 'react';
import ConfirmationModal from '@/components/dashboard/confirmation-modal';
import AdminLayout from '@/layouts/admin-layout';
import StudentList from '@/components/dashboard/student/student-list';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import { router, usePage } from '@inertiajs/react';
import { Student } from '@/types/models';
import { toast } from 'react-toastify';
import { SharedData } from '@/types';


interface PageProps {
    students: Student[];
    [key: string]: Student[] ; // Signature d'index requise
}

export default function StudentIndexPage() {
    const { students } = usePage<PageProps>().props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState<number | null>(null);
    const { flash } = usePage<SharedData>().props;
    useEffect(() => {
        
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);
        

    const handleDeleteConfirmation = (studentId: number) => {
        setStudentToDelete(studentId);
        setShowDeleteModal(true);
    };

    const handleDeleteStudent = () => {
        if (studentToDelete) {
            router.delete(route('dashboard.students.destory',studentToDelete))
            setShowDeleteModal(false);
            setStudentToDelete(null);
        }
    };

    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100">
                <HeaderDashboard title='Gestion des étudiants'/>

                <main className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
                    <StudentList
                        students={students}
                        onDeleteStudent={handleDeleteConfirmation}
                    />
                </main>

                <ConfirmationModal
                    isOpen={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteStudent}
                    title="Confirmation de suppression"
                    message="Êtes-vous sûr de vouloir supprimer cet étudiant ? Cette action est irréversible."
                    confirmLabel="Supprimer"
                    cancelLabel="Annuler"
                    isDestructive={true}
                />
            </div>
        </AdminLayout>
    );
}