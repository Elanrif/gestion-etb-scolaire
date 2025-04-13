'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, ClipboardList, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { SecretaryForm } from './secretary-form';
import { ProfessorForm } from './professor-form';
import { StudentForm } from './student-form';
import { Link } from '@inertiajs/react';

export default function RegistrationForm() {
    const [role, setRole] = useState<'student' | 'professor' | 'secretary' | null>(null);

    return (
        <Card className="w-full border-indigo-100 shadow-lg">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <CardTitle className="text-2xl font-bold">Inscription</CardTitle>
                <CardDescription className="text-indigo-100">Sélectionnez votre rôle et complétez le formulaire</CardDescription>
            </CardHeader>

            <CardContent className="pt-6">
                <div className="mb-6">
                    <h3 className="mb-4 text-lg font-medium text-indigo-800">Je suis:</h3>
                    <p className="before:mr-1 mb-2 text-sm text-slate-800 italic before:text-red-500 before:content-['*']">champs obligatoire</p>
                    <RadioGroup
                        value={role || ''}
                        onValueChange={(value) => setRole(value as 'student' | 'professor' | 'secretary')}
                        className="grid grid-cols-1 gap-4 md:grid-cols-3"
                    >
                        <div>
                            <Label
                                htmlFor="student"
                                className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                    role === 'student' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                }`}
                            >
                                <RadioGroupItem value="student" id="student" className="text-indigo-600" />
                                <div className="flex items-center gap-2">
                                    <GraduationCap className={`h-5 w-5 ${role === 'student' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                    <span className="font-medium">Élève</span>
                                </div>
                            </Label>
                        </div>

                        <div>
                            <Label
                                htmlFor="professor"
                                className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                    role === 'professor' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                }`}
                            >
                                <RadioGroupItem value="professor" id="professor" className="text-indigo-600" />
                                <div className="flex items-center gap-2">
                                    <BookOpen className={`h-5 w-5 ${role === 'professor' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                    <span className="font-medium">Professeur</span>
                                </div>
                            </Label>
                        </div>

                        <div>
                            <Label
                                htmlFor="secretary"
                                className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                    role === 'secretary' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                }`}
                            >
                                <RadioGroupItem value="secretary" id="secretary" className="text-indigo-600" />
                                <div className="flex items-center gap-2">
                                    <ClipboardList className={`h-5 w-5 ${role === 'secretary' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                    <span className="font-medium">Secrétaire Général</span>
                                </div>
                            </Label>
                        </div>
                    </RadioGroup>
                </div>

                <AnimatePresence mode="wait">
                    {role === 'student' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <StudentForm />
                        </motion.div>
                    )}

                    {role === 'professor' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProfessorForm />
                        </motion.div>
                    )}

                    {role === 'secretary' && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <SecretaryForm />
                        </motion.div>
                    )}
                </AnimatePresence>
            </CardContent>

            <CardFooter className="flex justify-center rounded-b-lg border-t border-gray-100 bg-gray-50">
                <div>
                    <p className="text-center text-sm text-gray-600">
                        Vous avez déjà un compte ?{' '}
                        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-800">
                            Se connecter
                        </Link>
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
}
