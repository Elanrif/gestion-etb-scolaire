import { ArrowRight, BookOpen, GraduationCap, LineChart, Users } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin-layout';

export default function AdminDashboardPage() {
    return (
        <AdminLayout>
            <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Tableau de bord administratif</h1>

                {/* Statistiques */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="flex items-center">
                            <div className="rounded-full bg-blue-100 p-3">
                                <Users className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-sm font-medium text-gray-500">Total Élèves</h2>
                                <p className="text-2xl font-semibold text-gray-900">1,248</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-green-600">+2.5%</span>
                                <span className="text-gray-500">Depuis le mois dernier</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="flex items-center">
                            <div className="rounded-full bg-green-100 p-3">
                                <BookOpen className="h-6 w-6 text-green-600" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-sm font-medium text-gray-500">Total Cours</h2>
                                <p className="text-2xl font-semibold text-gray-900">64</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-green-600">+4.2%</span>
                                <span className="text-gray-500">Depuis le mois dernier</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="flex items-center">
                            <div className="rounded-full bg-purple-100 p-3">
                                <GraduationCap className="h-6 w-6 text-purple-600" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-sm font-medium text-gray-500">Taux de réussite</h2>
                                <p className="text-2xl font-semibold text-gray-900">92%</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-green-600">+1.2%</span>
                                <span className="text-gray-500">Depuis le mois dernier</span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg bg-white p-6 shadow">
                        <div className="flex items-center">
                            <div className="rounded-full bg-yellow-100 p-3">
                                <LineChart className="h-6 w-6 text-yellow-600" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-sm font-medium text-gray-500">Moyenne générale</h2>
                                <p className="text-2xl font-semibold text-gray-900">14.2/20</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-green-600">+0.8</span>
                                <span className="text-gray-500">Depuis le trimestre dernier</span>
                            </div>
                        </div>
                    </div>
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

                {/* Activité récente */}
                <div className="rounded-lg bg-white p-6 shadow">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900">Activité récente</h2>
                    </div>
                    <div className="flow-root">
                        <ul className="-mb-8">
                            {[
                                {
                                    action: 'Note ajoutée',
                                    details: 'Mathématiques - Terminale S',
                                    user: 'M. Dupont',
                                    time: 'Il y a 5 minutes',
                                },
                                {
                                    action: 'Élève inscrit',
                                    details: 'Julie Lambert - Seconde B',
                                    user: 'Mme. Moreau',
                                    time: 'Il y a 2 heures',
                                },
                                {
                                    action: 'Cours modifié',
                                    details: 'Physique-Chimie - Première S',
                                    user: 'M. Leroy',
                                    time: 'Il y a 3 heures',
                                },
                                {
                                    action: 'Absence signalée',
                                    details: 'Antoine Girard - Terminale L',
                                    user: 'Mme. Petit',
                                    time: 'Il y a 5 heures',
                                },
                                {
                                    action: 'Document partagé',
                                    details: 'Programme de révision - Terminale S',
                                    user: 'M. Dupont',
                                    time: 'Il y a 1 jour',
                                },
                            ].map((item, index, array) => (
                                <li key={index}>
                                    <div className="relative pb-8">
                                        {index !== array.length - 1 ? (
                                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                                        ) : null}
                                        <div className="relative flex space-x-3">
                                            <div>
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white">
                                                    <svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                                <div>
                                                    <p className="text-sm text-gray-900">
                                                        {item.action} <span className="font-medium text-gray-900">{item.details}</span>
                                                    </p>
                                                    <p className="text-sm text-gray-500">Par {item.user}</p>
                                                </div>
                                                <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                                    <time>{item.time}</time>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
