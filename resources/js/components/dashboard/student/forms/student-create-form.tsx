'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { FormEventHandler, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import InputError from '@/components/shared/input-error';
import { StudentFormType } from '@/types/models/forms';
import { Classe } from '@/types/models';

export function StudentCreateForm({classes}: {classes: Classe[]}) {
   
    const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const togglePasswordConfirmationVisibility = () => setShowPasswordConfirmation(!showPasswordConfirmation);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, setData, post, errors, processing, reset } = useForm<StudentFormType>({   
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
    classe_id: 0,
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
        post(route('dashboard.students.store'), {
            onError: (e) => {
                console.log('handleSubmit error : ', e);
                toast.error("Une erreur s'est produite");
            },
            onFinish: () => {},
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
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
                         <InputError message={errors.first_name} />
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
                         <InputError message={errors.last_name} />
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
                         <InputError message={errors.email} />
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
                        <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ?
                            'text' :'password'}
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            disabled={processing}
                            autoComplete="new-password"
                            placeholder="Mot de passe"
                            className="w-full"
                        />
                        <InputError message={errors.password} />
                        <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                tabIndex={-1}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                        <InputError message={errors.password} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password_confirmation" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Confirmez le mot de passe
                        </Label>
                           <div className='relative'>
                           <Input
                                id="password_confirmation"
                                type={showPasswordConfirmation ? 'text' : 'password'}
                                name="password_confirmation"
                                required
                                autoComplete="new-password"
                                value={data.password_confirmation}
                                onChange={handleChange}
                                disabled={processing}
                                placeholder="Confirmez le mot de passe"
                                className="w-full"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordConfirmationVisibility}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                                tabIndex={-1}
                            >
                                {showPasswordConfirmation ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                           </div>
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
                         <InputError message={errors.phone_number} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="birthday" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Date de naissance
                        </Label>
                        <Input id="birthday" type="date" required name="birthday" value={data.birthday} onChange={handleChange} />
                         <InputError message={errors.birthday} />
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
                        <InputError message={errors.gender} />
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
                        <InputError message={errors.level} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="classe_id" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Classe
                        </Label>
                        <Select value={data.classe_id?.toString()} onValueChange={(value) => handleSelectChange('classe_id', value)}>
                            <SelectTrigger id="classe_id">
                                <SelectValue placeholder="Sélectionnez votre classe" />
                            </SelectTrigger>
                            <SelectContent>
                                {classes.map((cls) => (
                                    <SelectItem key={cls.id} value={cls.id?.toString()}>
                                        {cls.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <InputError message={errors.classe_id} />
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
                        <InputError message={errors.relationship} />
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <button
                    type="submit"
                    disabled={processing}
                    className="flex items-center gap-2 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Enregistrer
                </button>
            </div>
        </form>
    );
}
