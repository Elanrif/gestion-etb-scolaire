import { useEffect, useState } from 'react';
import ConfirmationModal from '@/components/dashboard/confirmation-modal';
import AdminLayout from '@/layouts/admin-layout';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import { router, usePage } from '@inertiajs/react';
import { Cour} from '@/types/models';
import { toast } from 'react-toastify';
import { SharedData } from '@/types';
import CourList from '@/components/dashboard/cours/cour-list';
import CourDetail from '@/components/dashboard/cours/cour-detail';



interface PageProps {
    cours: Cour[];
    [key: string]: Cour[] ; // Signature d'index requise
}

export default function CourIndexPage() {
    const { cours} = usePage<PageProps>().props;
    const [selectedCour, setSelectedCour] = useState<Cour | null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [courToDelete, setCourToDelete] = useState<number | null>(null);
    const { flash } = usePage<SharedData>().props;
    
    useEffect(() => {
        
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);
        
    const handleViewCour = (cour: Cour) => {
        setSelectedCour(cour);
    };

    const handleDeleteConfirmation = (courId: number) => {
        setCourToDelete (courId);
        setShowDeleteModal(true);
    };

    const handleDeleteCour = () => {
        if (courToDelete) {
            router.delete(route('dashboard.cours.destroy',courToDelete))
            setShowDeleteModal(false);
            setCourToDelete(null);
        }
    };

    const handleBackToList = () => {
        setSelectedCour(null);
    };

    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100">
                <HeaderDashboard title='Gestion des cours'/>

                <main className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
                    {selectedCour ? (
                        <CourDetail cour={selectedCour} onBack={handleBackToList} />
                    ) : (
                        <CourList
                            cours={cours}
                            onViewCour={handleViewCour}
                            onDeleteCour={handleDeleteConfirmation}
                        />
                    )}
                </main>

                <ConfirmationModal
                    isOpen={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteCour}
                    title="Confirmation de suppression"
                    message="Êtes-vous sûr de vouloir supprimer ce cours ? Cette action est irréversible."
                    confirmLabel="Supprimer"
                    cancelLabel="Annuler"
                    isDestructive={true}
                />
            </div>
        </AdminLayout>
    );
}