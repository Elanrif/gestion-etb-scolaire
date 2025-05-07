import { Student } from '@/types/models';
import { ArrowLeft, GraduationCap, Mail, Phone, UserCircle, Users } from 'lucide-react';
import React from 'react';

interface StudentDetailProps {
    student: Student;
    onBack: () => void;
}

const StudentDetail: React.FC<StudentDetailProps> = ({ student, onBack }) => {
    return (
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
            <button onClick={onBack} className="mb-6 flex items-center text-[#1E3A8A] transition-colors duration-150 hover:text-[#1e3a8a]/80">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Retour à la liste
            </button>

            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] px-4 py-5 sm:px-6">
                    <h2 className="text-xl font-bold text-white">Profil de l'étudiant</h2>
                    <p className="mt-1 max-w-2xl text-sm text-white/80">Informations personnelles et détails académiques</p>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900">
                                <UserCircle className="mr-2 h-5 w-5 text-[#1E3A8A]" />
                                Informations personnelles
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Nom complet</p>
                                    <p className="text-base text-gray-900">
                                        {student.last_name} {student.first_name}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-500">Identifiant</p>
                                    <p className="text-base text-gray-900">{student.id}</p>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-500">Date de naissance</p>
                                    <p className="text-base text-gray-900">{student.user?.birthday}</p>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-500">Genre</p>
                                    <p className="text-base text-gray-900">{student.gender}</p>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Téléphone</p>
                                        <p className="text-base text-gray-900">{student.user?.phone_number}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="text-base text-gray-900">{student.user?.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900">
                                <GraduationCap className="mr-2 h-5 w-5 text-[#1E3A8A]" />
                                Informations académiques
                            </h3>

                            <div className="mb-8 space-y-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Niveau</p>
                                    <p className="text-base text-gray-900">{student.level}</p>
                                </div>

                                <div>
                                    <p className="text-sm font-medium text-gray-500">Classe</p>
                                    <div className="mt-1">
                                        <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                                            {student.class}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900">
                                <Users className="mr-2 h-5 w-5 text-[#1E3A8A]" />
                                Informations du tuteur
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Nom complet</p>
                                    <p className="text-base text-gray-900">
                                        {student.guardian_last_name} {student.guardian_first_name}
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Téléphone</p>
                                        <p className="text-base text-gray-900">{student.guardian_phone_number}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="text-base text-gray-900">{student.guardian_email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;