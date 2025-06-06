import { Note } from '@/types/models';
import { Link } from '@inertiajs/react';
import { Edit, Eye, Search, Trash2, UserPlus } from 'lucide-react';
import React, { useState } from 'react';

interface NoteTableProps {
    notes: Note[];
    onViewNote: (note: Note) => void;
    onDeleteNote: (matieretId: number) => void;
}

const NoteList: React.FC<NoteTableProps > = ({ notes,  onViewNote, onDeleteNote }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedClass, setSelectedClass] = useState<string>('');

    // Get unique classes for filter
    const classes = (notes.map((note) => note.note));
            
    // Filter students based on search and class filter
    const filteredNotes = notes.filter((note) => {
        const matchesSearch =
            note.note.toLowerCase().includes(searchTerm.toLowerCase()) ;

        //const matchesClass = selectedClass ? note.classe?.note === selectedClass : true;

        return matchesSearch; //&& matchesClass;
    });

    return (
        <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-6 justify-between sm:flex sm:items-center">
                <h1 className="text-2xl font-bold text-gray-900">Liste des Notes</h1>
                <Link
                    href={route('dashboard.notes.create')}
                    className="mt-4 inline-flex items-center rounded-md bg-[#1E3A8A] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#1e3a8a]/90 focus:ring-2 focus:ring-[#1E3A8A] focus:ring-offset-2 focus:outline-none sm:mt-0"
                >
                    <UserPlus className="mr-2 h-5 w-5" />
                    Ajouter une note
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
                    <option value="">Toutes les notes</option>
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
                                        ID Note
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Etudiant
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Note
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Matière
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Trimestre
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider whitespace-nowrap text-gray-500 uppercase"
                                    >
                                        Classe
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
                                {filteredNotes.length > 0 ? (
                                    filteredNotes.map((note,index) => (
                                        <tr key={index} className="transition-colors duration-150 hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">{index + 1}</td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                                <span className="inline-flex rounded-full bg-blue-100 px-2 text-xs leading-5 font-semibold text-blue-800">
                                                    {note.student?.first_name}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {note.note} /20
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {note.matiere?.name}
                                            </td>
                                            
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {note.trimestre}
                                            </td>
                                            <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
                                                {note.matiere?.classe?.name}
                                            </td>
                                            <td className="px-6 py-4 text-center text-sm font-medium whitespace-nowrap">
                                                <div className="flex justify-center space-x-2">
                                                    <button
                                                        onClick={() => onViewNote(note)}
                                                        className="text-gray-600 transition-colors duration-150 hover:text-[#0D9488]"
                                                        aria-label="Voir détails">
                                                        <Eye className="h-5 w-5" />
                                                    </button>
                                                    <Link
                                                        href={route('dashboard.notes.edit',note.id)}
                                                        className="text-gray-600 transition-colors duration-150 hover:text-blue-600"
                                                        aria-label="Modifier"
                                                    >
                                                        <Edit className="h-5 w-5" />
                                                    </Link>
                                                    <button
                                                        onClick={() => onDeleteNote(note.id)}
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
                                        Aucune note trouvé
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

export default NoteList;