import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Classe, Matiere, Student } from '@/types/models';
import {  NoteFormType} from '@/types/models/forms';
import { useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';
import InputError from '@/components/shared/input-error';

interface PageProps {
    students: Student[];
    matieres: Matiere[];
    classes: Classe[];
    [key: string]: Student[] | Matiere[] | Classe[]; // Signature d'index requise
}

export function NoteForm() {
    const { matieres, students, classes } = usePage<PageProps>().props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, setData, post, errors, processing, reset } = useForm<NoteFormType>({
        note: '',
        trimestre: '',
        classe_id: 0,
        matiere_id: 0,
        student_id: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(name as keyof typeof data, value);
    };

    const handleSelectChange = (name: keyof typeof data, value: string) => {
        setData(name, value);
    };

    const handleSubmit: FormEventHandler = (e: React.FormEvent) => {
        e.preventDefault();

        post(route('dashboard.notes.store'), {
            onSuccess: () => {
                toast.success('Compte créé avec succès');
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
                            placeholder="Entrez une note"
                            required
                            className="w-full"
                        />
                        <InputError message={errors.note} />
                    </div>
                </div>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="trimestre" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Trimestre
                    </Label>
                    <Select value={data.trimestre} onValueChange={(value) => handleSelectChange('trimestre', value)}>
                        <SelectTrigger id="trimestre" className="w-full">
                            <SelectValue placeholder="Sélectionnez un trimestre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1er trimestre</SelectItem>
                            <SelectItem value="2">2e trimestre</SelectItem>
                            <SelectItem value="3">3e trimestre</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.trimestre} />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="student" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Etudiants
                    </Label>
                    <Select value={data.student_id?.toString()} onValueChange={(value) => handleSelectChange('student_id', value)}>
                        <SelectTrigger id="students" className="w-full">
                            <SelectValue placeholder="Sélectionnez un étudiant" />
                        </SelectTrigger>
                        <SelectContent>
                            {students.map((student,index) => (
                                <SelectItem key={index} value={student.id?.toString()}>{student.first_name} {student.last_name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.student_id} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="discipline" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Classes
                    </Label>
                    <Select value={data.classe_id?.toString()} onValueChange={(value) => handleSelectChange('classe_id', value)}>
                        <SelectTrigger id="classe" className="w-full">
                            <SelectValue placeholder="Sélectionnez une matière" />
                        </SelectTrigger>
                        <SelectContent>
                        {classes.map((classes,index) => (
                                <SelectItem key={index} value={classes.id?.toString()}>{classes.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.classe_id} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="matiere" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Matières
                    </Label>
                    <Select value={data.matiere_id?.toString()} onValueChange={(value) => handleSelectChange('matiere_id', value)}>
                        <SelectTrigger id="matiere" className="w-full">
                            <SelectValue placeholder="Sélectionnez une matière" />
                        </SelectTrigger>
                        <SelectContent>
                        {matieres.map((matiere,index) => (
                                <SelectItem key={index} value={matiere.id?.toString()}>{matiere.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <InputError message={errors.matiere_id} />
                </div>
            </div>

            <div className="flex justify-start">
                <button
                    type="submit"
                    disabled={processing}
                    className="flex items-center gap-2 rounded bg-indigo-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-indigo-700 disabled:opacity-50"
                >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Enregistrer
                </button>
            </div>
        </form>
    );
}