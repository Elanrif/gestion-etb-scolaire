import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AdminLayout from '@/layouts/admin-layout';
import { ChevronLeft, ChevronRight, Download, Eye, FileText, Filter, MoreHorizontal, Pencil, Plus, Search, Trash2 } from 'lucide-react';

const students = [
    {
        id: 1,
        name: 'Emma Martin',
        class: 'Seconde A',
        email: 'emma.martin@example.com',
        guardian: 'Pierre Martin',
        guardianEmail: 'pierre.martin@example.com',
        avatar: '',
        initials: 'EM',
    },
    {
        id: 2,
        name: 'Lucas Bernard',
        class: 'Seconde B',
        email: 'lucas.bernard@example.com',
        guardian: 'Marie Bernard',
        guardianEmail: 'marie.bernard@example.com',
        avatar: '',
        initials: 'LB',
    },
    {
        id: 3,
        name: 'Chloé Dubois',
        class: 'Première A',
        email: 'chloe.dubois@example.com',
        guardian: 'Thomas Dubois',
        guardianEmail: 'thomas.dubois@example.com',
        avatar: '',
        initials: 'CD',
    },
    {
        id: 4,
        name: 'Nathan Petit',
        class: 'Première C',
        email: 'nathan.petit@example.com',
        guardian: 'Sophie Petit',
        guardianEmail: 'sophie.petit@example.com',
        avatar: '',
        initials: 'NP',
    },
    {
        id: 5,
        name: 'Léa Richard',
        class: 'Terminale B',
        email: 'lea.richard@example.com',
        guardian: 'Philippe Richard',
        guardianEmail: 'philippe.richard@example.com',
        avatar: '',
        initials: 'LR',
    },
    {
        id: 6,
        name: 'Hugo Moreau',
        class: 'Terminale A',
        email: 'hugo.moreau@example.com',
        guardian: 'Claire Moreau',
        guardianEmail: 'claire.moreau@example.com',
        avatar: '',
        initials: 'HM',
    },
];

export default function Student() {
    return (
        <AdminLayout>
            <div className="space-y-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Gestion des élèves</h1>
                        <p className="mt-1 text-gray-500">Consultez et gérez les informations des élèves</p>
                    </div>
                    <Button className="bg-[#6366f1] hover:bg-[#4f46e5]">
                        <Plus className="mr-2 h-4 w-4" />
                        Ajouter un élève
                    </Button>
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
                                    <Input id="search" type="search" placeholder="Rechercher un élève..." className="border-gray-200 pl-8" />
                                </div>
                            </div>

                            <div className="grid w-full gap-2 md:w-[180px]">
                                <label htmlFor="class-filter" className="text-sm font-medium text-gray-700">
                                    Classe
                                </label>
                                <Select>
                                    <SelectTrigger id="class-filter" className="border-gray-200">
                                        <SelectValue placeholder="Toutes les classes" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Toutes les classes</SelectItem>
                                        <SelectItem value="seconde-a">Seconde A</SelectItem>
                                        <SelectItem value="seconde-b">Seconde B</SelectItem>
                                        <SelectItem value="premiere-a">Première A</SelectItem>
                                        <SelectItem value="premiere-b">Première B</SelectItem>
                                        <SelectItem value="terminale-a">Terminale A</SelectItem>
                                        <SelectItem value="terminale-b">Terminale B</SelectItem>
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
                                        <TableHead className="font-medium text-gray-700">Élève</TableHead>
                                        <TableHead className="font-medium text-gray-700">Classe</TableHead>
                                        <TableHead className="font-medium text-gray-700">Email</TableHead>
                                        <TableHead className="font-medium text-gray-700">Responsable légal</TableHead>
                                        <TableHead className="font-medium text-gray-700">Email du responsable</TableHead>
                                        <TableHead className="w-[80px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {students.map((student) => (
                                        <TableRow key={student.id} className="hover:bg-gray-50">
                                            <TableCell>
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="h-8 w-8 border border-gray-200">
                                                        <AvatarImage src={student.avatar || '/placeholder.svg'} alt={student.name} />
                                                        <AvatarFallback className="bg-[#e6e1ff] text-[#6366f1]">{student.initials}</AvatarFallback>
                                                    </Avatar>
                                                    <span className="font-medium text-gray-800">{student.name}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="border-[#6366f1]/20 bg-[#e6e1ff] text-[#6366f1]">
                                                    {student.class}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{student.email}</TableCell>
                                            <TableCell>{student.guardian}</TableCell>
                                            <TableCell>{student.guardianEmail}</TableCell>
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
                                                        <DropdownMenuItem className="flex cursor-pointer items-center">
                                                            <Pencil className="mr-2 h-4 w-4 text-amber-600" />
                                                            <span>Modifier</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="flex cursor-pointer items-center">
                                                            <FileText className="mr-2 h-4 w-4 text-green-600" />
                                                            <span>Voir les notes</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className="flex cursor-pointer items-center text-red-600">
                                                            <Trash2 className="mr-2 h-4 w-4" />
                                                            <span>Supprimer</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-500">Affichage de 1 à 6 sur 452 élèves</div>
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
                                        45
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
