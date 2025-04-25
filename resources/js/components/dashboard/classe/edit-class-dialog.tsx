'use client';

import MultiSelectDropdown, { Option } from '@/components/multi-select';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Classe, Professor } from '@/types/models';
import { useForm } from '@inertiajs/react';
import type React from 'react';
import { toast } from 'react-toastify';


interface EditClassDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    classe: Classe;
    professors: Professor[];
}

type ClasseForm = {
    id: string;
    name: string;
    profIds: Array<string>;
};

export default function EditClassDialog({ open, onOpenChange, classe, professors }: EditClassDialogProps) {
    const { data, setData, put, errors, processing, reset } = useForm<ClasseForm>({
        id: classe.id,
        name: classe.name,
        profIds: [],
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        put(route('dashboard.classes.update',classe.id), {
            onSuccess: () => {
                toast.success('Succès !');
            },
            onError: (e) => {
                console.log('handleSubmit error : ', e);
                toast.error("Une erreur s'est produite");
            },
            onFinish: () => {},
        });

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

     const mapSelectedProfs: Option[] = classe.professors.map((professor) => ({
         value: professor.id.toString(), // Convertir l'ID en string comme demandé
         label: `${professor.first_name} ${professor.last_name}`,
     }));

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Modifier la classe</DialogTitle>
                        <DialogDescription>Modifiez les informations de la classe.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="edit-name">Nom de la classe</Label>
                            <Input id="edit-name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>

                        {/*  MULTI SELECT */}
                        <div className="grid gap-2">
                            <Label>Professeurs</Label>
                            <MultiSelectDropdown
                                placeholder="Options"
                                options={mapProfessors}
                                setData={setData}
                                defaultSelected={mapSelectedProfs}
                                onChange={(selected) => console.log('Selected options:', selected)}
                            />
                            {errors.profIds && <p className="text-sm text-red-500">{errors.profIds}</p>}
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => handleOpenChange(false)}>
                            Annuler
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Enregistrement...' : 'Enregistrer'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
