import { GraduationCap } from 'lucide-react';
import { useState } from 'react';
import AdminLayout from '@/layouts/admin-layout';
import ProfessorDetail from '@/components/dashboard/professor/professor-detail';
import ProfessorTable from '@/components/dashboard/professor/professor-table';
import ConfirmationModal from '@/components/dashboard/professor/confirmation-modal';

export const initialProfessor = [
    {
        id: '1',
        first_name: 'Thomas',
        last_name: 'Dupont',
        email: 'thomas.dupont@example.com',
        phone_number: '06 12 34 56 78',
        professor_id: 'STU2025001',
        level: 'Terminale',
        class: 'TERMINAL A',
        gender: 'Masculin',
        birthday: '2007-05-12',
        guardian_first_name: 'Marc',
        guardian_last_name: 'Dupont',
        guardian_phone: '06 98 76 54 32',
        guardian_email: 'marc.dupont@example.com',
    },
    {
        id: '2',
        first_name: 'Sophie',
        last_name: 'Martin',
        email: 'sophie.martin@example.com',
        phone_number: '06 23 45 67 89',
        professor_id: 'STU2025002',
        level: 'Première',
        class: 'PREMIÈRE L',
        gender: 'Féminin',
        birthday: '2008-03-21',
        guardian_first_name: 'Marie',
        guardian_last_name: 'Martin',
        guardian_phone: '06 87 65 43 21',
        guardian_email: 'marie.martin@example.com',
    },
    {
        id: '3',
        first_name: 'Lucas',
        last_name: 'Bernard',
        email: 'lucas.bernard@example.com',
        phone_number: '06 34 56 78 90',
        professor_id: 'STU2025003',
        level: 'Terminale',
        class: 'TERMINAL A',
        gender: 'Masculin',
        birthday: '2007-08-17',
        guardian_first_name: 'Pierre',
        guardian_last_name: 'Bernard',
        guardian_phone: '06 76 54 32 10',
        guardian_email: 'pierre.bernard@example.com',
    },
    {
        id: '4',
        first_name: 'Emma',
        last_name: 'Petit',
        email: 'emma.petit@example.com',
        phone_number: '06 45 67 89 01',
        professor_id: 'STU2025004',
        level: 'Seconde',
        class: 'TA501',
        gender: 'Féminin',
        birthday: '2009-01-05',
        guardian_first_name: 'Anne',
        guardian_last_name: 'Petit',
        guardian_phone: '06 65 43 21 09',
        guardian_email: 'anne.petit@example.com',
    },
    {
        id: '5',
        first_name: 'Gabriel',
        last_name: 'Robert',
        email: 'gabriel.robert@example.com',
        phone_number: '06 56 78 90 12',
        professor_id: 'STU2025005',
        level: 'Première',
        class: 'PREMIÈRE L',
        gender: 'Masculin',
        birthday: '2008-11-30',
        guardian_first_name: 'Jean',
        guardian_last_name: 'Robert',
        guardian_phone: '06 54 32 10 98',
        guardian_email: 'jean.robert@example.com',
    },
];

export interface Professor {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    professor_id: string;
    level: string;
    class: string;
    gender: string;
    birthday: string;
    guardian_first_name: string;
    guardian_last_name: string;
    guardian_phone: string;
    guardian_email: string;
}

export default function ProfessorPage() {
    const [professors, setprofessors] = useState<Professor[]>(initialProfessor);
    const [selectedprofessor, setSelectedprofessor] = useState<Professor | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [professorToDelete, setprofessorToDelete] = useState<string | null>(null);

    const handleViewProfessor = (professor: Professor) => {
        setSelectedprofessor(professor);
    };

    const handleEditProfessor = (professor: Professor) => {
        // In a real application, this would open an edit form
        console.log('Edit professor:', professor);
    };

    const handleDeleteConfirmation = (professorId: string) => {
        setprofessorToDelete(professorId);
        setShowDeleteModal(true);
    };

    const handleDeleteProfessor = () => {
        if (professorToDelete) {
            setprofessors(professors.filter((professor) => professor.id !== professorToDelete));
            setShowDeleteModal(false);
            setprofessorToDelete(null);
        }
    };

    const handleAddProfessor = () => {
        // In a real application, this would open a form to add a new professor
        console.log('Add new professor');
    };

    const handleBackToList = () => {
        setSelectedprofessor(null);
    };

    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100">
                <header className="bg-[#1E3A8A] shadow">
                    <div className="mx-auto flex max-w-7xl items-center px-4 py-4 sm:px-6 lg:px-8">
                        <GraduationCap className="mr-3 h-8 w-8 text-white" />
                        <h1 className="text-xl font-bold text-white">Gestion des Professeurs</h1>
                    </div>
                </header>

                <main className="mx-auto max-w-7xl py-6 sm:px-2 lg:px-4">
                    {selectedprofessor ? (
                        <ProfessorDetail professor={selectedprofessor} onBack={handleBackToList} />
                    ) : (
                        <ProfessorTable
                            professors={professors}
                            onViewProfessor={handleViewProfessor}
                            onEditProfessor={handleEditProfessor}
                            onDeleteProfessor={handleDeleteConfirmation}
                            onAddProfessor={handleAddProfessor}
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