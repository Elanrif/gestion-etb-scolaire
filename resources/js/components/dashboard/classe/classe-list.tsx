'use client';

import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Classe, Professor } from '@/types/models';
import { usePage } from '@inertiajs/react';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Pencil, School, Search, Trash2 } from 'lucide-react';
import { useState } from 'react';
import AddClassDialog from './add-class-dialog';
import DeleteConfirmDialog from './delete-confirm-dialog';
import EditClassDialog from './edit-class-dialog';

dayjs.extend(relativeTime);
dayjs.locale('fr');

interface PageProps {
    professors: Professor[];
    classes: Classe[];
    [key: string]: Professor[] | Classe[]; // Signature d'index requise
}

export default function ClasseList() {
    const { classes, professors } = usePage<PageProps>().props;
    const [searchTerm, setSearchTerm] = useState('');
    // États pour les dialogues
    const [addDialogOpen, setAddDialogOpen] = useState(false);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [selectedClass, setSelectedClass] = useState<Classe | null>(null);


    return (
        <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6 justify-between sm:flex sm:items-center">
                <h1 className="text-2xl font-bold text-gray-900">Liste des Classes</h1>
                <Button 
                    onClick={() => setAddDialogOpen(true)}
                    className="mt-4 inline-flex items-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1e3a8a]/90 focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2 focus:outline-none sm:mt-0"
                >
                    <School className="mr-2 h-5 w-5" />
                    Ajouter une classe
                </Button>
            </div>
            <div className="mb-5 relative w-full rounded-md sm:w-64">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-gray-500 transition duration-150 ease-in-out focus:border-[#1E3A8A] focus:ring-[#1E3A8A] focus:outline-none sm:text-sm"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
            </div>

            <Table>
                <TableCaption>Liste des classes du lycée</TableCaption>
                <TableHeader>
                    <TableRow className='bg-gray-100 rounded-lg'>
                        <TableHead className='text-gray-500'>Nom de la classe</TableHead>
                        <TableHead className='text-gray-500'>Nbre de professeur</TableHead>
                        <TableHead className='text-gray-500'>Date de création</TableHead>
                        <TableHead className='text-gray-500'>Dernière modification</TableHead>
                        <TableHead className="text-gray-500 text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='rounded-lg'>
                    {classes.map((classe) => {
                        
                        return (
                            <TableRow key={classe.id} className='bg-white'>
                                <TableCell className="font-medium">{classe.name}</TableCell>
                                <TableCell>{classe.professors.length || 'aucun'}</TableCell>
                                <TableCell>{dayjs(classe.created_at).format('YYYY-MM-DD [à] HH:mm:ss')}</TableCell>
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
                                            <Pencil className="h-2 w-2" />
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => {
                                                setSelectedClass(classe);
                                                setDeleteDialogOpen(true);
                                            }}
                                        >
                                            <Trash2 className="h-2 w-2" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            {/* Dialogue pour ajouter une classe */}
            <AddClassDialog 
            open={addDialogOpen} 
            onOpenChange={setAddDialogOpen}
            professors={professors} />

            {/* Dialogue pour modifier une classe */}
            {selectedClass && (
                <EditClassDialog
                    open={editDialogOpen}
                    onOpenChange={setEditDialogOpen}
                    classe={selectedClass}
                    professors={professors}
                />
            )}

            {/* Dialogue de confirmation de suppression */}
            {selectedClass && (
                <DeleteConfirmDialog
                    open={deleteDialogOpen}
                    data={selectedClass}
                    onOpenChange={setDeleteDialogOpen}
                    className={selectedClass.name}
                />
            )}
        </div>
    );
}
