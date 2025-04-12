import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import InputError from '../input-error';
import { FormEventHandler } from 'react';
import { toast } from 'react-toastify';
import { LoaderCircle } from 'lucide-react';

type Professor = {
    first_name: string;
    last_name: string; 
    email: string;
    password: string;
    password_confirmation: string;
    phone_number: string;
    employee_number: string;
    status: string;
    discipline: string;
    experience_year: number;
    level_taught: string;
    additional_info: string;
    address:string;
    birthday: string;
}
export function ProfessorForm() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { data, setData, post, errors, processing, reset } = useForm<Required<Professor>>({
        first_name: '',
        last_name: '',
        email: '',
        password:'',
        password_confirmation: '',
        phone_number: '',
        employee_number: '',
        status: '',
        discipline: '',
        experience_year: 0,
        level_taught: '',
        birthday: '',
        additional_info: '',
        address:'',
        });

        const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const { name, value } = e.target;
                setData(name as keyof typeof data, value);
            };
        
            const handleSelectChange = (name: keyof typeof data, value: string) => {
                setData(name, value);
            };
        
            const handleLevelChange = (level: string, checked: boolean) => {
                const levels = data.level_taught ? data.level_taught.split(",") : [];
              
                let updatedLevels;
                if (checked) {
                  updatedLevels = [...levels, level];
                } else {
                  updatedLevels = levels.filter((item) => item !== level);
                }
              
                // Supprime les doublons au cas où et met à jour le champ
                const uniqueLevels = Array.from(new Set(updatedLevels));
                setData("level_taught", uniqueLevels.join(","));
              };

              
            const handleSubmit: FormEventHandler = (e: React.FormEvent) => {
                e.preventDefault();

                console.log( data)
                post(route('credentials.professor'), {
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
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations personnelles</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="first_name">Prénom</Label>
                        <Input id="first_name" 
                        name="first_name"
                        value={data.first_name}
                        onChange={handleChange}
                        placeholder="Entrez votre prénom" required 
                        className="w-full"
                        />
                        <InputError message={errors.first_name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last_name">Nom</Label>
                        <Input id="last_name" 
                        name="last_name"
                        value={data.last_name}
                        onChange={handleChange}
                        placeholder="Entrez votre nom" required
                        className="w-full"
                         />
                          <InputError message={errors.last_name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" 
                        name="email" 
                        type="email" 
                        value={data.email}
                        onChange={handleChange}
                        placeholder="votre.email@exemple.com" 
                        required 
                        className="w-full" />
                        <InputError message={errors.email} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="address">address</Label>
                        <Input id="address" 
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        placeholder="Entrez votre address" 
                        required 
                        className="w-full"
                        />
                        <InputError message={errors.first_name} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                            value={data.password}
                            onChange={handleChange}
                            disabled={processing}
                            placeholder="Mot de passe"
                            className="w-full"
                        />
                         <InputError message={errors.password} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password_confirmation">Confirmez le mot de passe</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            required
                            value={data.password_confirmation}
                            onChange={handleChange}
                            disabled={processing}
                            placeholder="Confirmez le mot de passe"
                            className="w-full"
                        />
                        <InputError message={errors.password_confirmation} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone_number">Téléphone</Label>
                        <Input id="phone_number" 
                         name="phone_number"
                         value={data.phone_number}
                         onChange={handleChange}
                        placeholder="Entrez votre numéro de téléphone" required
                        className="w-full" />
                         <InputError message={errors.phone_number} />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="birthday">Date de naissance</Label>
                    <Input 
                        id="birthday" 
                        name="birthday" 
                        type="date" 
                        value={data.birthday} 
                        onChange={handleChange} 
                        required 
                        className="w-full"
                    />
                    <InputError message={errors.birthday} />
                </div>
            </div>
            </div>

            <Separator className="my-4" />

            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations professionnelles</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="employee_number">Numéro d'employé</Label>
                        <Input id="employee_number" 
                        name="employee_number" 
                        value={data.employee_number} 
                        onChange={handleChange} 
                        placeholder="Entrez votre numéro d'employé" required  className="w-full"/>
                        <InputError message={errors.employee_number} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Statut</Label>
                        <Select value={data.status} onValueChange={(value) => handleSelectChange('status', value)}>
                            <SelectTrigger id="status" className="w-full">
                                <SelectValue placeholder="Sélectionnez votre statut" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="certifie">Certifié</SelectItem>
                                <SelectItem value="agrege">Agrégé</SelectItem>
                                <SelectItem value="contractuel">Contractuel</SelectItem>
                                <SelectItem value="vacataire">Vacataire</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="discipline">Discipline principale</Label>
                        <Select value={data.discipline} onValueChange={(value) => handleSelectChange('discipline', value)}>
                            <SelectTrigger id="discipline" className="w-full">
                                <SelectValue placeholder="Sélectionnez votre discipline" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="maths">Mathématiques</SelectItem>
                                <SelectItem value="francais">Français</SelectItem>
                                <SelectItem value="histoire">Histoire-Géographie</SelectItem>
                                <SelectItem value="physique">Physique-Chimie</SelectItem>
                                <SelectItem value="svt">SVT</SelectItem>
                                <SelectItem value="anglais">Anglais</SelectItem>
                                <SelectItem value="espagnol">Espagnol</SelectItem>
                                <SelectItem value="allemand">Allemand</SelectItem>
                                <SelectItem value="ses">SES</SelectItem>
                                <SelectItem value="philosophie">Philosophie</SelectItem>
                                <SelectItem value="eps">EPS</SelectItem>
                                <SelectItem value="nsi">NSI</SelectItem>
                                <SelectItem value="arts">Arts</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="experience_year">Années d'expérience</Label>
                        <Input 
                            id="experience_year" 
                            type="number" 
                            min="0" 
                            name="experience_year" 
                            value={data.experience_year}
                            onChange={handleChange} 
                            placeholder="Nombre d'années"
                            className="w-full" />
                            <InputError message={errors.experience_year} />
                    </div>
                    <div className="col-span-1 space-y-2 md:col-span-2">
                        <Label>Niveaux enseignés</Label>
                        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="seconde"
                        checked={data.level_taught.includes("Seconde")}
                        onCheckedChange={(checked) => {
                            handleLevelChange("Seconde", checked === true);
                        }}
                        />
                        <Label htmlFor="seconde">Seconde</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="premiere"
                        checked={data.level_taught.includes("Première")}
                        onCheckedChange={(checked) => {
                            handleLevelChange("Première", checked === true);
                        }}
                        />
                        <Label htmlFor="premiere">Première</Label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                        id="terminale"
                        checked={data.level_taught.includes("Terminale")}
                        onCheckedChange={(checked) => {
                            handleLevelChange("Terminale", checked === true);
                        }}
                        />
                        <Label htmlFor="terminale">Terminale</Label>
                    </div>
                    </div>

                    </div>
                    <div className="col-span-1 space-y-2 md:col-span-2">
                        <Label htmlFor="additional_info">Informations complémentaires</Label>
                        <Textarea
                            id="additional_info"
                            name="additional_info" 
                            value={data.additional_info}
                            onChange={handleChange} 
                            placeholder="Autres informations pertinentes (spécialités, responsabilités, etc.)"
                            className="min-h-[100px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <button
                    type="submit"
                    disabled={processing}
                    className="flex items-center gap-2 rounded bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 disabled:opacity-50 transition-colors duration-200"
                >
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    Enregistrer
                </button>
            </div>
        </form>
    );
}