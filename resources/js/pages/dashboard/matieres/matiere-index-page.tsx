import { useEffect, useState } from 'react';
import ConfirmationModal from '@/components/dashboard/confirmation-modal';
import AdminLayout from '@/layouts/admin-layout';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import { router, usePage } from '@inertiajs/react';
import { Matiere} from '@/types/models';
import { toast } from 'react-toastify';
import { SharedData } from '@/types';
import MatiereDetail from '@/components/dashboard/matiere/matiere-detail';
import MatieretList from '@/components/dashboard/matiere/matiere-list';


interface PageProps {
    matieres:Matiere[];
    [key: string]: Matiere[] ; // Signature d'index requise
}

export default function MatiereIndexPage() {
    const { matieres} = usePage<PageProps>().props;
    const [selectedMatiere, setSelectedMatiere] = useState<Matiere | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [matiereToDelete, setMatiereToDelete] = useState<number | null>(null);
    const { flash } = usePage<SharedData>().props;
    useEffect(() => {
        
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);
        
    const handleViewMatiere = (matiere: Matiere) => {
        setSelectedMatiere(matiere);
    };

    const handleDeleteConfirmation = (matiereId: number) => {
        setMatiereToDelete (matiereId);
        setShowDeleteModal(true);
    };

    const handleDeleteMatiere = () => {
        if (matiereToDelete) {
            router.delete(route('dashboard.matieres.destory',matiereToDelete))
            setShowDeleteModal(false);
            setMatiereToDelete(null);
        }
    };

    const handleBackToList = () => {
        setSelectedMatiere(null);
    };

    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100">
                <HeaderDashboard title='Gestion des matières'/>

                <main className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
                    {selectedMatiere ? (
                        <MatiereDetail matiere={selectedMatiere} onBack={handleBackToList} />
                    ) : (
                        <MatieretList
                        matieres={matieres}
                            onViewMatiere={handleViewMatiere}
                            onDeleteMatiere={handleDeleteConfirmation}
                        />
                    )}
                </main>

                <ConfirmationModal
                    isOpen={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteMatiere}
                    title="Confirmation de suppression"
                    message="Êtes-vous sûr de vouloir supprimer cette matière ? Cette action est irréversible."
                    confirmLabel="Supprimer"
                    cancelLabel="Annuler"
                    isDestructive={true}
                />
            </div>
        </AdminLayout>
    );
}