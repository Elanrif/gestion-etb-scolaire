import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { SharedData } from '@/types';
import { toast } from 'react-toastify';
import { Note } from '@/types/models';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import NoteDetail from '@/components/dashboard/note/note-detail';
import AppLayout from '@/layouts/app-layout';
import NoteList from '@/components/account/note/note.list';
interface PageProps {
    notes: Note[];
    [key: string]: Note[] ; // Signature d'index requise
}

export default function NoteIndexPage() {
    const { notes } = usePage<PageProps>().props;
    const [selectedNote, setSelectedNote] = useState<Note| null>(null);
    const { flash } = usePage<SharedData>().props;
    
      useEffect(() => {
            
            if (flash.success) {
                toast.success(flash.success);
            }
        }, [flash.success]);
        
    const handleViewNote = (note: Note) => {
        setSelectedNote(note);
    };

    const handleBackToList = () => {
        setSelectedNote(null);
    }; 


    return (
        <AppLayout>
            <div className="min-h-screen bg-gray-100">
                <HeaderDashboard title='Gestion des notes'/>

                <main className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
                    {selectedNote ? (
                        <NoteDetail note={selectedNote} onBack={handleBackToList} />
                    ) : (
                        <NoteList
                            notes={notes}
                            onViewNote={handleViewNote}
                        />
                    )}
                </main>
            </div>
        </AppLayout>
    );
}