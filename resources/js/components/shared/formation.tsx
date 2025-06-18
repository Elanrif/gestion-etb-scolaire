import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Award, BookOpen, Briefcase, Clock, GraduationCap, Users } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AppHomeLayout from '@/layouts/app/app-home-layout';

export default function Formations() {
    return (
        <AppHomeLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/formations.jpg" alt="Formations" className="w-full object-cover aspect-[16/9]" />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Nos formations</h1>
                            <p className="mb-8 text-xl text-gray-200">Des parcours d'excellence adaptés à chaque profil d'élève</p>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Notre offre éducative</div>
                                <h2 className="mb-4 text-3xl font-bold tracking-tighter">Une formation complète et exigeante</h2>
                                <p className="mb-6 text-gray-600">
                                    Le Lycée Said Mohamed Cheikh propose un large éventail de formations pour répondre aux aspirations et aux talents de
                                    chaque élève. Notre projet pédagogique vise l'excellence académique tout en favorisant l'épanouissement personnel
                                    et le développement de compétences transversales essentielles.
                                </p>
                                <p className="text-gray-600">
                                    Nos équipes pédagogiques expérimentées accompagnent chaque élève dans la construction de son parcours, en tenant
                                    compte de ses aptitudes, de ses centres d'intérêt et de son projet d'orientation.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="rounded-xl bg-blue-50 p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                        <GraduationCap className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">98%</h3>
                                    <p className="text-sm text-gray-600">Taux de réussite au baccalauréat</p>
                                </div>
                                <div className="rounded-xl bg-orange-50 p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                        <Award className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">85%</h3>
                                    <p className="text-sm text-gray-600">Mentions au baccalauréat</p>
                                </div>
                                <div className="rounded-xl bg-blue-50 p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                        <Users className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">24</h3>
                                    <p className="text-sm text-gray-600">Élèves par classe en moyenne</p>
                                </div>
                                <div className="rounded-xl bg-orange-50 p-6">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                        <Briefcase className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">95%</h3>
                                    <p className="text-sm text-gray-600">Taux d'insertion dans l'enseignement supérieur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Formations */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Nos filières</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Découvrez nos parcours de formation</h2>
                            <p className="text-gray-600">
                                Explorez nos différentes filières et spécialités pour trouver celle qui correspond le mieux à votre profil et à vos
                                ambitions.
                            </p>
                        </div>

                        <Tabs defaultValue="generale" className="space-y-8">
                            <TabsList className="grid w-full grid-cols-1 gap-2 md:grid-cols-3">
                                <TabsTrigger value="generale">Filière Générale</TabsTrigger>
                                <TabsTrigger value="technologique">Filière Technologique</TabsTrigger>
                                <TabsTrigger value="internationale">Sections Internationales</TabsTrigger>
                            </TabsList>

                            <TabsContent value="generale" className="space-y-8">
                                <div className="rounded-xl bg-white p-8 shadow-md">
                                    <div className="mb-6 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                            <BookOpen className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Baccalauréat Général</h3>
                                            <p className="text-gray-600">Préparez-vous aux études supérieures avec un parcours exigeant</p>
                                        </div>
                                    </div>

                                    <p className="mb-6 text-gray-600">
                                        La filière générale propose un enseignement approfondi dans les disciplines fondamentales et permet aux élèves
                                        de se spécialiser progressivement en fonction de leurs centres d'intérêt et de leur projet d'orientation.
                                    </p>

                                    <h4 className="mb-4 text-xl font-bold">Nos spécialités</h4>
                                    <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Mathématiques</h5>
                                            <p className="text-sm text-gray-600">
                                                Approfondissement des concepts mathématiques et développement de la rigueur analytique.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Physique-Chimie</h5>
                                            <p className="text-sm text-gray-600">
                                                Étude des phénomènes physiques et chimiques à travers l'expérimentation et la modélisation.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Sciences de la Vie et de la Terre</h5>
                                            <p className="text-sm text-gray-600">
                                                Exploration du vivant et de la Terre pour comprendre les enjeux contemporains.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Histoire-Géographie, Géopolitique et Sciences Politiques</h5>
                                            <p className="text-sm text-gray-600">
                                                Analyse des enjeux politiques, sociaux et géopolitiques du monde contemporain.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Humanités, Littérature et Philosophie</h5>
                                            <p className="text-sm text-gray-600">
                                                Réflexion sur les grandes questions qui structurent la pensée et la création littéraire.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Langues, Littératures et Cultures Étrangères</h5>
                                            <p className="text-sm text-gray-600">
                                                Approfondissement linguistique et culturel en anglais, espagnol ou allemand.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Sciences Économiques et Sociales</h5>
                                            <p className="text-sm text-gray-600">
                                                Compréhension des mécanismes économiques, sociaux et politiques des sociétés contemporaines.
                                            </p>
                                        </div>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            <h5 className="mb-2 font-bold">Numérique et Sciences Informatiques</h5>
                                            <p className="text-sm text-gray-600">
                                                Initiation aux concepts fondamentaux de l'informatique et au codage.
                                            </p>
                                        </div>
                                    </div>

                                    <Link href="/contact">
                                        <Button className="bg-blue-600 text-white hover:bg-blue-700">Demander plus d'informations</Button>
                                    </Link>
                                </div>
                            </TabsContent>

                            <TabsContent value="technologique" className="space-y-8">
                                <div className="rounded-xl bg-white p-8 shadow-md">
                                    <div className="mb-6 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                            <GraduationCap className="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Baccalauréats Technologiques</h3>
                                            <p className="text-gray-600">
                                                Des formations alliant théorie et pratique pour une insertion professionnelle réussie
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mb-6 text-gray-600">
                                        Les filières technologiques proposent un enseignement équilibré entre théorie et pratique, permettant aux
                                        élèves d'acquérir des compétences spécifiques dans différents domaines professionnels tout en conservant la
                                        possibilité de poursuivre des études supérieures.
                                    </p>

                                    <h4 className="mb-4 text-xl font-bold">Nos filières technologiques</h4>
                                    <div className="mb-8 space-y-6">
                                        <div className="rounded-lg bg-gray-50 p-6">
                                            <h5 className="mb-2 text-lg font-bold">STMG - Sciences et Technologies du Management et de la Gestion</h5>
                                            <p className="mb-4 text-gray-600">
                                                Formation aux fondamentaux de l'économie, du droit et du management des organisations.
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-orange-500" />
                                                    <span>Durée : 3 ans</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-orange-500" />
                                                    <span>30 places</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-lg bg-gray-50 p-6">
                                            <h5 className="mb-2 text-lg font-bold">
                                                STI2D - Sciences et Technologies de l'Industrie et du Développement Durable
                                            </h5>
                                            <p className="mb-4 text-gray-600">
                                                Formation aux sciences et technologies industrielles avec une sensibilisation aux enjeux du
                                                développement durable.
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-orange-500" />
                                                    <span>Durée : 3 ans</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-orange-500" />
                                                    <span>24 places</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-lg bg-gray-50 p-6">
                                            <h5 className="mb-2 text-lg font-bold">ST2S - Sciences et Technologies de la Santé et du Social</h5>
                                            <p className="mb-4 text-gray-600">
                                                Formation aux questions de santé et aux problématiques sociales pour préparer aux métiers du secteur
                                                médico-social.
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-orange-500" />
                                                    <span>Durée : 3 ans</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-orange-500" />
                                                    <span>28 places</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/contact">
                                        <Button className="bg-orange-500 text-white hover:bg-orange-600">Demander plus d'informations</Button>
                                    </Link>
                                </div>
                            </TabsContent>

                            <TabsContent value="internationale" className="space-y-8">
                                <div className="rounded-xl bg-white p-8 shadow-md">
                                    <div className="mb-6 flex items-center gap-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                            <Award className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">Sections Internationales</h3>
                                            <p className="text-gray-600">Une ouverture sur le monde et une excellence linguistique</p>
                                        </div>
                                    </div>

                                    <p className="mb-6 text-gray-600">
                                        Les sections internationales offrent un enseignement bilingue et biculturel, permettant aux élèves de
                                        développer une excellente maîtrise d'une langue étrangère et une connaissance approfondie de la culture des
                                        pays concernés.
                                    </p>

                                    <h4 className="mb-4 text-xl font-bold">Nos sections internationales</h4>
                                    <div className="mb-8 space-y-6">
                                        <div className="rounded-lg bg-gray-50 p-6">
                                            <h5 className="mb-2 text-lg font-bold">Section Internationale Britannique</h5>
                                            <p className="mb-4 text-gray-600">
                                                Enseignement renforcé en anglais avec des cours de littérature et d'histoire-géographie dispensés en
                                                anglais par des professeurs natifs.
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-blue-500" />
                                                    <span>9h hebdomadaires en anglais</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-blue-500" />
                                                    <span>Admission sur test</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-lg bg-gray-50 p-6">
                                            <h5 className="mb-2 text-lg font-bold">Section Internationale Espagnole</h5>
                                            <p className="mb-4 text-gray-600">
                                                Enseignement renforcé en espagnol avec des cours de littérature et d'histoire-géographie dispensés en
                                                espagnol par des professeurs natifs.
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-blue-500" />
                                                    <span>9h hebdomadaires en espagnol</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-blue-500" />
                                                    <span>Admission sur test</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-lg bg-gray-50 p-6">
                                            <h5 className="mb-2 text-lg font-bold">Section Internationale Allemande</h5>
                                            <p className="mb-4 text-gray-600">
                                                Enseignement renforcé en allemand avec des cours de littérature et d'histoire-géographie dispensés en
                                                allemand par des professeurs natifs.
                                            </p>
                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="h-4 w-4 text-blue-500" />
                                                    <span>9h hebdomadaires en allemand</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Users className="h-4 w-4 text-blue-500" />
                                                    <span>Admission sur test</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/contact">
                                        <Button className="bg-blue-600 text-white hover:bg-blue-700">Demander plus d'informations</Button>
                                    </Link>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>

                {/* Orientation */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div className="relative">
                                <img src="/orientation.jpg" alt="Orientation" className="rounded-lg shadow-xl" />
                                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                                    <p className="text-3xl font-bold text-orange-500">95%</p>
                                    <p className="text-sm text-gray-600">de réussite dans l'orientation</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4 inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Orientation</div>
                                <h2 className="mb-4 text-3xl font-bold tracking-tighter">Un accompagnement personnalisé vers la réussite</h2>
                                <p className="mb-6 text-gray-600">
                                    Au Lycéé Said Mohamed Cheickh, nous accordons une importance particulière à l'orientation de nos élèves. Notre équipe
                                    pédagogique et nos conseillers d'orientation accompagnent chaque élève dans la construction de son projet d'études
                                    et professionnel.
                                </p>
                                <p className="mb-8 text-gray-600">
                                    Nous organisons régulièrement des forums des métiers, des rencontres avec des professionnels et des anciens
                                    élèves, ainsi que des visites d'établissements d'enseignement supérieur pour aider nos élèves à faire des choix
                                    éclairés.
                                </p>
                                <Link href="/contact">
                                    <Button className="bg-orange-500 text-white hover:bg-orange-600">
                                        Prendre rendez-vous avec un conseiller <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppHomeLayout>
    );
}
