'use client';

import MultiSelectDropdown, { Option } from '@/components/multi-select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Classe, Professor } from '@/types/models';
import { useForm } from '@inertiajs/react';
import type React from 'react';
import { toast } from 'react-toastify';

type ClasseForm = Pick<Classe, 'name' | 'professorId'>;

interface AddClassDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    professors: Professor[];
}


export default function AddClassDialog({ open, onOpenChange, professors }: AddClassDialogProps) {
    const { data, setData, post, errors, processing, reset } = useForm<ClasseForm>({
        name: '',
        professorId: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Utiliser les données du formulaire pour soumettre
        post(route('dashboard.classes.store'), {
            onSuccess: () => {
                toast.success('Succès !');
            },
            onError: (e) => {
                console.log('handleSubmit error : ', e);
                toast.error("Une erreur s'est produite");
            },
            onFinish: () => {},
        });

        // Réinitialiser le formulaire après soumission
        reset();
        onOpenChange(false);
    };

    // Réinitialiser le formulaire quand le dialogue se ferme
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            reset();
        }
        onOpenChange(open);
    };

    const mapProfessors: Option[] = professors.map((professor) => ({
        value: professor.id.toString(), // Convertir l'ID en string comme demandé
        label: `${professor.first_name} ${professor.last_name}`,
    }));

    console.log(professors)
    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Ajouter une nouvelle classe</DialogTitle>
                        <DialogDescription>Remplissez les informations pour créer une nouvelle classe.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Nom de la classe</Label>
                            <Input id="name" value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="Ex: Terminale S" />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>
                        {/* SELECT NORMAL */}
                        <div className="grid gap-2">
                            <Label htmlFor="professor">Professeur principal</Label>
                            <Select onValueChange={(value) => setData('professorId', value)} value={data.professorId}>
                                <SelectTrigger id="professor">
                                    <SelectValue placeholder="Sélectionner un professeur" />
                                </SelectTrigger>
                                <SelectContent>
                                    {professors.map((professor) => (
                                        <SelectItem key={professor.id} value={professor.id.toString()}>
                                            {professor.first_name} {professor.last_name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.professorId && <p className="text-sm text-red-500">{errors.professorId}</p>}
                        </div>

                        {/*  MULTI SELECT */}
                        <div className="grid gap-2">
                            <Label>Select frameworks</Label>
                            <MultiSelectDropdown
                                placeholder="Select options"
                                options={mapProfessors}
                                onChange={(selected) => console.log('Selected options:', selected)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                            Annuler
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Ajout en cours...' : 'Ajouter'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
