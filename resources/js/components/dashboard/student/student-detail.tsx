import { Student } from '@/types/models';
import { router } from '@inertiajs/react';
import { CheckCircle, GraduationCap, Mail, MapPin as MapPinHouse, MessageCircleIcon, Phone, Trash2, UserCircle, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import ActiveAccountModal from './active-account-modal';
import MessageStudentModal from './message-student-modal';
import { student_key } from '@/types/models/shared.data';

interface StudentDetailProps {
    student: Student;
}

type activateType =  "activate" | "deactivate"

const StudentDetail: React.FC<StudentDetailProps> = ({ student }) => {
    const [isValidated, setIsValidated] = useState<boolean>(student.is_validated || false);
    const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [displayModal, setDisplayModal] = useState<boolean>(false);
    const [activate, isActivate] = useState<activateType>("activate");

    useEffect(() => {
        if (isValidated) {
            localStorage.removeItem(student_key);
        }
    }, [isValidated]);
    
    const handleValidation = () => {
        router.put(route('dashboard.students.is_validated', student.id))
        
        if(student.is_validated){
            setIsValidated(false)
        }else{
            setIsValidated(true)
        }

        setShowConfirmation(true);
        setShowModal(false);
        
        setTimeout(() => {
            setShowConfirmation(false);
        }, 5000);
    };

    return (
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
            {/* Message Student Modal */}
            {
                displayModal && <MessageStudentModal
                show={displayModal}
                onClose={() => setDisplayModal(false)}
                student= {student}
            />
            }
            {/* Confirmation Modal */}
            {showModal && (activate === "activate" || activate === "deactivate") && (
                <ActiveAccountModal
                    show={showModal}
                    onClose={() => setShowModal(false)}
                    onConfirm={handleValidation}
                    title={activate === "activate" ? "Activation du compte" : "Désactivation du compte"}
                    message={`Êtes-vous sûr de vouloir ${
                    activate === "activate" ? "valider" : "désactiver"
                    } le compte de ${student.first_name} ${student.last_name} ?`}
                    confirmText="Confirmer"
                    cancelText="Annuler"
                />
            )}


            {showConfirmation && (
                <div className={`mb-4 animate-fade-in rounded-md ${student.is_validated ? "bg-green-100": "bg-red-100"} p-4 shadow-md transition-all duration-300`}>
                    <div className="flex items-center">
                        <CheckCircle className={`mr-2 h-5 w-5 ${student.is_validated ? "text-green-600": "text-red-600"}`} />
                        <p className="text-green-800">{student.is_validated ? "Le compte de l'étudiant a été validé avec succès!": "Le compte de l'étudiant a été invalidé avec succès!"}</p>
                    </div>
                </div>
            )}

            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0D9488] px-4 py-5 sm:px-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-md md:text-xl font-bold text-white">Profil de l'étudiant</h2>
                            <p className="mt-1 max-w-2xl text-xs md:text-sm text-white/80">Informations personnelles et détails académiques</p>
                        </div>
                        <div
                            className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-red-500 hover:text-slate-50 transition-colors duration-200 cursor-pointer"
                            onClick={() => setDisplayModal(true)}
                        >
                            <MessageCircleIcon className="w-5 h-5" />
                            <span className="hidden md:block">Réjeter le compte</span>
                        </div>

                        <div className="flex items-center">
                            
                            {isValidated ? (
                               <div className='flex group items-center gap-2' 
                               onClick={() => {
                                setShowModal(true)
                                isActivate("deactivate")
                               }}>
                                    <button className="flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                                        <CheckCircle className="mr-1 h-4 w-4" />
                                        Validé
                                    </button>
                                    <Trash2 className='text-white hidden md:block group-hover:text-red-300'/>
                               </div>
                            ) : (
                                <button
                                    onClick={() => {
                                        setShowModal(true)
                                        isActivate("activate")
                                    }}
                                    className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#1E3A8A] shadow-sm transition-all duration-150 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                >
                                    Valider le compte
                                </button>
                            )}
                        </div>
                    </div>
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
                                    <MapPinHouse className="mt-0.5 mr-2 h-5 w-5 text-gray-400" />
                                    <div>
                                        <p className="text-sm font-medium text-gray-500">Adresse</p>
                                        <p className="text-base text-gray-900">{student.user?.address}</p>
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
                                            {student.classe?.name}
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