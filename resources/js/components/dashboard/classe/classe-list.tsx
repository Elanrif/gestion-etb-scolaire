'use client';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Professor } from '@/types/models';
import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Pencil, PlusIcon, Trash2 } from 'lucide-react';
import { useState } from 'react';
import AddClassDialog from './add-class-dialog';
import DeleteConfirmDialog from './delete-confirm-dialog';
import EditClassDialog from './edit-class-dialog';

dayjs.extend(relativeTime);
dayjs.locale('fr');

// Type pour une classe
interface Classe {
    id: string;
    name: string;
    professorId: string;
    createdAt: string;
    updatedAt: string;
    [key: string]: string;
}

interface PageProps {
    professors: Professor[];
    classes: Classe[];
    [key: string]: Professor[] | Classe[]; // Signature d'index requise
}

// Type pour les données du formulaire d'ajout
interface ClasseFormData {
    name: string;
    professorId: string;
}

export default function ClasseList() {
    const { classes, professors } = usePage<PageProps>().props;

    // États pour les dialogues
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState<Classe | null>(null);

    // Fonctions pour gérer les classes
    const addClass = (formData: ClasseFormData) => {
        //fonction ajouter classes
        setAddDialogOpen(false);
    };

    const editClass = (updatedClass: Classe) => {
        //function
        setEditDialogOpen(false);
    };

    const deleteClass = (id: string) => {
        setDeleteDialogOpen(false);
    };

    // Fonction pour obtenir les informations d'un professeur par son ID
    const getProfessorById = (id: string): Professor | undefined => {
        return professors.find((prof) => prof.id === id);
    };

    return (
        <div className="container mx-auto py-8">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Classes du Lycée</h1>
                <Button onClick={() => setAddDialogOpen(true)}>
                    <PlusIcon className="mr-2 h-4 w-4" />
                    Ajouter une classe
                </Button>
            </div>

            <Table>
                <TableCaption>Liste des classes du lycée</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Nom de la classe</TableHead>
                        <TableHead>Professeur principal</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Date de création</TableHead>
                        <TableHead>Dernière modification</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {classes.map((classe) => {
                        const professor = getProfessorById(classe.professorId);
                        return (
                            <TableRow key={classe.id}>
                                <TableCell className="font-medium">{classe.name}</TableCell>
                                <TableCell>{professor?.first_name || 'Non assigné'}</TableCell>
                                <TableCell>{professor?.user?.email || 'N/A'}</TableCell>
                                <TableCell>{dayjs(classe.created_at).format('dddd D MMMM YYYY [à] H[h]mm')}</TableCell>
                                <TableCell>{dayjs(classe.updated_at).format('dddd D MMMM YYYY [à] H[h]mm')}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            onClick={() => {
                                                setSelectedClass(classe);
                                                setEditDialogOpen(true);
                                            }}
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => {
                                                setSelectedClass(classe);
                                                setDeleteDialogOpen(true);
                                            }}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            {/* Dialogue pour ajouter une classe */}
            <AddClassDialog open={addDialogOpen} onOpenChange={setAddDialogOpen} onSubmit={addClass} professors={professors} />

            {/* Dialogue pour modifier une classe */}
            {selectedClass && (
                <EditClassDialog
                    open={editDialogOpen}
                    onOpenChange={setEditDialogOpen}
                    classe={selectedClass}
                    onSubmit={editClass}
                    professors={professors}
                />
            )}

            {/* Dialogue de confirmation de suppression */}
            {selectedClass && (
                <DeleteConfirmDialog
                    open={deleteDialogOpen}
                    onOpenChange={setDeleteDialogOpen}
                    className={selectedClass.name}
                    onConfirm={() => deleteClass(selectedClass.id)}
                />
            )}
        </div>
    );
}
