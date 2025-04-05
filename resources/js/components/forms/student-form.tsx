'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

export function StudentForm() {
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

    return (
        <form className="space-y-6">
            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations personnelles</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input id="firstName" placeholder="Entrez votre prénom" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input id="lastName" placeholder="Entrez votre nom" required />
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="votre.email@exemple.com" required className="w-full" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            required
                            autoComplete="new-password"
                            placeholder="Mot de passe"
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password_confirmation">Confirmez le mot de passe</Label>
                        <Input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            required
                            autoComplete="new-password"
                            placeholder="Confirmez le mot de passe"
                            className="w-full"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" placeholder="Entrez votre numéro de téléphone" />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="birthdate">Date de naissance</Label>
                        <Input id="birthdate" type="date" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="gender">Genre</Label>
                        <Select>
                            <SelectTrigger id="gender">
                                <SelectValue placeholder="Sélectionnez votre genre" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Masculin</SelectItem>
                                <SelectItem value="female">Féminin</SelectItem>
                                <SelectItem value="other">Autre</SelectItem>
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
                        <Label htmlFor="studentId">Numéro d'élève</Label>
                        <Input id="studentId" placeholder="Entrez votre numéro d'élève" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="level">Niveau</Label>
                        <Select>
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
                        <Label htmlFor="class">Classe</Label>
                        <Select>
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
                        <Label htmlFor="guardianFirstName">Prénom du responsable</Label>
                        <Input id="guardianFirstName" placeholder="Prénom du responsable légal" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="guardianLastName">Nom du responsable</Label>
                        <Input id="guardianLastName" placeholder="Nom du responsable légal" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="guardianEmail">Email du responsable</Label>
                        <Input id="guardianEmail" type="email" placeholder="email.responsable@exemple.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="guardianPhone">Téléphone du responsable</Label>
                        <Input id="guardianPhone" placeholder="Numéro de téléphone du responsable" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="relationship">Lien de parenté</Label>
                        <Select>
                            <SelectTrigger id="relationship">
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
                <button type="submit" className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50">
                    Enregistrer
                </button>
            </div>
        </form>
    );
}
