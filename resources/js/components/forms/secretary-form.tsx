import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'react-toastify';
import InputError from '../input-error';

enum StagiaireStatus {
    TITULAIRE = 'Titulaire',
    STAGIAIRE = 'Stagiaire',
    CONTRACTUEL = 'Contractuel',
}

type user = {
    email: string;
    password: string;
    birthday: string;
    password_confirmation: string;
    phone_number: string;
    address: string;
};

type Secretary = {
    first_name: string;
    last_name: string;
    unique_id: string;
    status: StagiaireStatus;
    experience_year: number;
    responsability_notes: string;
} & user

export function SecretaryForm() {
    const { data, setData, post, errors, processing, reset } = useForm<Required<Secretary>>({
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
        post(route('credentials.secretary'), {
            onSuccess: () => {
                toast.success('Compte créé avec succès');
            },
            onError: (e) => {
                console.log('handleSubmit error : ', e);
                toast.error("Une erreur s'est produite");
            },
            onFinish: () => reset('status'),
        });
    };
    
    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations personnelles</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                            className="w-full"
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
                            className="w-full"
                        />
                        <InputError message={errors.last_name} />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email" className="after:content-['*'] after:text-red-500 after:ms-1">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={data.email}
                            onChange={handleChange}
                            placeholder="votre.email@exemple.com"
                            required
                            className="w-full"
                        />
                        <InputError message={errors.email} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="after:content-['*'] after:text-red-500 after:ms-1">Mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                            autoComplete="new-password"
                            value={data.password}
                            onChange={handleChange}
                            disabled={processing}
                            placeholder="Mot de passe"
                            className="w-full"
                        />
                        <InputError message={errors.password} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password_confirmation" className="after:content-['*'] after:text-red-500 after:ms-1">Confirmez le mot de passe</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            required
                            autoComplete="new-password"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            disabled={processing}
                            placeholder="Confirmez le mot de passe"
                            className="w-full"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone_number" className="after:content-['*'] after:text-red-500 after:ms-1">Téléphone</Label>
                        <Input
                            id="phone_number"
                            name="phone_number"
                            value={data.phone_number}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro de téléphone"
                            required
                            className="w-full"
                        />
                        <InputError message={errors.phone_number} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="birthday" className="after:content-['*'] after:text-red-500 after:ms-1">Date de naissance</Label>
                        <Input id="birthday" name="birthday" type="date" value={data.birthday} onChange={handleChange} required className="w-full" />
                        <InputError message={errors.birthday} />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="address" className="after:content-['*'] after:text-red-500 after:ms-1">Adresse</Label>
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
                </div>
            </div>

            <Separator className="my-4" />

            <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations professionnelles</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="unique_id" className="after:content-['*'] after:text-red-500 after:ms-1">Numéro d'employé</Label>
                        <Input
                            id="unique_id"
                            name="unique_id"
                            value={data.unique_id}
                            onChange={handleChange}
                            placeholder="Entrez votre numéro d'employé"
                            required
                            className="w-full"
                        />
                        <InputError message={errors.unique_id} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status" className="after:content-['*'] after:text-red-500 after:ms-1">Statut</Label>
                        <Select value={data.status} onValueChange={(value) => handleSelectChange('status', value)}>
                            <SelectTrigger id="status" className="w-full">
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
                        <Label htmlFor="experience_year" className="after:content-['*'] after:text-red-500 after:ms-1">Années d'expérience</Label>
                        <Input
                            id="experience_year"
                            name="experience_year"
                            type="number"
                            min="0"
                            value={data.experience_year.toString()}
                            onChange={handleChange}
                            placeholder="Nombre d'années"
                            className="w-full"
                        />
                        <InputError message={errors.experience_year} />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="responsability_notes">Responsabilités principales</Label>
                        <Textarea
                            id="responsability_notes"
                            name="responsability_notes"
                            value={data.responsability_notes}
                            onChange={handleChange}
                            placeholder="Décrivez vos principales responsabilités en tant que secrétaire général"
                            className="min-h-[100px] w-full"
                        />
                    </div>
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