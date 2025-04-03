import AppHomeLayout from '@/layouts/app/app-home-layout';
import { Award, GraduationCap, Target, Users } from 'lucide-react';

export default function About() {
    return (
        <AppHomeLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/etablissement.jpg" alt="Façade du lycée" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Notre établissement</h1>
                            <p className="mb-8 text-xl text-gray-200">Un lycée d'excellence dédié à la réussite de chaque élève</p>
                        </div>
                    </div>
                </section>

                {/* Présentation */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Notre histoire</div>
                                <h2 className="mb-4 text-3xl font-bold tracking-tighter">Plus de 50 ans d'excellence éducative</h2>
                                <p className="mb-6 text-gray-600">
                                    Fondé en 1970, le Lycée Saint-Exupéry s'est imposé comme un établissement de référence dans le paysage éducatif
                                    français. Nommé en hommage à l'écrivain et aviateur Antoine de Saint-Exupéry, notre lycée incarne les valeurs
                                    d'humanisme, de courage et d'excellence qui ont caractérisé cet homme remarquable.
                                </p>
                                <p className="text-gray-600">
                                    Au fil des décennies, nous avons formé des milliers d'élèves qui ont poursuivi des carrières brillantes dans tous
                                    les domaines. Notre engagement envers l'excellence académique, l'innovation pédagogique et le développement
                                    personnel de chaque élève reste au cœur de notre mission.
                                </p>
                            </div>
                            <div className="relative">
                                <img src="/about-image.jpg" alt="Histoire du lycée" className="rounded-lg shadow-xl" />
                                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                                    <p className="text-3xl font-bold text-blue-600">50+</p>
                                    <p className="text-sm text-gray-600">années d'excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Valeurs */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Nos valeurs</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Les piliers de notre engagement éducatif</h2>
                            <p className="text-gray-600">
                                Notre projet pédagogique repose sur des valeurs fortes qui guident notre action au quotidien et façonnent l'expérience
                                éducative de nos élèves.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                    <GraduationCap className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                                <p className="text-gray-600">
                                    Nous encourageons chaque élève à donner le meilleur de lui-même et à viser l'excellence dans tous les domaines.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                    <Users className="h-6 w-6 text-orange-600" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Bienveillance</h3>
                                <p className="text-gray-600">
                                    Nous créons un environnement bienveillant où chaque élève se sent soutenu, respecté et valorisé.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                    <Target className="h-6 w-6 text-blue-600" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Innovation</h3>
                                <p className="text-gray-600">
                                    Nous adoptons des approches pédagogiques innovantes pour préparer nos élèves aux défis du monde de demain.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                    <Award className="h-6 w-6 text-orange-600" />
                                </div>
                                <h3 className="mb-2 text-xl font-bold">Responsabilité</h3>
                                <p className="text-gray-600">
                                    Nous formons des citoyens responsables, conscients des enjeux sociaux et environnementaux de notre époque.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Chiffres clés */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">En chiffres</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Le Lycée Saint-Exupéry aujourd'hui</h2>
                            <p className="text-gray-600">Quelques chiffres qui illustrent l'ampleur et la qualité de notre établissement.</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-blue-600">850</div>
                                <p className="font-medium text-gray-600">Élèves</p>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-orange-500">45</div>
                                <p className="font-medium text-gray-600">Enseignants</p>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-blue-600">98%</div>
                                <p className="font-medium text-gray-600">Taux de réussite au bac</p>
                            </div>
                            <div className="text-center">
                                <div className="mb-2 text-5xl font-bold text-orange-500">12</div>
                                <p className="font-medium text-gray-600">Spécialités</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppHomeLayout>
    );
}