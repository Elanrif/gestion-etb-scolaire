'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

export function ProfessorForm() {
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
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" placeholder="Entrez votre numéro de téléphone" />
                    </div>
                </div>
            </div>

            <Separator className="my-4" />

            <div>
                <h3 className="mb-4 text-lg font-medium text-indigo-800">Informations professionnelles</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="employeeId">Numéro d'employé</Label>
                        <Input id="employeeId" placeholder="Entrez votre numéro d'employé" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="status">Statut</Label>
                        <Select>
                            <SelectTrigger id="status">
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
                        <Select>
                            <SelectTrigger id="discipline">
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
                        <Label htmlFor="experience">Années d'expérience</Label>
                        <Input id="experience" type="number" min="0" placeholder="Nombre d'années" />
                    </div>
                    <div className="col-span-1 space-y-2 md:col-span-2">
                        <Label>Niveaux enseignés</Label>
                        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="seconde" />
                                <Label htmlFor="seconde">Seconde</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="premiere" />
                                <Label htmlFor="premiere">Première</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terminale" />
                                <Label htmlFor="terminale">Terminale</Label>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 space-y-2 md:col-span-2">
                        <Label htmlFor="additionalInfo">Informations complémentaires</Label>
                        <Textarea
                            id="additionalInfo"
                            placeholder="Autres informations pertinentes (spécialités, responsabilités, etc.)"
                            className="min-h-[100px]"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-start">
                <button
                    type="submit"
                    className="rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 disabled:opacity-50"
                >
                    Enregistrer
                </button>
            </div>
        </form>
    );
}
