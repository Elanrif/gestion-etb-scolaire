import AdminLayout from '@/layouts/admin-layout';
import { Link } from '@inertiajs/react';
import { ArrowRight, BookOpen, BookText, ChevronRight, GraduationCap, LineChart, Plus, Users } from 'lucide-react';
import { Card } from '../ui/card';
import CardData from './card-data';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Classe, Cour, Matiere, Professor, Student } from '@/types/models';

interface HomeProps {
    students: Student[];
    professors: Professor[];
    matieres: Matiere[];
    cours: Cour[];
    classes: Classe[];
    [key: string]: Student[] | Professor[] | Matiere[] | Cour[] | Classe[];

}


export default function Home({students, professors, matieres, cours, classes}: HomeProps) {

    // Données d'exemple pour les professeurs
    const teachers = [
        { id: 1, name: 'Martin Dupont', subject: 'Mathématiques', avatar: '', initials: 'MD' },
        { id: 2, name: 'Sophie Martin', subject: 'Français', avatar: '', initials: 'SM' },
        { id: 3, name: 'Jean Lefebvre', subject: 'Histoire-Géo', avatar: '', initials: 'JL' },
    ];

    // Données d'exemple pour les matières
    const subjects = [
        { id: 1, name: 'Mathématiques', teachers: 4, color: 'bg-green-100 text-green-600' },
        { id: 2, name: 'Français', teachers: 3, color: 'bg-yellow-100 text-yellow-600' },
        { id: 3, name: 'Histoire-Géo', teachers: 2, color: 'bg-red-100 text-red-600' },
        { id: 4, name: 'Physique-Chimie', teachers: 2, color: 'bg-indigo-100 text-indigo-600' },
    ];
    return (
        <AdminLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Tableau de bord administratif</h1>

                {/* Statistiques */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <CardData
                        title="Total Élèves"
                        value={students.length}
                        description="+5 depuis la semaine dernière"
                        icon={<GraduationCap className="h-6 w-6 text-[#6366f1]" />}
                        gradientFrom="#6366f1"
                        gradientTo="#a78bfa"
                    />
                    <CardData
                        title="Total Professeurs"
                        value={professors.length}
                        description="+2 depuis le mois dernier"
                        icon={<BookOpen className="h-6 w-6 text-[#ec4899]" />}
                        gradientFrom="#ec4899"
                        gradientTo="#f43f5e"
                    />
                    <CardData
                        title="Classes"
                        value={classes.length}
                        description="4 par niveau"
                        icon={<Users className="h-6 w-6 text-[#10b981]" />}
                        gradientFrom="#10b981"
                        gradientTo="#059669"
                    />
                    <CardData
                        title="Matières"
                        value={matieres.length}
                        description="Réparties sur tous les niveaux"
                        icon={<BookText className="h-6 w-6 text-[#f59e0b]" />}
                        gradientFrom="#f59e0b"
                        gradientTo="#d97706"
                    />
                    <CardData
                        title="Total Cours"
                        value={cours.length}
                        description="Depuis le mois dernier"
                        icon={<BookText className="h-6 w-6 text-[#f59e0b]" />}
                        gradientFrom="#f19e12"
                        gradientTo="#d93306"
                    />
                    <CardData
                        title="Taux de réussite"
                        value={'92%'}
                        description="Réparties sur tous les niveaux"
                        icon={<GraduationCap className="h-6 w-6 text-[#f59e0b]" />}
                        gradientFrom="#f5000b"
                        gradientTo="#d102706"
                    />
                    <CardData
                        title="Moyenne générale"
                        value={'14.2/20'}
                        description="Depuis le trimestre dernier"
                        icon={<LineChart className="h-6 w-6 text-[#f59e0b]" />}
                        gradientFrom="#f51647e"
                        gradientTo="#812706"
                    />
                </div>

                {/* Résumé des notes */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Résumé des notes par classe */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Résumé des notes par classe</h2>
                            <Link href="/admin/grades" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                                Voir tout <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="space-y-4">
                            {[
                                { classe: 'Seconde A', moyenne: 13.8, tendance: '+0.5', eleves: 32 },
                                { classe: 'Seconde B', moyenne: 12.5, tendance: '-0.2', eleves: 30 },
                                { classe: 'Première S', moyenne: 14.2, tendance: '+0.7', eleves: 28 },
                                { classe: 'Première L', moyenne: 13.9, tendance: '+0.3', eleves: 25 },
                                { classe: 'Terminale S', moyenne: 15.1, tendance: '+1.2', eleves: 30 },
                            ].map((classe, index) => (
                                <div key={index} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                                    <div>
                                        <h3 className="font-medium text-gray-900">{classe.classe}</h3>
                                        <p className="text-sm text-gray-500">{classe.eleves} élèves</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold text-gray-900">{classe.moyenne}/20</p>
                                        <p className={`text-sm ${classe.tendance.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                            {classe.tendance} pts
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Meilleures performances */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Meilleures performances</h2>
                            <Link href="/admin/students" className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800">
                                Voir tout <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                        </div>
                        <div className="overflow-hidden rounded-lg border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Élève
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Classe
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase">
                                            Moyenne
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {[
                                        { nom: 'Sophie Martin', classe: 'Terminale S', moyenne: 18.5 },
                                        { nom: 'Lucas Dubois', classe: 'Première S', moyenne: 17.8 },
                                        { nom: 'Emma Bernard', classe: 'Terminale S', moyenne: 17.6 },
                                        { nom: 'Thomas Petit', classe: 'Première L', moyenne: 17.2 },
                                        { nom: 'Léa Richard', classe: 'Seconde A', moyenne: 16.9 },
                                    ].map((eleve, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{eleve.nom}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{eleve.classe}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-semibold text-gray-900">{eleve.moyenne}/20</div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Deuxième ligne horizontale */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Professeurs */}
                    <div>
                        <Card className="overflow-hidden border-0 shadow-md">
                            <div className="border-b border-gray-100 bg-white p-4">
                                <h2 className="text-lg font-semibold text-gray-800">Professeurs</h2>
                                <p className="text-sm text-gray-500">Équipe pédagogique</p>
                            </div>

                            <div className="divide-y divide-gray-100">
                                {teachers.map((teacher) => (
                                    <div key={teacher.id} className="p-4 transition-colors hover:bg-gray-50">
                                        <div className="flex items-center">
                                            <Avatar className="h-10 w-10 border border-gray-200">
                                                <AvatarImage src={teacher.avatar || '/placeholder.svg'} alt={teacher.name} />
                                                <AvatarFallback className="bg-[#f0e7ff] text-[#8b5cf6]">{teacher.initials}</AvatarFallback>
                                            </Avatar>
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-800">{teacher.name}</p>
                                                <p className="text-xs text-gray-500">{teacher.subject}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
                                <Button variant="link" className="text-[#6366f1] hover:text-[#4f46e5]">
                                    Voir tous les professeurs
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* Matières */}
                    <div className="lg:col-span-2">
                        <Card className="overflow-hidden border-0 shadow-md">
                            <div className="flex items-center justify-between border-b border-gray-100 bg-white p-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">Matières</h2>
                                    <p className="text-sm text-gray-500">Aperçu des matières enseignées</p>
                                </div>
                                <Button size="sm" className="bg-[#6366f1] hover:bg-[#4f46e5]">
                                    <Plus className="mr-1 h-4 w-4" />
                                    Ajouter
                                </Button>
                            </div>

                            <div className="grid grid-cols-1 divide-y divide-gray-100 md:grid-cols-2 md:divide-y-0">
                                {subjects.map((subject) => (
                                    <div
                                        key={subject.id}
                                        className="border-b border-gray-100 p-4 transition-colors hover:bg-gray-50 md:border-b-0 md:even:border-l"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-gray-800">{subject.name}</p>
                                                <div className="mt-1 flex items-center">
                                                    <BookOpen className="mr-1 h-3.5 w-3.5 text-gray-400" />
                                                    <p className="text-xs text-gray-500">{subject.teachers} professeurs</p>
                                                </div>
                                            </div>
                                            <Badge className={subject.color}>{subject.name.substring(0, 3)}</Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
                                <Button variant="link" className="text-[#6366f1] hover:text-[#4f46e5]">
                                    Voir toutes les matières
                                    <ChevronRight className="ml-1 h-4 w-4" />
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}