'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';
import InputError from '../input-error';

type user = {
    email: string;
    password: string;
    birthday: string;
    password_confirmation: string;
    phone_number: string;
    address: string;
}

type Student = {
    first_name: string;
    last_name: string;
    gender: string;
    matricule:string;
    class:string;
    level:string;
    relationship:string;
    guardian_first_name:string;
    guardian_last_name:string;
    guardian_email:string;
    guardian_phone_number:string;
} & user

const classes = [
    { id: 'seconde-a', name: 'Seconde A' },
    { id: 'seconde-b', name: 'Seconde B' },
    { id: 'premiere-s', name: 'Première S' },
    { id: 'premiere-es', name: 'Première ES' },
    { id: 'premiere-l', name: 'Première L' },
    { id: 'terminale-s', name: 'Terminale S' },
    { id: 'terminale-es', name: 'Terminale ES' },
    { id: 'terminale-l', name: 'Terminale L' },
];
export function StudentForm() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, setData, post, errors, processing, reset } = useForm<Required<Student>>({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
    phone_number: '',
    address: '',
    birthday: '',
    gender: '',
    level:'',
    class:'',
    relationship:'',
    guardian_phone_number:'',
    guardian_email:'',
    guardian_last_name:'',
    guardian_first_name:'',
    matricule:'',
   
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
        post(route('credentials.students'), {
            onError: (e) => {
                console.log('handleSubmit error : ', e);
                toast.error("Une erreur s'est produite");
            },
            onFinish: () => {},
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations personnelles</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="first_name" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Prénom
                        </Label>
                        <Input
                            id="first_name"
                            name="first_name"
                            value={data.first_name}
                            onChange={handleChange}
                            placeholder="Entrez votre prénom"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last_name" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Nom
                        </Label>
                        <Input
                            id="last_name"
                            name="last_name"
                            value={data.last_name}
                            onChange={handleChange}
                            placeholder="Entrez votre nom"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="votre.email@exemple.com"
                            required
                            className="w-full"
                        />
                    </div>
                    <div>
                        <Label htmlFor="address" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Adresse
                        </Label>
                        <Input
                            id="address"
                            name="address"
                            value={data.address}
                            onChange={handleChange}
                            placeholder="Entrez votre adresse"
                            className="w-full"
                        />
                        <InputError message={errors.address} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Mot de passe
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            required
                            autoComplete="new-password"
                            placeholder="Mot de passe"
                            className="w-full"
                        />
                        <InputError message={errors.password} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password_confirmation" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Confirmez le mot de passe
                        </Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            required
                            value={data.password_confirmation}
                            onChange={handleChange}
                            autoComplete="new-password"
                            placeholder="Confirmez le mot de passe"
                            className="w-full"
                        />
                        <InputError message={errors.password} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone_number" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Téléphone
                        </Label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            value={data.phone_number}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro de téléphone"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="birthday" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Date de naissance
                        </Label>
                        <Input id="birthday" type="date" required name="birthday" value={data.birthday} onChange={handleChange} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gender" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Genre
                        </Label>
                        <Select value={data.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                            <SelectTrigger id="gender">
                                <SelectValue placeholder="Sélectionnez votre genre" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Masculin</SelectItem>
                                <SelectItem value="female">Féminin</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <Separator className="my-4" />

            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations scolaires</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="matricule" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Matricule
                        </Label>
                        <Input
                            id="matricule"
                            placeholder="Entrez votre numéro d'élève"
                            name="matricule"
                            value={data.matricule}
                            onChange={handleChange}
                            required
                        />
                        <InputError message={errors.matricule} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="level" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Niveau
                        </Label>
                        <Select value={data.level} onValueChange={(value) => handleSelectChange('level', value)}>
                            <SelectTrigger id="level">
                                <SelectValue placeholder="Sélectionnez votre niveau" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="seconde">Seconde</SelectItem>
                                <SelectItem value="premiere">Première</SelectItem>
                                <SelectItem value="terminale">Terminale</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="class" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Classe
                        </Label>
                        <Select value={data.class} onValueChange={(value) => handleSelectChange('class', value)}>
                            <SelectTrigger id="class">
                                <SelectValue placeholder="Sélectionnez votre classe" />
                            </SelectTrigger>
                            <SelectContent>
                                {classes.map((cls) => (
                                    <SelectItem key={cls.id} value={cls.id}>
                                        {cls.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <Separator className="my-4" />

            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Responsable légal</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="guardian_first_name" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Prénom du responsable
                        </Label>
                        <Input
                            id="guardian_first_name"
                            name="guardian_first_name"
                            value={data.guardian_first_name}
                            onChange={handleChange}
                            placeholder="Prénom du responsable légal"
                            required
                        />
                        <InputError message={errors.guardian_first_name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="guardian_last_name" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Nom du responsable
                        </Label>
                        <Input
                            id="guardian_last_name"
                            name="guardian_last_name"
                            value={data.guardian_last_name}
                            onChange={handleChange}
                            placeholder="Nom du responsable légal"
                            required
                        />
                        <InputError message={errors.guardian_last_name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="guardian_email" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Email du responsable
                        </Label>
                        <Input
                            id="guardian_email"
                            type="email"
                            name="guardian_email"
                            value={data.guardian_email}
                            onChange={handleChange}
                            placeholder="email.responsable@exemple.com"
                            required
                        />
                        <InputError message={errors.guardian_email} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="guardian_phone_number" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Téléphone du responsable
                        </Label>
                        <Input
                            id="guardian_phone_number"
                            name="guardian_phone_number"
                            value={data.guardian_phone_number}
                            onChange={handleChange}
                            placeholder="Numéro de téléphone du responsable"
                            required
                        />
                        <InputError message={errors.guardian_phone_number} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="relationship" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Lien de parenté
                        </Label>
                        <Select value={data.relationship} onValueChange={(value) => handleSelectChange('relationship', value)}>
                            <SelectTrigger id="relationship" className="w-full">
                                <SelectValue placeholder="Sélectionnez le lien de parenté" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="pere">Père</SelectItem>
                                <SelectItem value="mere">Mère</SelectItem>
                                <SelectItem value="tuteur">Tuteur légal</SelectItem>
                                <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <button
                    type="submit"
                    disabled={processing}
                    className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Enregistrer
                </button>
            </div>
        </form>
    );
}
