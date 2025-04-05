'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import InputError from '../input-error';

enum StagiaireStatus {
    TITULAIRE = 'Titulaire',
    STAGIAIRE = 'Stagiaire',
    CONTRACTUEL = 'Contractuel',
}

type Secretary = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    phone_number: string;
    unique_id: string;
    status: StagiaireStatus;
    address: string;
    experience_year: number;
    responsability_notes: string;
    birthday: string;
}
export function SecretaryForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { data, setData, post, errors, processing, reset} = useForm<Required<Secretary>>({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        unique_id: '',
        status: StagiaireStatus.TITULAIRE,
        address: '',
        experience_year: 0,
        responsability_notes: '',
        birthday: '',
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
        setIsSubmitting(true);
        post(route('credentials.secretary'), {
            onSuccess: () => {
                toast.success('Compte créer avec succès');
                setIsSubmitting(false);
            },
            onError: (e) => {
                console.log('handleSubmit error : ', e)
                toast.error("Une erreur s'est produite");
                setIsSubmitting(false);
            },
            onFinish: () => reset('status'),
        });
        console.log('Submitting form with data:', data);
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations personnelles</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="first_name">Prénom</Label>
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
                        <Label htmlFor="last_name">Nom</Label>
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
                    <div className="col-span-2 space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="votre.email@exemple.com"
                            required
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Mot de passe</Label>
                        </div>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                            tabIndex={3}
                            autoComplete="new-password"
                            value={data.password}
                            onChange={handleChange}
                            disabled={processing}
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <Label htmlFor="password_confirmation">Confirmez mot le de passe</Label>
                        </div>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            required
                            tabIndex={4}
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            disabled={processing}
                            placeholder="Confirm password"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone_number">Téléphone</Label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            value={data.phone_number}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro de téléphone"
                            required
                        />
                        <InputError message={errors.phone_number} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="birthday">Date de naissance</Label>
                        <Input id="birthday" name="birthday" type="date" value={data.birthday} onChange={handleChange} required />
                        <InputError message={errors.birthday} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">Adresse</Label>
                        <Input id="address" name="address" value={data.address} onChange={handleChange} placeholder="Entrez votre adresse" />
                        <InputError message={errors.address} />
                    </div>
                </div>
            </div>

            <Separator className="my-4" />

            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations professionnelles</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="unique_id">Numéro d'employé</Label>
                        <Input
                            id="unique_id"
                            name="unique_id"
                            value={data.unique_id}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro d'employé"
                            required
                        />
                        <InputError message={errors.unique_id} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Statut</Label>
                        <Select value={data.status} onValueChange={(value) => handleSelectChange('status', value)}>
                            <SelectTrigger id="status">
                                <SelectValue placeholder="Sélectionnez votre statut" />
                            </SelectTrigger>
                            <SelectContent>
                                {Object.entries(StagiaireStatus).map(([key, value]) => (
                                    <SelectItem key={key} value={value}>
                                        {value}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="experience_year">Années d'expérience</Label>
                        <Input
                            id="experience_year"
                            name="experience_year"
                            type="number"
                            min="0"
                            value={data.experience_year.toString()}
                            onChange={handleChange}
                            placeholder="Nombre d'années"
                        />
                        <InputError message={errors.experience_year} />
                    </div>
                    <div className="col-span-1 space-y-2 md:col-span-2">
                        <Label htmlFor="responsability_notes">Responsabilités principales</Label>
                        <Textarea
                            id="responsability_notes"
                            name="responsability_notes"
                            value={data.responsability_notes}
                            onChange={handleChange}
                            placeholder="Décrivez vos principales responsabilités en tant que secrétaire général"
                            className="min-h-[100px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Enregistrer
                </button>
            </div>

            {/* TOAST */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </form>
    );
}
