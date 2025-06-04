import { Cour } from '@/types/models';
import { Link } from '@inertiajs/react';
import { Edit, Eye, Search, Trash2, UserPlus } from 'lucide-react';
import React, { useState } from 'react';

interface CourTableProps {
    cours: Cour[];
    onViewCour: (cour: Cour) => void;
    onDeleteCour: (courId: number) => void;
}

const CourList: React.FC<CourTableProps > = ({ cours,  onViewCour, onDeleteCour }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState<string>('');

    // Get unique classes for filter
    const classes = (cours.map((cour) => cour.name));
            
    // Filter students based on search and class filter
    const filteredCours = cours.filter((cour) => {
        const matchesSearch =
            cour.name.toLowerCase().includes(searchTerm.toLowerCase()) ;

        const matchesClass = selectedClass ? cour.classe?.name === selectedClass : true;

        return matchesSearch && matchesClass;
    });

    return (
        <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6 justify-between sm:flex sm:items-center">
                <h1 className="text-2xl font-bold text-gray-900">Liste des Cours</h1>
                <Link
                    href={route('dashboard.cours.create')}
                    className="mt-4 inline-flex items-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1e3a8a]/90 focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2 focus:outline-none sm:mt-0"
                >
                    <UserPlus className="mr-2 h-5 w-5" />
                    Ajouter un cours
                </Link>
            </div>

            <div className="mb-6 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
                <div className="relative w-full rounded-md sm:w-64">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-gray-500 transition duration-150 ease-in-out focus:border-[#1E3A8A] focus:ring-[#1E3A8A] focus:outline-none sm:text-sm"
                        placeholder="Rechercher..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-[#1E3A8A] focus:ring-[#1E3A8A] focus:outline-none sm:w-auto sm:text-sm"
                >
                    <option value="">Tout les cours</option>
                    {classes.map((className,index) => (
                        <option key={index} value={className}>
                            {className}
                        </option>
                    ))}
                </select>
            </div>

            <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table className="min-w-full table-auto divide-y divide-gray-200 md:table-fixed">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        ID Cours
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Nom du Cours
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Classe
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Professeur
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {filteredCours.length > 0 ? (
                                    filteredCours.map((cour,index) => (
                                        <tr key={index} className="transition-colors duration-150 hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{index + 1}</td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {cour.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {cour.classe?.name}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                                <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs leading-5 font-semibold text-blue-800">
                                                    {cour.professor?.first_name}  {cour.professor?.last_name}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap">
                                                <div className="flex justify-center space-x-2">
                                                    <button
                                                        onClick={() => onViewCour(cour)}
                                                        className="text-gray-600 transition-colors duration-150 hover:text-[#0D9488]"
                                                        aria-label="Voir détails">
                                                        <Eye className="h-5 w-5" />
                                                    </button>
                                                    <Link
                                                        href={route('dashboard.cours.edit',cour.id)}
                                                        className="text-gray-600 transition-colors duration-150 hover:text-blue-600"
                                                        aria-label="Modifier"
                                                    >
                                                        <Edit className="h-5 w-5" />
                                                    </Link>
                                                    <button
                                                        onClick={() => onDeleteCour(cour.id)}
                                                        className="text-gray-600 transition-colors duration-150 hover:text-red-600"
                                                        aria-label="Supprimer"
                                                    >
                                                        <Trash2 className="h-5 w-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                     <td colSpan={7} className="px-6 py-4 text-center text-sm text-gray-500">
                                        Aucun cours trouvé
                                     </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourList;