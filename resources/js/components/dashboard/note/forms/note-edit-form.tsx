import InputError from '@/components/shared/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Classe } from '@/types/models';
import {  NoteFormType } from '@/types/models/forms';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';

export function NoteEditForm({
    note,
    classes,
  }: {
    note: NoteFormType;
    classes: Classe[];
    
  }) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, setData, put, errors, processing, reset } = useForm<NoteFormType>('edit-note',{
        id: note.id,
        note: note.note,
        trimestre: note.trimestre,
        classe_id: note.classe_id,
        student_id: note.student_id,
        matiere_id: note.matiere_id,
    });

    const selectedClasse = classes.find(classe => classe.id === Number(data.classe_id));
    const filteredStudents = selectedClasse ? selectedClasse.students : [];
    const filteredMatieres = selectedClasse ? selectedClasse.matieres : [];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(name as keyof typeof data, value);
    };
      // Réinitialise les champs dépendants si la classe changeAdd commentMore actions
    const handleClasseChange = (value: string) => {
        setData('classe_id', Number(value));
        setData('student_id', null);
        setData('matiere_id', null);
    };
   const handleSelectChange = (name: keyof typeof data, value: string) => {
        setData(name, value);
    };

    const handleSubmit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (!note.id) {
            toast.error("ID de la note manquant.");
            return;
        }

        put(route('dashboard.notes.update',note.id), {
            onSuccess: () => {
                console.log('note mise à jour avec succès!')
            },
            onError: (e) => {
                console.log('handleSubmit error : ', e);
                toast.error("Une erreur s'est produite");
            },
            onFinish: () => {},
        });
    };
    
    return (
         <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
                <div>
                    <h3 className="mb-4 text-sm text-gray-600 font-medium">Veuillez remplir les champs ci-dessous</h3>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="note" className="after:ms-1 after:text-red-500 after:content-['*']">
                                    Note
                                </Label>
                                <Input
                                    id="note"
                                    type="number"
                                    name="note"
                                    value={data.note}
                                    onChange={handleChange}
                                    placeholder="Entrez votre prénom"
                                    required
                                    className="w-full"
                                />
                                <InputError message={errors.note} />
                            </div>
                         <div className="space-y-2">
                        <Label htmlFor="classes" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Classe
                        </Label>
                         <Select 
                            value={data.classe_id?.toString()} 
                            onValueChange={handleClasseChange}
                            required
                        >
                            <SelectTrigger id="classes" className="w-full">
                                <SelectValue placeholder="Sélectionnez une classe" />
                            </SelectTrigger>
                            <SelectContent>
                                {classes?.map((classe,index) => (
                                    <SelectItem key={index} value={classe.id?.toString()}>
                                        {classe.name} 
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.classe_id} />
                        </div>
                        </div>
                    </div>
                    <Separator className="my-4" />

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                         <div className="space-y-2">
                    <Label htmlFor="professor" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Etudiants
                    </Label>
                    <Select 
                        value={data.student_id?.toString()} 
                        onValueChange={(value) => handleSelectChange('student_id', value)}
                        required
                    >
                        <SelectTrigger id="students" className="w-full">
                            <SelectValue placeholder="Sélectionnez un étudiant" />
                        </SelectTrigger> 
                         <SelectContent>
                             {filteredStudents?.map(student => (
                        <SelectItem key={student.id} value={student.id.toString()}>
                            {student.first_name} {student.last_name}
                        </SelectItem>
                        ))}
                        </SelectContent>    
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="matiere" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Matière
                    </Label>
                    <Select
                    value={data.matiere_id?.toString()}
                    onValueChange={value => setData('matiere_id', Number(value))}
                    required
                    >
                    <SelectTrigger id="matiere" className="w-full">
                        <SelectValue placeholder="Sélectionnez une matière" />
                    </SelectTrigger>
                    <SelectContent>
                        {filteredMatieres?.map(matiere => (
                        <SelectItem key={matiere.id} value={matiere.id.toString()}>
                            {matiere.name}
                        </SelectItem>
                        ))}
                    </SelectContent>
                    </Select>
                        <InputError message={errors.matiere_id} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="trimestre" className="after:ms-1 after:text-red-500 after:content-['*']">Trimestre</Label>
                    <Select 
                        value={data.trimestre}
                        onValueChange={value => setData('trimestre', (value))}
                        required>
                        <SelectTrigger id="trimestre" className="border-gray-200">
                            <SelectValue placeholder="Sélectionner un trimestre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="trimestre1">1er Trimestre</SelectItem>
                            <SelectItem value="trimestre2">2e Trimestre</SelectItem>
                            <SelectItem value="trimestre3">3e Trimestre</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.trimestre} />
                        </div>
                    </div>

            <div className="flex justify-start">
                <button
                    type="submit"
                    disabled={processing}
                    className="flex items-center gap-2 rounded bg-indigo-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-indigo-700 disabled:opacity-50"
                >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Modifier
                </button>
            </div>
        </form>
    );
}