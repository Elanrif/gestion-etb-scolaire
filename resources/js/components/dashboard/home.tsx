
import { Link } from '@inertiajs/react';
import {  BookOpen, BookText, ChevronRight, GraduationCap, Plus, Users } from 'lucide-react';
import { Card } from '../ui/card';
import CardData from './card-data';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Classe, Cour, Matiere, Professor, Student } from '@/types/models';
import AdminLayout from '@/layouts/admin-layout';

interface HomeProps {
    students: Student[];
    professors: Professor[];
    matieres: Matiere[];
    cours: Cour[];
    classes: Classe[];
    [key: string]: Student[] | Professor[] | Matiere[] | Cour[] | Classe[];

}

export default function Home({students, professors, matieres, cours, classes}: HomeProps) {
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
                        title="Total classes"
                        value={classes.length}
                        description="4 par niveau"
                        icon={<Users className="h-6 w-6 text-[#10b981]" />}
                        gradientFrom="#10b981"
                        gradientTo="#059669"
                    />
                    <CardData
                        title="Total matières"
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
                </div>

                {/* Résumé des notes */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Résumé des notes par classe */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Résumé des notes par classe</h2>
                             <Link 
                                   href={route('dashboard.classes.index')} 
                                   className="text-[#6366f1] hover:text-[#4f46e5] inline-flex items-center"
                                   title="Voir tout">
                                 <Users className="inline-block mr-2 h-4 w-4" />
                                   <span>Voir tout</span>
                                 <ChevronRight className="inline-block ml-2 h-4 w-4" />
                                </Link>
                        </div>
                       <div className="space-y-4">
  {classes.map((classe) => (
    <div key={classe.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
      <div>
        <h3 className="font-medium text-gray-900">{classe.name}</h3>
        <p className="text-sm text-gray-500">{classe.students?.length} élève{classe.students?.length > 1 ? 's' : ''}</p>
      </div>
      {/* Si tu veux afficher la moyenne ou autre info, adapte ici */}
    </div>
  ))}
</div>
                    </div>

                    {/* Meilleures performances */}
                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-gray-900">Meilleures performances</h2>
                             <Link 
                                   href={route('dashboard.notes.index')} 
                                   className="text-[#6366f1] hover:text-[#4f46e5] inline-flex items-center"
                                   title="Voir tout">
                                 <Users className="inline-block mr-2 h-4 w-4" />
                                   <span>Voir tout</span>
                                 <ChevronRight className="inline-block ml-2 h-4 w-4" />
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
                        {students.map((eleve) => (
                            <tr key={eleve.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {eleve.first_name} {eleve.last_name}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        {eleve.classe?.name || 'Non affecté'}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-semibold text-gray-900">
                                        {Array.isArray(eleve.notes) && eleve.notes[0]?.value !== undefined ? eleve.notes[0].value : 'N/A'}/20
                                    </div>
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
                              {professors.map((prof) => (
                            <div key={prof.id} className="p-4 transition-colors hover:bg-gray-50">
                                <div className="flex items-center">
                                    <Avatar className="h-10 w-10 border border-gray-200">
                                        <AvatarImage src={'/placeholder.svg'} alt={prof.first_name + ' ' + prof.last_name} />
                                        <AvatarFallback className="bg-[#f0e7ff] text-[#8b5cf6]">
                                            {prof.first_name?.[0]}{prof.last_name?.[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="ml-3">
                                        <p className="font-medium text-gray-800">{prof.first_name} {prof.last_name}</p>
                                        <p className="text-xs text-gray-500">{'Spécialité inconnue'}</p>
                                    </div>
                                </div>
                            </div>
))}
                            </div>

                            <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
                                <Link 
                                   href={route('dashboard.professors.index')} 
                                   className="text-[#6366f1] hover:text-[#4f46e5] inline-flex items-center"
                                   title="Voir la liste complète des professeurs">
                                 <Users className="inline-block mr-2 h-4 w-4" />
                                   <span>Voir la liste complète des professeurs</span>
                                 <ChevronRight className="inline-block ml-2 h-4 w-4" />
                                </Link>
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
                                <Link 
                                   href={route('dashboard.matieres.create')} className="inline-flex items-center px-2 py-2 bg-[#6366f1] text-white hover:bg-[#4f46e5] rounded-md shadow-sm transition duration-150"
                                   title="Ajouter une nouvelle matière">
                                    <Plus className="inline-block mr-2 h-4 w-4" />
                                    <span>Ajouter une matière</span>
                                 <ChevronRight className="inline-block ml-2 h-4 w-4" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 divide-y divide-gray-100 md:grid-cols-2 md:divide-y-0">
                               {matieres.map((matiere) => (
                            <div
                                key={matiere.id}
                                className="border-b border-gray-100 p-4 transition-colors hover:bg-gray-50 md:border-b-0 md:even:border-l"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-800">{matiere.name}</p>
                                        {/* Si tu as le nombre de professeurs pour chaque matière, affiche-le ici */}
                                        {/* <div className="mt-1 flex items-center">
                                            <BookOpen className="mr-1 h-3.5 w-3.5 text-gray-400" />
                                            <p className="text-xs text-gray-500">{matiere.professors_count} professeurs</p>
                                        </div> */}
                                    </div>
                                    <Badge className="bg-indigo-100 text-indigo-600">{matiere.name.substring(0, 3)}</Badge>
                                </div>
                            </div>
))}
                            </div>

                            <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
                                <Link 
                                   href={route('dashboard.matieres.index')} 
                                   className="text-[#6366f1] hover:text-[#4f46e5] inline-flex items-center"
                                   title="Voir toutes les matières">
                                    <BookText className="inline-block mr-2 h-4 w-4" />
                                   <span>Voir toutes les matières</span>
                                 <ChevronRight className="inline-block ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}