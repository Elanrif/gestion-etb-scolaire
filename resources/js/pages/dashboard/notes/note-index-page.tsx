import AdminLayout from '@/layouts/admin-layout';
import { router, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { SharedData } from '@/types';
import { toast } from 'react-toastify';
import { Note } from '@/types/models';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import ConfirmationModal from '@/components/dashboard/confirmation-modal';
import NoteList from '@/components/dashboard/note/note-list';
interface PageProps {
    notes: Note[];
    [key: string]: Note[] ; // Signature d'index requise
}

export default function NoteIndexPage() {
    const { notes } = usePage<PageProps>().props;
    const [selectedNote, setSelectedNote] = useState<Note| null>(null);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [noteToDelete, setNoteToDelete] = useState<number | null>(null);
    const { flash } = usePage<SharedData>().props;

      useEffect(() => {
            
            if (flash.success) {
                toast.success(flash.success);
            }
        }, [flash.success]);
        
    const handleViewNote = (note: Note) => {
        setSelectedNote(note);
    };


    const handleDeleteConfirmation = (noteId: number) => {
        setNoteToDelete(noteId);
        setShowDeleteModal(true);
    };


    const handleDeleteNote = () => {
        if (noteToDelete) {
            router.delete(route('dashboard.notes.destory',noteToDelete))
            setShowDeleteModal(false);
            setNoteToDelete(null);
        }
    };


   /*  const handleBackToList = () => {
        setSelectedNote(null);
    }; */


    return (
        <AdminLayout>
            <div className="min-h-screen bg-gray-100">
                <HeaderDashboard title='Gestion des professeurs'/>


                <main className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
                    {selectedNote ? (
                       <> 
                       {/* <NoteDetail note={selectedNote} onBack={handleBackToList} /> */}
                       </>
                    ) : (
                        <NoteList
                            notes={notes}
                            onViewNote={handleViewNote}
                            onDeleteNote={handleDeleteConfirmation}
                        />
                    )}
                </main>


                <ConfirmationModal
                    isOpen={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteNote}
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