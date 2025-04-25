'use client';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Classe } from '@/types/models';
import { router } from '@inertiajs/react';
import { toast } from 'react-toastify';

interface DeleteConfirmDialogProps {
    open: boolean;
    data: Classe;
    onOpenChange: (open: boolean) => void;
    className: string;
}



export default function DeleteConfirmDialog({ open, onOpenChange, data, className }: DeleteConfirmDialogProps) {
    
    const handleDelete = async() => {
           try {
               await router.delete(route('dashboard.classes.destroy', data.id));
               toast.success('Classe supprimée avec succès !');
               onOpenChange(false); // Ferme le dialogue après suppression
           } catch (error) {
               toast.error('Échec de la suppression');
               console.error('Erreur lors de la suppression:', error);
           }
    };

    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer cette classe ?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Vous êtes sur le point de supprimer la classe <strong>{className}</strong>. Cette action est irréversible.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Annuler</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90 text-white">
                        Supprimer
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
