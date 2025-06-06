import { Cour } from '@/types/models';
import { ArrowLeft, Mail, Phone, Users } from 'lucide-react';
import React from 'react';

interface  CourDetailProps {
    cour: Cour;
    onBack: () => void;
}

const CourDetail: React.FC< CourDetailProps> = ({ cour, onBack }) => {
    return (
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
            <button onClick={onBack} className="mb-6 flex items-center text-[#1E3A8A] transition-colors duration-150 hover:text-[#1e3a8a]/80">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Retour à la liste
            </button>

            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] px-4 py-5 sm:px-6">
                    <h2 className="text-xl font-bold text-white">Cour</h2>
                    <p className="mt-1 max-w-2xl text-sm text-white/80">Détails cour</p>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>

                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Identifiant</p>
                                    <p className="text-base text-gray-900">{cour.id}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Nom du cours</p>
                                        <p className="text-base text-gray-900">
                                            {cour.name}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Créer le </p>
                                        <p className="text-base text-gray-900">{cour.created_at}</p>
                                    </div>
                                </div>
                            </div>

                        <div>
                            <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900">
                                <Users className="mr-2 h-5 w-5 text-[#1E3A8A]" />
                                Informations du professeur
                            </h3>

                            <div className="space-y-4">

                                <div>
                                    <p className="text-sm font-medium text-gray-500">Nom complet</p>
                                    <p className="text-base text-gray-900">
                                    { cour.professor?.first_name} { cour.professor?.last_name} 
                                    </p>
                                </div>

                                <div className="flex items-start">
                                    <Phone className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Téléphone</p>
                                        <p className="text-base text-gray-900">{ cour.professor?.user?.phone_number}</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <Mail className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Email</p>
                                        <p className="text-base text-gray-900">{ cour.professor?.user?.email}</p>
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

export default CourDetail;