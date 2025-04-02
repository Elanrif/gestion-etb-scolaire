import React from 'react'
import { ArrowRight, Award, BookOpen, Calendar, GraduationCap, Users } from 'lucide-react';
import { Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomeApp() {
  return (
    <div>
        <div className="flex min-h-screen flex-col bg-white">
                {/* Hero Section avec image d'arrière-plan */}
                <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/image1.jpg" alt="Campus du lycée" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-6">
                                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">
                                    Bienvenue au Lycée Saint-Exupéry
                                </div>
                                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                                    Construisez votre avenir avec nous
                                </h1>
                                <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed">
                                    Notre établissement s'engage à offrir une éducation d'excellence et à accompagner chaque élève vers la réussite.
                                </p>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href="/register">
                                        <Button className="bg-orange-500 text-white hover:bg-orange-600">
                                            S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="/login">
                                        <Button variant="outline" className="border-white hover:bg-white/80">
                                            Se connecter
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="relative hidden lg:block">
                                <div className="relative rounded-2xl border border-white/10 bg-white/10 p-8 shadow-2xl">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-4">
                                            <GraduationCap className="mb-2 h-10 w-10 text-white" />
                                            <h3 className="text-xl font-bold text-white">98%</h3>
                                            <p className="text-sm text-gray-200">Taux de réussite au bac</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-4">
                                            <Users className="mb-2 h-10 w-10 text-white" />
                                            <h3 className="text-xl font-bold text-white">850</h3>
                                            <p className="text-sm text-gray-200">Élèves</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-4">
                                            <Award className="mb-2 h-10 w-10 text-white" />
                                            <h3 className="text-xl font-bold text-white">45</h3>
                                            <p className="text-sm text-gray-200">Enseignants</p>
                                        </div>
                                        <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 p-4">
                                            <BookOpen className="mb-2 h-10 w-10 text-white" />
                                            <h3 className="text-xl font-bold text-white">12</h3>
                                            <p className="text-sm text-gray-200">Spécialités</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Actualités */}
                <section className="w-full bg-white py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mb-10 flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Actualités</div>
                                <h2 className="text-3xl font-bold tracking-tighter text-black sm:text-4xl md:text-5xl">Les dernières nouvelles</h2>
                                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                                    Restez informé des événements et activités de notre établissement
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card className="group overflow-hidden border-none shadow-lg">
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src="images/remise.jpg"
                                        alt="Remise des diplômes"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-black">
                                        <Calendar className="h-3 w-3" /> 15 juin 2023
                                    </div>
                                </div>
                                <CardHeader className="p-4">
                                    <CardTitle className="text-xl text-black">Cérémonie de remise des diplômes</CardTitle>
                                    <CardDescription>Retour sur la cérémonie de remise des diplômes de la promotion 2023</CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="line-clamp-3 text-sm text-gray-600">
                                        La cérémonie de remise des diplômes s'est déroulée dans une ambiance festive. Félicitations à tous nos
                                        bacheliers pour leur réussite et leur parcours exemplaire.
                                    </p>
                                    <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                                        Lire la suite <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </CardContent>
                            </Card>
                            <Card className="group overflow-hidden border-none shadow-lg">
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src="/images/sport.jpg"
                                        alt="Compétition sportive"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-black">
                                        <Calendar className="h-3 w-3" /> 10 mai 2023
                                    </div>
                                </div>
                                <CardHeader className="p-4">
                                    <CardTitle className="text-xl text-black">Victoire au championnat inter-lycées</CardTitle>
                                    <CardDescription>Notre équipe de basket remporte le championnat régional</CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="line-clamp-3 text-sm text-gray-600">
                                        Après une saison exceptionnelle, notre équipe de basket a remporté la finale du championnat régional
                                        inter-lycées. Une fierté pour notre établissement !
                                    </p>
                                    <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                                        Lire la suite <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </CardContent>
                            </Card>
                            <Card className="group overflow-hidden border-none shadow-lg">
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src="/images/projet.jpg"
                                        alt="Projet scientifique"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-black">
                                        <Calendar className="h-3 w-3" /> 22 avril 2023
                                    </div>
                                </div>
                                <CardHeader className="p-4">
                                    <CardTitle className="text-xl text-black">Prix de l'innovation scientifique</CardTitle>
                                    <CardDescription>Des élèves de Terminale S récompensés pour leur projet</CardDescription>
                                </CardHeader>
                                <CardContent className="p-4 pt-0">
                                    <p className="line-clamp-3 text-sm text-gray-600">
                                        Quatre élèves de Terminale S ont reçu le prix de l'innovation scientifique pour leur projet sur les énergies
                                        renouvelables lors du concours national des jeunes chercheurs.
                                    </p>
                                    <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline">
                                        Lire la suite <ArrowRight className="ml-1 h-3 w-3" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Section Formations avec image d'arrière-plan */}
                <section className="relative w-full overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/salle.jpg" alt="Salle de classe" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/85" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white">Nos formations</div>
                                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                                    Des parcours adaptés à chaque élève
                                </h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                                    Découvrez nos filières d'excellence et nos spécialités
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-xl border border-white/10 bg-white/10 p-6 transition-colors hover:bg-white/20">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">Filière Générale</h3>
                                <p className="mb-4 text-gray-300">
                                    Préparez-vous aux études supérieures avec nos spécialités variées : mathématiques, physique-chimie, SVT, sciences
                                    économiques, Agronomie ...
                                </p>
                                <Link href="#" className="inline-flex items-center text-sm font-medium text-orange-300 hover:text-white">
                                    Découvrir <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/10 p-6 transition-colors hover:bg-white/20">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
                                    <GraduationCap className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">Filière Technologique</h3>
                                <p className="mb-4 text-gray-300">
                                    Optez pour une formation alliant théorie et pratique avec nos baccalauréats STMG, STI2D et ST2S pour une insertion
                                    professionnelle réussie.
                                </p>
                                <Link href="#" className="inline-flex items-center text-sm font-medium text-blue-300 hover:text-white">
                                    Découvrir <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                            <div className="rounded-xl border border-white/10 bg-white/10 p-6 transition-colors hover:bg-white/20">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500">
                                    <Award className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-white">Sections Internationales</h3>
                                <p className="mb-4 text-gray-300">
                                    Développez vos compétences linguistiques avec nos sections internationales anglais, espagnol et allemand pour un
                                    parcours à dimension internationale.
                                </p>
                                <Link href="#" className="inline-flex items-center text-sm font-medium text-orange-300 hover:text-white">
                                    Découvrir <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section avec image d'arrière-plan */}
                <section className="relative w-full overflow-hidden py-20 md:py-32">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/campus1.jpg" alt="Campus du lycée" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/80" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-6 text-center">
                            <div className="space-y-3">
                                <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">Prêt à nous rejoindre?</h2>
                                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed">
                                    Inscrivez-vous dès maintenant ou contactez-nous pour plus d'informations.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 min-[400px]:flex-row">
                                <Link href="/register">
                                    <Button className="bg-orange-500 text-white hover:bg-orange-600">S'inscrire</Button>
                                </Link>
                                <Link href="/contact">
                                    <Button variant="outline" className="border-white hover:bg-white/80">
                                        Nous contacter
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    </div>
  )
}
