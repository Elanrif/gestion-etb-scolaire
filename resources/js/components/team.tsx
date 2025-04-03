import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppHomeLayout from '@/layouts/app/app-home-layout';
import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';

export default function TeamPage() {
    const teamMembers = [
        {
            name: 'MARIAM Ibrahim',
            role: 'Proviseure',
            image: 'images/directrice.jpg',
            description: "Directrice du lycée depuis 2018, Mme Dupont a plus de 20 ans d'expérience dans l'éducation nationale.",
            email: 'Mariam@lycee-saintexupery.fr',
        },
        {
            name: 'MOHAMED Nassur',
            role: 'Proviseur adjoint',
            image: 'images/adjoint.jpg',
            description: 'M. Martin supervise les programmes académiques et coordonne les équipes pédagogiques.',
            email: 'nassur@lycee-saintexupery.fr',
        },
        {
            name: 'MOINA HALIMA Ali ',
            role: "Conseillère principale d'éducation",
            image: 'images/conseil.jpg',
            description: 'Mme Bernard veille au bien-être des élèves et assure le suivi éducatif au quotidien.',
            email: 'moina@lycee-saintexupery.fr',
        },
        {
            name: 'SIDI Mohamed',
            role: 'Responsable des études scientifiques',
            image: '/images/scientifique.jpg',
            description: "Docteur en physique, M. Petit coordonne l'ensemble des enseignements scientifiques.",
            email: 'sidi@lycee-saintexupery.fr',
        },
        {
            name: 'Isabelle Moreau',
            role: 'Responsable des études littéraires',
            image: '/images/lettre.jpg',
            description: 'Agrégée de lettres modernes, Mme Moreau supervise les enseignements littéraires et linguistiques.',
            email: 'i.moreau@lycee-saintexupery.fr',
        },
        {
            name: 'Jean Dubois',
            role: 'Responsable des études économiques',
            image: '/images/economie.jpg',
            description: 'Ancien professeur à Sciences Po, M. Dubois dirige les enseignements en sciences économiques et sociales.',
            email: 'j.dubois@lycee-saintexupery.fr',
        },
        {
            name: 'Claire Leroy',
            role: "Responsable de l'orientation",
            image: '/images/orienter.jpg',
            description: "Mme Leroy accompagne les élèves dans la construction de leur projet d'études supérieures.",
            email: 'c.leroy@lycee-saintexupery.fr',
        },
        {
            name: 'Marc Lambert',
            role: 'Responsable vie scolaire',
            image: '/images/scolaire.jpg',
            description: 'M. Lambert coordonne les activités extra-scolaires et les projets culturels du lycée.',
            email: 'm.lambert@lycee-saintexupery.fr',
        },
    ];

    return (
        <AppHomeLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 z-0">
                        <img src="/team-hero.jpg" alt="Équipe pédagogique" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Notre équipe pédagogique</h1>
                            <p className="mb-8 text-xl text-gray-200">Des professionnels passionnés et dévoués à la réussite de nos élèves</p>
                        </div>
                    </div>
                </section>

                {/* Direction */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Notre équipe</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Une équipe expérimentée et passionnée</h2>
                            <p className="text-gray-600">
                                Découvrez les membres de notre équipe de direction et nos responsables pédagogiques qui œuvrent chaque jour pour
                                offrir un enseignement de qualité.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {teamMembers.map((member, index) => (
                                <Card key={index} className="flex h-full flex-col overflow-hidden border-none shadow-lg">
                                    <div className="flex justify-center p-6 pb-0">
                                        <div className="h-40 w-40 overflow-hidden rounded-full">
                                            <img
                                                src={member.image || `/placeholder.svg?height=300&width=300`}
                                                alt={member.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <CardContent className="flex flex-grow flex-col p-6">
                                        <div className="mb-4 text-center">
                                            <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                                            <p className="font-medium text-orange-600">{member.role}</p>
                                        </div>
                                        <p className="flex-grow text-sm text-gray-600">{member.description}</p>
                                        <div className="mt-6 border-t border-gray-100 pt-4">
                                            <Button
                                                variant="outline"
                                                className="mb-3 flex w-full items-center justify-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
                                            >
                                                <Mail className="h-4 w-4" />
                                                <span>Contacter</span>
                                            </Button>
                                            <div className="flex justify-center gap-4">
                                                <a href="#" className="text-green-600 transition-colors hover:text-green-800">
                                                    <MessageCircle className="h-5 w-5" />
                                                    <span className="sr-only">WhatsApp</span>
                                                </a>
                                                <a href="#" className="text-blue-600 transition-colors hover:text-blue-800">
                                                    <Facebook className="h-5 w-5" />
                                                    <span className="sr-only">Messenger</span>
                                                </a>
                                                <a href="#" className="text-pink-600 transition-colors hover:text-pink-800">
                                                    <Instagram className="h-5 w-5" />
                                                    <span className="sr-only">Instagram</span>
                                                </a>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Rejoindre l'équipe */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Carrières</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Rejoignez notre équipe</h2>
                            <p className="mb-8 text-gray-600">
                                Vous êtes passionné(e) par l'enseignement et souhaitez contribuer à la réussite de nos élèves ? Découvrez nos
                                opportunités de carrière.
                            </p>
                            <Button className="bg-orange-500 text-white hover:bg-orange-600">Voir nos offres d'emploi</Button>
                        </div>
                    </div>
                </section>
            </div>
        </AppHomeLayout>
    );
}
