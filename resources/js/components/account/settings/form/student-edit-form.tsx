'use client';

import type React from 'react';

import InputError from '@/components/shared/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, LoaderCircle, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { ImageUpload } from '@/components/account/settings/form/image-upload';
import { toast } from 'react-toastify';
import { useForm } from '@inertiajs/react';
import { StudentFormType } from '@/types/models/forms';

// Types simplifiés pour l'exemple
interface Classe {
    id: string | number;
    name: string;
}

export function StudentEditForm({
    student,
    classes,
}: {
    student: StudentFormType;
    classes: Classe[];
}) {

    const { data, setData, put, errors, processing } = useForm<StudentFormType>('edit-student',{
    id_photo: student.id_photo ,
    card_photo: student.card_photo,
    first_name: student.first_name,
    last_name: student.last_name,
    email: student.email,
    phone_number: student.phone_number,
    address: student.address,
    birthday: student.birthday,
    gender: student.gender,
    level: student.level,
    classe_id: student.classe_id,
    relationship: student.relationship,
    guardian_phone_number: student.guardian_phone_number,
    guardian_email: student.guardian_email,
    guardian_last_name: student.last_name,
    guardian_first_name: student.guardian_first_name,
    matricule: student.matricule,
    });

    // États pour la gestion des photos
    const [idPhoto, setIdPhoto] = useState<string | null>(student.id_photo || null);
    const [cardPhoto, setCardPhoto] = useState<string | null>(student.card_photo || null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: keyof StudentFormType, value: string) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
       
        console.log('handleSubmit data : ', data);
        return;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const formData = {
            ...data,
            id_photo: idPhoto || undefined,
            card_photo: cardPhoto || undefined,
        };
        put(route('dashboard.students.update',student.id), {
                    onSuccess: () => {
                        toast.success("Succes !");
                    },
                    onError: (e) => {
                        console.log('handleSubmit error : ', e);
                        toast.error("Une erreur s'est produite");
                    },
                    onFinish: () => {},
                });
    };

    // Fonctions pour la gestion des photos
    const handleIdPhotoUpload = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result as string;
            setIdPhoto(result);
            setData((prev) => ({ ...prev, id_photo: result }));
        };
        reader.readAsDataURL(file);
    };

    const handleCardPhotoUpload = (file: File) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result as string;
            setCardPhoto(result);
            setData((prev) => ({ ...prev, card_photo: result }));
        };
        reader.readAsDataURL(file);
    };

    const handleRemoveIdPhoto = () => {
        setIdPhoto(null);
        setData((prev) => ({ ...prev, id_photo: undefined }));
    };

    const handleRemoveCardPhoto = () => {
        setCardPhoto(null);
        setData((prev) => ({ ...prev, card_photo: undefined }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 rounded-lg bg-white p-6 shadow-sm">
            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations personnelles</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className='col-span-2'>
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <CreditCard className="h-5 w-5" /> Photos
                                </CardTitle>
                                <CardDescription>Ajoutez les photos nécessaires</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Tabs defaultValue="id-photo" className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="id-photo">Photo d'identité</TabsTrigger>
                                        <TabsTrigger value="card-photo">Photo de carte</TabsTrigger>
                                    </TabsList>
                                    <TabsContent value="id-photo" className="space-y-4 pt-4">
                                        <div className="flex flex-col items-center space-y-4">
                                            {idPhoto ? (
                                                <div className="relative">
                                                    <img
                                                        src={idPhoto || '/placeholder.svg'}
                                                        alt="Photo d'identité"
                                                        className="border-primary h-48 w-36 rounded-md border-2 object-cover"
                                                    />
                                                    <div className="mt-2 flex justify-center space-x-2">
                                                        <Button type="button" variant="destructive" size="sm" onClick={handleRemoveIdPhoto}>
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            Supprimer
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <ImageUpload
                                                    onUpload={handleIdPhotoUpload}
                                                    label="Photo d'identité"
                                                    description="Format 3.5 x 4.5 cm, fond uni"
                                                    maxSize={5}
                                                    acceptedTypes={['image/jpeg', 'image/png']}
                                                />
                                            )}
                                        </div>
                                    </TabsContent>
                                    <TabsContent value="card-photo" className="space-y-4 pt-4">
                                        <div className="flex flex-col items-center space-y-4">
                                            {cardPhoto ? (
                                                <div className="relative">
                                                    <img
                                                        src={cardPhoto || '/placeholder.svg'}
                                                        alt="Photo de carte"
                                                        className="border-primary h-48 w-auto rounded-md border-2 object-cover"
                                                    />
                                                    <div className="mt-2 flex justify-center space-x-2">
                                                        <Button type="button" variant="destructive" size="sm" onClick={handleRemoveCardPhoto}>
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            Supprimer
                                                        </Button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <ImageUpload
                                                    onUpload={handleCardPhotoUpload}
                                                    label="Photo de carte"
                                                    description="Format paysage recommandé"
                                                    maxSize={5}
                                                    acceptedTypes={['image/jpeg', 'image/png']}
                                                />
                                            )}
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </CardContent>
                        </Card>
                    </div>
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
                            Date de naissance :
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
                        <Label htmlFor="classe_id" className="after:ms-1 after:text-red-500 after:content-['*']">
                            Classe
                        </Label>
                        <Select value={data.classe_id?.toString()} onValueChange={(value) => handleSelectChange('classe_id', value)}>
                            <SelectTrigger id="classe_id">
                                <SelectValue placeholder="Sélectionnez votre classe" />
                            </SelectTrigger>
                            <SelectContent>
                                {classes.map((cls, index) => (
                                    <SelectItem key={index} value={cls.id?.toString()}>
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
                    className="flex items-center gap-2 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                    <span> Modifier</span>
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                </button>
            </div>
        </form>
    );
}
