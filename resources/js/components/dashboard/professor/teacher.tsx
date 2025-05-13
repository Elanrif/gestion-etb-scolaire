'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import AdminLayout from '@/layouts/admin-layout';
import { BookOpen, ChevronLeft, ChevronRight, Download, Eye, Filter, Mail, MoreHorizontal, Pencil, Phone, Plus, Search, Trash2 } from 'lucide-react';

export default function Teacher() {
    // Exemple de données de professeurs
    const teachers = [
        {
            id: 1,
            name: 'BACAR Mvoulana',
            email: 'bacar.dupont@lycee.fr',
            phone: '06 12 34 56 78',
            subject: 'Mathématiques',
            status: 'Titulaire',
            classes: ['Seconde A', 'Première A', 'Terminale A'],
            avatar: '',
            initials: 'MD',
        },
        {
            id: 2,
            name: 'AHMED Moussa',
            email: 'ahmed.martin@lycee.fr',
            phone: '06 23 45 67 89',
            subject: 'Français',
            status: 'Titulaire',
            classes: ['Seconde B', 'Première B'],
            avatar: '',
            initials: 'SM',
        },
        {
            id: 3,
            name: 'KARIM ISSA',
            email: 'karim.lefebvre@lycee.fr',
            phone: '06 34 56 78 90',
            subject: 'Histoire-Géographie',
            status: 'Titulaire',
            classes: ['Seconde A', 'Seconde B', 'Première A', 'Première B'],
            avatar: '',
            initials: 'JL',
        },
        {
            id: 4,
            name: 'ZAYDOU Youssouf',
            email: 'zaydou.dubois@lycee.fr',
            phone: '06 45 67 89 01',
            subject: 'Physique-Chimie',
            status: 'Contractuel',
            classes: ['Seconde A', 'Terminale A'],
            avatar: '',
            initials: 'MD',
        },
        {
            id: 5,
            name: 'MARIAM ABDOU',
            email: 'pierre.moreau@lycee.fr',
            phone: '06 56 78 90 12',
            subject: 'SVT',
            status: 'Titulaire',
            classes: ['Seconde A', 'Seconde B', 'Terminale A'],
            avatar: '',
            initials: 'PM',
        },
        {
            id: 6,
            name: 'ABOUBACAR SAID',
            email: 'claire.petit@lycee.fr',
            phone: '06 67 89 01 23',
            subject: 'Anglais',
            status: 'Contractuel',
            classes: ['Première A', 'Première B', 'Terminale A', 'Terminale B'],
            avatar: '',
            initials: 'CP',
        },
    ];

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Gestion des professeurs</h1>
                        <p className="mt-1 text-gray-500">Consultez et gérez les informations des professeurs</p>
                    </div>

                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="bg-[#6366f1] hover:bg-[#4f46e5]">
                                <Plus className="mr-2 h-4 w-4" />
                                Ajouter un professeur
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                                <DialogTitle className="text-xl text-gray-800">Ajouter un nouveau professeur</DialogTitle>
                                <DialogDescription>Remplissez les informations ci-dessous pour ajouter un nouveau professeur.</DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-6 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">Prénom</Label>
                                        <Input id="firstName" placeholder="Prénom" className="border-gray-200" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Nom</Label>
                                        <Input id="lastName" placeholder="Nom" className="border-gray-200" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="email@lycee.fr" className="border-gray-200" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Téléphone</Label>
                                        <Input id="phone" placeholder="06 XX XX XX XX" className="border-gray-200" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Matière principale</Label>
                                        <Select>
                                            <SelectTrigger id="subject" className="border-gray-200">
                                                <SelectValue placeholder="Sélectionner une matière" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="maths">Mathématiques</SelectItem>
                                                <SelectItem value="francais">Français</SelectItem>
                                                <SelectItem value="histoire-geo">Histoire-Géographie</SelectItem>
                                                <SelectItem value="physique-chimie">Physique-Chimie</SelectItem>
                                                <SelectItem value="svt">SVT</SelectItem>
                                                <SelectItem value="anglais">Anglais</SelectItem>
                                                <SelectItem value="espagnol">Espagnol</SelectItem>
                                                <SelectItem value="allemand">Allemand</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="status">Statut</Label>
                                        <Select>
                                            <SelectTrigger id="status" className="border-gray-200">
                                                <SelectValue placeholder="Sélectionner un statut" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="titulaire">Titulaire</SelectItem>
                                                <SelectItem value="contractuel">Contractuel</SelectItem>
                                                <SelectItem value="vacataire">Vacataire</SelectItem>
                                                <SelectItem value="stagiaire">Stagiaire</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Classes enseignées</Label>
                                    <div className="mt-1 grid grid-cols-3 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="seconde-a" />
                                            <Label htmlFor="seconde-a" className="text-sm font-normal">
                                                Seconde A
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="seconde-b" />
                                            <Label htmlFor="seconde-b" className="text-sm font-normal">
                                                Seconde B
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="premiere-a" />
                                            <Label htmlFor="premiere-a" className="text-sm font-normal">
                                                Première A
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="premiere-b" />
                                            <Label htmlFor="premiere-b" className="text-sm font-normal">
                                                Première B
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terminale-a" />
                                            <Label htmlFor="terminale-a" className="text-sm font-normal">
                                                Terminale A
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="terminale-b" />
                                            <Label htmlFor="terminale-b" className="text-sm font-normal">
                                                Terminale B
                                            </Label>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes">Notes supplémentaires</Label>
                                    <Textarea
                                        id="notes"
                                        placeholder="Informations complémentaires sur le professeur"
                                        className="min-h-[100px] border-gray-200"
                                    />
                                </div>
                            </div>

                            <DialogFooter>
                                <Button variant="outline" className="border-gray-200">
                                    Annuler
                                </Button>
                                <Button className="bg-[#6366f1] hover:bg-[#4f46e5]">Ajouter le professeur</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                <Card className="overflow-hidden border-0 shadow-md">
                    <div className="bg-white p-6">
                        <div className="flex flex-col items-end gap-4 md:flex-row">
                            <div className="grid flex-1 gap-2">
                                <label htmlFor="search" className="text-sm font-medium text-gray-700">
                                    Rechercher
                                </label>
                                <div className="relative">
                                    <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-400" />
                                    <Input id="search" type="search" placeholder="Rechercher un professeur..." className="border-gray-200 pl-8" />
                                </div>
                            </div>

                            <div className="grid w-full gap-2 md:w-[180px]">
                                <label htmlFor="subject-filter" className="text-sm font-medium text-gray-700">
                                    Matière
                                </label>
                                <Select>
                                    <SelectTrigger id="subject-filter" className="border-gray-200">
                                        <SelectValue placeholder="Toutes les matières" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Toutes les matières</SelectItem>
                                        <SelectItem value="maths">Mathématiques</SelectItem>
                                        <SelectItem value="francais">Français</SelectItem>
                                        <SelectItem value="histoire-geo">Histoire-Géographie</SelectItem>
                                        <SelectItem value="physique-chimie">Physique-Chimie</SelectItem>
                                        <SelectItem value="svt">SVT</SelectItem>
                                        <SelectItem value="anglais">Anglais</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="grid w-full gap-2 md:w-[180px]">
                                <label htmlFor="status-filter" className="text-sm font-medium text-gray-700">
                                    Statut
                                </label>
                                <Select>
                                    <SelectTrigger id="status-filter" className="border-gray-200">
                                        <SelectValue placeholder="Tous les statuts" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Tous les statuts</SelectItem>
                                        <SelectItem value="titulaire">Titulaire</SelectItem>
                                        <SelectItem value="contractuel">Contractuel</SelectItem>
                                        <SelectItem value="vacataire">Vacataire</SelectItem>
                                        <SelectItem value="stagiaire">Stagiaire</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 md:w-auto">
                                <Filter className="mr-2 h-4 w-4" />
                                Filtres
                            </Button>

                            <Button variant="outline" className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 md:w-auto">
                                <Download className="mr-2 h-4 w-4" />
                                Exporter
                            </Button>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-md border border-gray-200">
                            <Table>
                                <TableHeader className="bg-gray-50">
                                    <TableRow>
                                        <TableHead className="font-medium text-gray-700">Professeur</TableHead>
                                        <TableHead className="font-medium text-gray-700">Contact</TableHead>
                                        <TableHead className="font-medium text-gray-700">Matière</TableHead>
                                        <TableHead className="font-medium text-gray-700">Statut</TableHead>
                                        <TableHead className="font-medium text-gray-700">Classes</TableHead>
                                        <TableHead className="w-[80px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {teachers.map((teacher) => (
                                        <TableRow key={teacher.id} className="hover:bg-gray-50">
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-9 w-9 border border-gray-200">
                                                        <AvatarImage src={teacher.avatar || '/placeholder.svg'} alt={teacher.name} />
                                                        <AvatarFallback className="bg-[#f0e7ff] text-[#8b5cf6]">{teacher.initials}</AvatarFallback>
                                                    </Avatar>
                                                    <span className="font-medium text-gray-800">{teacher.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="space-y-1">
                                                    <div className="flex items-center text-sm">
                                                        <Mail className="mr-1.5 h-3.5 w-3.5 text-gray-400" />
                                                        <span className="text-gray-600">{teacher.email}</span>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <Phone className="mr-1.5 h-3.5 w-3.5 text-gray-400" />
                                                        <span className="text-gray-600">{teacher.phone}</span>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center">
                                                    <BookOpen className="mr-1.5 h-4 w-4 text-[#8b5cf6]" />
                                                    <span>{teacher.subject}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant="outline"
                                                    className={
                                                        teacher.status === 'Titulaire'
                                                            ? 'border-green-200 bg-green-50 text-green-700'
                                                            : 'border-amber-200 bg-amber-50 text-amber-700'
                                                    }
                                                >
                                                    {teacher.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex flex-wrap gap-1">
                                                    {teacher.classes.map((cls, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="outline"
                                                            className="border-[#6366f1]/20 bg-[#e6e1ff] text-[#6366f1]"
                                                        >
                                                            {cls}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger asChild>
                                                        <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                                                            <MoreHorizontal className="h-4 w-4 text-gray-500" />
                                                            <span className="sr-only">Actions</span>
                                                        </Button>
                                                    </DropdownMenuTrigger>
                                                    <DropdownMenuContent align="end" className="border-gray-200">
                                                        <DropdownMenuItem className="flex cursor-pointer items-center">
                                                            <Eye className="mr-2 h-4 w-4 text-[#6366f1]" />
                                                            <span>Voir le profil</span>
                                                        </DropdownMenuItem>
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <DropdownMenuItem
                                                                    className="flex cursor-pointer items-center"
                                                                    onSelect={(e) => e.preventDefault()}
                                                                >
                                                                    <Pencil className="mr-2 h-4 w-4 text-amber-600" />
                                                                    <span>Modifier</span>
                                                                </DropdownMenuItem>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[600px]">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-xl text-gray-800">
                                                                        Modifier les informations du professeur
                                                                    </DialogTitle>
                                                                    <DialogDescription>
                                                                        Modifiez les informations de {teacher.name}.
                                                                    </DialogDescription>
                                                                </DialogHeader>

                                                                <div className="grid gap-6 py-4">
                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label htmlFor="edit-firstName">Prénom</Label>
                                                                            <Input
                                                                                id="edit-firstName"
                                                                                placeholder="Prénom"
                                                                                className="border-gray-200"
                                                                                defaultValue={teacher.name.split(' ')[0]}
                                                                            />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            <Label htmlFor="edit-lastName">Nom</Label>
                                                                            <Input
                                                                                id="edit-lastName"
                                                                                placeholder="Nom"
                                                                                className="border-gray-200"
                                                                                defaultValue={teacher.name.split(' ')[1]}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label htmlFor="edit-email">Email</Label>
                                                                            <Input
                                                                                id="edit-email"
                                                                                type="email"
                                                                                placeholder="email@lycee.fr"
                                                                                className="border-gray-200"
                                                                                defaultValue={teacher.email}
                                                                            />
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            <Label htmlFor="edit-phone">Téléphone</Label>
                                                                            <Input
                                                                                id="edit-phone"
                                                                                placeholder="06 XX XX XX XX"
                                                                                className="border-gray-200"
                                                                                defaultValue={teacher.phone}
                                                                            />
                                                                        </div>
                                                                    </div>

                                                                    <div className="grid grid-cols-2 gap-4">
                                                                        <div className="space-y-2">
                                                                            <Label htmlFor="edit-subject">Matière principale</Label>
                                                                            <Select defaultValue={teacher.subject.toLowerCase().replace(/-/g, '-')}>
                                                                                <SelectTrigger id="edit-subject" className="border-gray-200">
                                                                                    <SelectValue placeholder="Sélectionner une matière" />
                                                                                </SelectTrigger>
                                                                                <SelectContent>
                                                                                    <SelectItem value="mathématiques">Mathématiques</SelectItem>
                                                                                    <SelectItem value="français">Français</SelectItem>
                                                                                    <SelectItem value="histoire-géographie">
                                                                                        Histoire-Géographie
                                                                                    </SelectItem>
                                                                                    <SelectItem value="physique-chimie">Physique-Chimie</SelectItem>
                                                                                    <SelectItem value="svt">SVT</SelectItem>
                                                                                    <SelectItem value="anglais">Anglais</SelectItem>
                                                                                    <SelectItem value="espagnol">Espagnol</SelectItem>
                                                                                    <SelectItem value="allemand">Allemand</SelectItem>
                                                                                </SelectContent>
                                                                            </Select>
                                                                        </div>
                                                                        <div className="space-y-2">
                                                                            <Label htmlFor="edit-status">Statut</Label>
                                                                            <Select defaultValue={teacher.status.toLowerCase()}>
                                                                                <SelectTrigger id="edit-status" className="border-gray-200">
                                                                                    <SelectValue placeholder="Sélectionner un statut" />
                                                                                </SelectTrigger>
                                                                                <SelectContent>
                                                                                    <SelectItem value="titulaire">Titulaire</SelectItem>
                                                                                    <SelectItem value="contractuel">Contractuel</SelectItem>
                                                                                    <SelectItem value="vacataire">Vacataire</SelectItem>
                                                                                    <SelectItem value="stagiaire">Stagiaire</SelectItem>
                                                                                </SelectContent>
                                                                            </Select>
                                                                        </div>
                                                                    </div>

                                                                    <div className="space-y-2">
                                                                        <Label>Classes enseignées</Label>
                                                                        <div className="mt-1 grid grid-cols-3 gap-2">
                                                                            <div className="flex items-center space-x-2">
                                                                                <Checkbox
                                                                                    id="edit-seconde-a"
                                                                                    defaultChecked={teacher.classes.includes('Seconde A')}
                                                                                />
                                                                                <Label htmlFor="edit-seconde-a" className="text-sm font-normal">
                                                                                    Seconde A
                                                                                </Label>
                                                                            </div>
                                                                            <div className="flex items-center space-x-2">
                                                                                <Checkbox
                                                                                    id="edit-seconde-b"
                                                                                    defaultChecked={teacher.classes.includes('Seconde B')}
                                                                                />
                                                                                <Label htmlFor="edit-seconde-b" className="text-sm font-normal">
                                                                                    Seconde B
                                                                                </Label>
                                                                            </div>
                                                                            <div className="flex items-center space-x-2">
                                                                                <Checkbox
                                                                                    id="edit-premiere-a"
                                                                                    defaultChecked={teacher.classes.includes('Première A')}
                                                                                />
                                                                                <Label htmlFor="edit-premiere-a" className="text-sm font-normal">
                                                                                    Première A
                                                                                </Label>
                                                                            </div>
                                                                            <div className="flex items-center space-x-2">
                                                                                <Checkbox
                                                                                    id="edit-premiere-b"
                                                                                    defaultChecked={teacher.classes.includes('Première B')}
                                                                                />
                                                                                <Label htmlFor="edit-premiere-b" className="text-sm font-normal">
                                                                                    Première B
                                                                                </Label>
                                                                            </div>
                                                                            <div className="flex items-center space-x-2">
                                                                                <Checkbox
                                                                                    id="edit-terminale-a"
                                                                                    defaultChecked={teacher.classes.includes('Terminale A')}
                                                                                />
                                                                                <Label htmlFor="edit-terminale-a" className="text-sm font-normal">
                                                                                    Terminale A
                                                                                </Label>
                                                                            </div>
                                                                            <div className="flex items-center space-x-2">
                                                                                <Checkbox
                                                                                    id="edit-terminale-b"
                                                                                    defaultChecked={teacher.classes.includes('Terminale B')}
                                                                                />
                                                                                <Label htmlFor="edit-terminale-b" className="text-sm font-normal">
                                                                                    Terminale B
                                                                                </Label>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="space-y-2">
                                                                        <Label htmlFor="edit-notes">Notes supplémentaires</Label>
                                                                        <Textarea
                                                                            id="edit-notes"
                                                                            placeholder="Informations complémentaires sur le professeur"
                                                                            className="min-h-[100px] border-gray-200"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <DialogFooter>
                                                                    <Button variant="outline" className="border-gray-200">
                                                                        Annuler
                                                                    </Button>
                                                                    <Button className="bg-[#6366f1] hover:bg-[#4f46e5]">Enregistrer</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>
                                                        <Dialog>
                                                            <DialogTrigger asChild>
                                                                <DropdownMenuItem
                                                                    className="flex cursor-pointer items-center text-red-600"
                                                                    onSelect={(e) => e.preventDefault()}
                                                                >
                                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                                    <span>Supprimer</span>
                                                                </DropdownMenuItem>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[425px]">
                                                                <DialogHeader>
                                                                    <DialogTitle className="text-xl text-gray-800">
                                                                        Confirmer la suppression
                                                                    </DialogTitle>
                                                                    <DialogDescription>
                                                                        Êtes-vous sûr de vouloir supprimer le professeur {teacher.name} ? Cette action
                                                                        est irréversible.
                                                                    </DialogDescription>
                                                                </DialogHeader>
                                                                <DialogFooter className="mt-4">
                                                                    <Button variant="outline" className="border-gray-200">
                                                                        Annuler
                                                                    </Button>
                                                                    <Button variant="destructive">Supprimer</Button>
                                                                </DialogFooter>
                                                            </DialogContent>
                                                        </Dialog>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-500">Affichage de 1 à 6 sur 38 professeurs</div>
                            <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" className="text-gray-500">
                                    <ChevronLeft className="mr-1 h-4 w-4" />
                                    Précédent
                                </Button>
                                <div className="flex space-x-1">
                                    <Button size="sm" className="h-8 w-8 bg-[#6366f1] p-0 hover:bg-[#4f46e5]">
                                        1
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-gray-500">
                                        2
                                    </Button>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-gray-500">
                                        3
                                    </Button>
                                    <span className="flex items-center px-2">...</span>
                                    <Button variant="outline" size="sm" className="h-8 w-8 p-0 text-gray-500">
                                        4
                                    </Button>
                                </div>
                                <Button variant="outline" size="sm" className="text-gray-500">
                                    Suivant
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </AdminLayout>
    );
}