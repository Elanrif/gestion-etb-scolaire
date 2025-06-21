import React from 'react'
import {  BookOpen, BookText, ChevronRight, LineChart, Plus,  } from 'lucide-react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import CardData from '../dashboard/card-data'
import { Classe, Cour, Matiere, Professor, Student } from '@/types/models'
import HeaderDashboard from '../dashboard/header-dashboard'
import { Link } from '@inertiajs/react'


interface HomeProps {
    students: Student[];
    professors: Professor[];
    matieres: Matiere[];
    cours: Cour[];
    classes: Classe[];
    [key: string]: Student[] | Professor[] | Matiere[] | Cour[] | Classe[];

}

export default function HomeStudent({ professors, matieres, cours, }: HomeProps) {

  return (
   <div className="space-y-6 p-4">
                <HeaderDashboard title='Espace Elève'/>
                {/* Statistiques */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <CardData
                        title="Total Professeurs"
                        value={professors.length}
                        description="+2 depuis le mois dernier"
                        icon={<BookOpen className="h-6 w-6 text-[#ec4899]" />}
                        gradientFrom="#ec4899"
                        gradientTo="#f43f5e"
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
                        title="Moyenne générale"
                        value={'14.2/20'}
                        description="Depuis le trimestre dernier"
                        icon={<LineChart className="h-6 w-6 text-[#f59e0b]" />}
                        gradientFrom="#f51647e"
                        gradientTo="#812706"
                    />
                </div>
                {/* Deuxième ligne horizontale */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Professeurs */}
                    <div>
                        <Card className="overflow-hidden border-0 shadow-md">
                            <div className="border-b border-gray-100 bg-white p-4">
                                <h2 className="text-lg font-semibold text-gray-800">Liste des cours</h2>
                                <p className="text-sm text-gray-500">Aperçu des cours disponibles</p>
                            </div>
                            <div className="divide-y divide-gray-100">
                              {cours.map((cour) => (
                            <div
                                key={cour.id}
                                className="border-b border-gray-100 p-4 transition-colors hover:bg-gray-50 md:border-b-0 md:even:border-l"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="font-medium text-gray-800">{cour.name}</p>
                                        {/* Si tu as le nombre de professeurs pour chaque matière, affiche-le ici */}
                                        {/* <div className="mt-1 flex items-center">
                                            <BookOpen className="mr-1 h-3.5 w-3.5 text-gray-400" />
                                            <p className="text-xs text-gray-500">{matiere.professors_count} professeurs</p>
                                        </div> */}
                                    </div>
                                    <Badge className="bg-indigo-100 text-indigo-600">{cour.name.substring(0, 3)}</Badge>
                                </div>
                                </div>
                                    )) }
                            </div>
                            <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
                                <Link 
                                   href={route('account.user.index_cour')} 
                                   className="text-[#6366f1] hover:text-[#4f46e5] inline-flex items-center"
                                   title="Voir toutes les matières">
                                    <BookText className="inline-block mr-2 h-4 w-4" />
                                   <span>Voir toutes les Cours</span>
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
                                    )) }
                        </div>
                            <div className="border-t border-gray-100 bg-gray-50 p-4 text-center">
                               <Link 
                                   href={route('account.user.index_matiere')} 
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
  )
}
