import ConfirmationModal from '@/components/dashboard/professor/confirmation-modal';
import HeaderDashboard from '@/components/dashboard/professor/header-dashboard';
import ProfessorDetail from '@/components/dashboard/professor/professor-detail';
import AdminLayout from '@/layouts/admin-layout';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Professor } from './professor-page';
import ProfessorList from '@/components/dashboard/professor/professor-list';






interface PageProps {
    professors: Professor[];
    [key: string]: Professor[] ; // Signature d'index requise
}


export default function ProfessorIndexPage() {
    const { professors } = usePage<PageProps>().props;
    const [selectedProfessor, setSelectedProfessor] = useState<Professor | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [professorToDelete, setProfessorToDelete] = useState<number | null>(null);


    const handleViewProfessor = (professor: Professor) => {
        setSelectedProfessor(professor);
    };


    const handleDeleteConfirmation = (professorId: number) => {
        setProfessorToDelete(professorId);
        setShowDeleteModal(true);
    };


    const handleDeleteProfessor = () => {
        if (professorToDelete) {
            router.delete(route('dashboard.professors.destory',professorToDelete))
            setShowDeleteModal(false);
            setProfessorToDelete(null);
        }
    };


    const handleBackToList = () => {
        setSelectedProfessor(null);
    };


    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100">
                <HeaderDashboard title='Gestion des Professeur'/>


                <main className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
                    {selectedProfessor ? (
                        <ProfessorDetail professor={selectedProfessor} onBack={handleBackToList} />
                    ) : (
                        <ProfessorList
                            professors={professors}
                            onViewProfessor={handleViewProfessor}
                            onDeleteProfessor={handleDeleteConfirmation}
                        />
                    )}
                </main>


                <ConfirmationModal
                    isOpen={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteProfessor}
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
