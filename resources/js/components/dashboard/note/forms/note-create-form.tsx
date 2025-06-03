import InputError from '@/components/shared/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Classe } from '@/types/models';
import { NoteFormType} from '@/types/models/forms';
import { useForm, usePage } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';

interface PageProps {
    classes: Classe[];
    [key: string]:  Classe[]; // Signature d'index requise
}

export function NoteCreateForm() {
    const { classes } = usePage<PageProps>().props;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, setData, post, errors, processing, reset } = useForm<NoteFormType>({
            note: '',
            trimestre: '',
            classe_id: null,
            matiere_id: null,
            professor_id: null,
            student_id: null,
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

        post(route('dashboard.matieres.store'), {
            onSuccess: () => {
                console.log("Compte créé avec succès !")
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
                            Note/20
                        </Label>
                        <Input
                            id="note"
                            type='number'
                            name="note"
                            value={data.note}
                            onChange={handleChange}
                            placeholder="Veuillez saisir une note"
                            required
                            className="w-full"
                        />
                        <InputError message={errors.note} />
                    </div>

                    <div className="space-y-2">
                       <Label htmlFor="classes" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Classe
                    </Label>
                    <Select value={data.professor_id?.toString()} onValueChange={(value) => handleSelectChange('classe_id', value)}>
                        <SelectTrigger id="classes" className="w-full">
                            <SelectValue placeholder="Sélectionnez une classe" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes?.map((classe,index) => (
                                <SelectItem key={index} value={classe.id?.toString()}>
                                    {classe.name} </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    </div>
                </div>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                
                <div className="space-y-2">
                    <Label htmlFor="student" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Etudiant
                    </Label>
                    <Select value={data.student_id?.toString()} onValueChange={(value) => handleSelectChange('student_id', value)}>
                        <SelectTrigger id="student" className="w-full">
                            <SelectValue placeholder="Sélectionnez un étudiant" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes?.map((classe,index) => (
                                <SelectItem key={index} value={classe.id?.toString()}>
                                    {classe.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="matiere" className="after:ms-1 after:text-red-500 after:content-['*']">
                        Matière
                    </Label>
                    <Select value={data.matiere_id?.toString()} onValueChange={(value) => handleSelectChange('matiere_id', value)}>
                        <SelectTrigger id="matiere" className="w-full">
                            <SelectValue placeholder="Sélectionnez une matière" />
                        </SelectTrigger>
                        <SelectContent>
                            {classes?.map((classe,index) => (
                                <SelectItem key={index} value={classe.id?.toString()}>
                                  {classe.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="trimestre" className="after:ms-1 after:text-red-500 after:content-['*']">Trimestre</Label>
                    <Select>
                        <SelectTrigger id="trimestre" className="border-gray-200">
                            <SelectValue placeholder="Sélectionner un trimestre" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="titulaire">Trimestre1</SelectItem>
                            <SelectItem value="contractuel">Trimestre2</SelectItem>
                            <SelectItem value="vacataire">Trimestre3</SelectItem>
                        </SelectContent>
                    </Select>
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
