'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BookOpen, ClipboardList, GraduationCap } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function LoginForm() {
    const [role, setRole] = useState<'student' | 'professor' | 'secretary' | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (role) {
            setIsLoading(true);
            // Simulate login process
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setIsLoading(false);
            // In a real app, you would redirect to the appropriate dashboard here
            alert(`Connexion réussie en tant que ${role === 'student' ? 'élève' : role === 'professor' ? 'professeur' : 'secrétaire général'}`);
        }
    };

    return (
        <Card className="mx-auto w-full max-w-5xl space-y-6 border-indigo-100 py-10 shadow-lg">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
                <CardDescription className="text-indigo-100">Accédez à votre espace personnel</CardDescription>
            </CardHeader>

            <CardContent className="flex justify-center pt-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <h3 className="mb-4 text-lg font-medium text-indigo-800">Je suis:</h3>
                        <RadioGroup
                            value={role || ''}
                            onValueChange={(value) => setRole(value as 'student' | 'professor' | 'secretary')}
                            className="grid grid-cols-1 gap-4 md:grid-cols-3"
                        >
                            <div>
                                <Label
                                    htmlFor="login-student"
                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                        role === 'student' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <RadioGroupItem value="student" id="login-student" className="text-indigo-600" />
                                    <div className="flex items-center gap-2">
                                        <GraduationCap className={`h-5 w-5 ${role === 'student' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                        <span className="font-medium">Élève</span>
                                    </div>
                                </Label>
                            </div>

                            <div>
                                <Label
                                    htmlFor="login-professor"
                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                        role === 'professor' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <RadioGroupItem value="professor" id="login-professor" className="text-indigo-600" />
                                    <div className="flex items-center gap-2">
                                        <BookOpen className={`h-5 w-5 ${role === 'professor' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                        <span className="font-medium">Professeur</span>
                                    </div>
                                </Label>
                            </div>

                            <div>
                                <Label
                                    htmlFor="login-secretary"
                                    className={`flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition-all ${
                                        role === 'secretary' ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'
                                    }`}
                                >
                                    <RadioGroupItem value="secretary" id="login-secretary" className="text-indigo-600" />
                                    <div className="flex items-center gap-2">
                                        <ClipboardList className={`h-5 w-5 ${role === 'secretary' ? 'text-indigo-600' : 'text-gray-500'}`} />
                                        <span className="font-medium">Secrétaire Général</span>
                                    </div>
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>

                    <AnimatePresence mode="wait">
                        {role && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={`Entrez votre email ${role === 'student' ? "d'élève" : role === 'professor' ? 'de professeur' : 'de secrétaire'}`}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password">Mot de passe</Label>
                                    <Input id="password" type="password" placeholder="Entrez votre mot de passe" required />
                                </div>

                                <div className="space-y-1">
                                    <Link href="/forgot-password" className="text-sm text-indigo-600 transition-colors hover:text-indigo-800">
                                        Mot de passe oublié?
                                    </Link>
                                </div>

                                <div className='flex justify-center'>
                                    <Button
                                        type="submit"
                                        className="bg-gradient-to-r from-indigo-600 to-purple-600 px-10 hover:from-indigo-700 hover:to-purple-700"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <div className="flex items-center">
                                                <svg
                                                    className="mr-2 -ml-1 h-4 w-4 animate-spin text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                                Connexion en cours...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center">
                                                Se connecter
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </div>
                                        )}
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 rounded-b-lg border-t border-gray-100 bg-gray-50">
                <p className="text-center text-sm text-gray-600">
                    Vous n'avez pas encore de compte?{' '}
                    <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-800">
                        S'inscrire
                    </Link>
                </p>
            </CardFooter>
        </Card>
    );
}
