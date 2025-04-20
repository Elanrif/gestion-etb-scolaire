'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Classe, Professor } from '@/types/models';
import { useForm } from '@inertiajs/react';
import type React from 'react';
import { useEffect } from 'react';


interface EditClassDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    classe: Classe;
    professors: Professor[];
    onSubmit: (data: Pick<Classe, 'id' | 'name' | 'professorId'>) => void;
}

interface ClasseForm {
    id: string;
    name: string;
    professorId: string;
}

export default function EditClassDialog({ open, onOpenChange, classe, professors, onSubmit }: EditClassDialogProps) {
    const { data, setData, errors, processing, reset } = useForm<Required<ClasseForm>>({
        id: classe.id,
        name: classe.name,
        professorId: classe.professorId,
    });

    // Mettre à jour les données du formulaire lorsque la classe sélectionnée change
    useEffect(() => {
        setData({
            id: classe.id,
            name: classe.name,
            professorId: classe.professorId,
        });
    }, [classe, setData]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit(data);
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
                        <DialogTitle>Modifier la classe</DialogTitle>
                        <DialogDescription>Modifiez les informations de la classe.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="edit-name">Nom de la classe</Label>
                            <Input id="edit-name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
                            {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="edit-professor">Professeur principal</Label>
                            <Select onValueChange={(value) => setData('professorId', value)} value={data.professorId}>
                                <SelectTrigger id="edit-professor">
                                    <SelectValue placeholder="Sélectionner un professeur" />
                                </SelectTrigger>
                                <SelectContent>
                                    {professors.map((professor) => (
                                        <SelectItem key={professor.id} value={professor.id}>
                                            {professor.first_name} ({professor.user.email})
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
                            {processing ? 'Enregistrement...' : 'Enregistrer'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
