'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Professor } from '@/types/models';
import { useForm } from '@inertiajs/react';
import type React from 'react';

interface ClasseFormData {
    name: string;
    professorId: string;
    [key: string]: string | undefined;

    /*
    [key: string]: string | undefined ( string | undefined -- car classeFormData contient que des string ou bien optionnel), Ça permet à la librairie de lire/modifier n'importe quel champ du formulaire par son nom (ex: data['nom']), tout en gardant la sécurité de TypeScript. 
    */
}

interface AddClassDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    professors: Professor[];
    onSubmit: (data: ClasseFormData) => void;
}

export default function AddClassDialog({ open, onOpenChange, professors, onSubmit }: AddClassDialogProps) {
    const { data, setData, errors, processing, reset } = useForm<ClasseFormData>({
        name: '',
        professorId: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Utiliser les données du formulaire pour soumettre
        onSubmit(data);

        // Réinitialiser le formulaire après soumission
        reset();
    };

    // Réinitialiser le formulaire quand le dialogue se ferme
    const handleOpenChange = (open: boolean) => {
        if (!open) {
            reset();
        }
        onOpenChange(open);
    };

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
                        <div className="grid gap-2">
                            <Label htmlFor="professor">Professeur principal</Label>
                            <Select onValueChange={(value) => setData('professorId', value)} value={data.professorId}>
                                <SelectTrigger id="professor">
                                    <SelectValue placeholder="Sélectionner un professeur" />
                                </SelectTrigger>
                                <SelectContent>
                                    {professors.map((professor) => (
                                        <SelectItem key={professor.id} value={professor.id}>
                                            {professor.first_name} {professor.user?.email}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.professorId && <p className="text-sm text-red-500">{errors.professorId}</p>}
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
