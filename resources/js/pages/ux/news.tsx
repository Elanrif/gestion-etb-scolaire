import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Calendar, ChevronRight, Filter, Search } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AppHomeLayout from '@/layouts/app/app-home-layout';

export default function NewsPage() {
    const newsArticles = [
        {
            id: 1,
            title: 'Cérémonie de remise des diplômes',
            description: 'Retour sur la cérémonie de remise des diplômes de la promotion 2023',
            excerpt:
                "La cérémonie de remise des diplômes s'est déroulée dans une ambiance festive. Félicitations à tous nos bacheliers pour leur réussite et leur parcours exemplaire.",
            image: '/news-1.jpg',
            date: '15 juin 2023',
            category: 'Événements',
        },
        {
            id: 2,
            title: 'Victoire au championnat inter-lycées',
            description: 'Notre équipe de basket remporte le championnat régional',
            excerpt:
                'Après une saison exceptionnelle, notre équipe de basket a remporté la finale du championnat régional inter-lycées. Une fierté pour notre établissement !',
            image: '/news-2.jpg',
            date: '10 mai 2023',
            category: 'Sport',
        },
        {
            id: 3,
            title: "Prix de l'innovation scientifique",
            description: 'Des élèves de Terminale S récompensés pour leur projet',
            excerpt:
                "Quatre élèves de Terminale S ont reçu le prix de l'innovation scientifique pour leur projet sur les énergies renouvelables lors du concours national des jeunes chercheurs.",
            image: '/news-3.jpg',
            date: '22 avril 2023',
            category: 'Sciences',
        },
        {
            id: 4,
            title: 'Journée portes ouvertes 2023',
            description: 'Venez découvrir notre établissement le 18 mars',
            excerpt:
                'Le Lycée Saint-Exupéry ouvre ses portes le samedi 18 mars de 9h à 17h. Une occasion unique de découvrir nos installations, de rencontrer nos équipes et de vous informer sur nos formations.',
            image: '/news-4.jpg',
            date: '5 mars 2023',
            category: 'Événements',
        },
        {
            id: 5,
            title: "Conférence sur l'intelligence artificielle",
            description: 'Un expert de renommée internationale à la rencontre de nos élèves',
            excerpt:
                "Dans le cadre de notre cycle de conférences, nous avons eu l'honneur d'accueillir le Professeur Martin, expert en intelligence artificielle, pour une présentation passionnante sur les enjeux et perspectives de cette technologie.",
            image: '/news-5.jpg',
            date: '15 février 2023',
            category: 'Conférences',
        },
        {
            id: 6,
            title: 'Voyage scolaire à Londres',
            description: 'Les élèves de Première découvrent la capitale britannique',
            excerpt:
                'Les élèves de Première de la section internationale britannique ont passé une semaine à Londres pour perfectionner leur anglais et découvrir la richesse culturelle de la capitale britannique.',
            image: '/news-6.jpg',
            date: '10 janvier 2023',
            category: 'Voyages',
        },
        {
            id: 7,
            title: "Spectacle de fin d'année",
            description: 'Une représentation théâtrale exceptionnelle',
            excerpt:
                "Les élèves de l'atelier théâtre ont présenté leur spectacle de fin d'année devant un public conquis. Une adaptation originale de 'Le Songe d'une nuit d'été' de Shakespeare.",
            image: '/news-7.jpg',
            date: '15 décembre 2022',
            category: 'Culture',
        },
        {
            id: 8,
            title: "Semaine de l'orientation",
            description: "Une semaine dédiée à l'avenir de nos élèves",
            excerpt:
                "La semaine de l'orientation a permis à nos élèves de rencontrer des professionnels de divers secteurs et de découvrir les formations post-bac qui s'offrent à eux.",
            image: '/news-8.jpg',
            date: '28 novembre 2022',
            category: 'Orientation',
        },
    ];

    return (
        <AppHomeLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 z-0">
                        <img src="/news-hero.jpg" alt="Actualités" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Actualités</h1>
                            <p className="mb-8 text-xl text-gray-200">Restez informé des dernières nouvelles et événements du lycée</p>
                        </div>
                    </div>
                </section>

                {/* Filtres et recherche */}
                <section className="border-b py-8">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="relative w-full md:w-auto">
                                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-500" />
                                <Input type="search" placeholder="Rechercher une actualité..." className="w-full pl-10 md:w-[300px]" />
                            </div>
                            <div className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
                                <div className="flex items-center gap-2">
                                    <Filter className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm text-gray-600">Filtrer par :</span>
                                </div>
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full sm:w-[180px]">
                                        <SelectValue placeholder="Catégorie" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">Toutes les catégories</SelectItem>
                                        <SelectItem value="events">Événements</SelectItem>
                                        <SelectItem value="sports">Sport</SelectItem>
                                        <SelectItem value="sciences">Sciences</SelectItem>
                                        <SelectItem value="conferences">Conférences</SelectItem>
                                        <SelectItem value="travels">Voyages</SelectItem>
                                        <SelectItem value="culture">Culture</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Select defaultValue="recent">
                                    <SelectTrigger className="w-full sm:w-[180px]">
                                        <SelectValue placeholder="Trier par" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="recent">Plus récentes</SelectItem>
                                        <SelectItem value="oldest">Plus anciennes</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Articles */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {newsArticles.map((article) => (
                                <Card key={article.id} className="group overflow-hidden border-none shadow-lg">
                                    <div className="relative h-60 overflow-hidden">
                                        <img
                                            src={article.image || '/placeholder.svg'}
                                            alt={article.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <div className="absolute bottom-4 left-4 flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-black">
                                            <Calendar className="h-3 w-3" /> {article.date}
                                        </div>
                                        <div className="absolute right-4 bottom-4 rounded-md bg-blue-600 px-2 py-1 text-xs text-white">
                                            {article.category}
                                        </div>
                                    </div>
                                    <CardHeader className="p-4">
                                        <CardTitle className="text-xl text-black">{article.title}</CardTitle>
                                        <CardDescription>{article.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-4 pt-0">
                                        <p className="line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>
                                        <Link
                                            href={`/news/${article.id}`}
                                            className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:underline"
                                        >
                                            Lire la suite <ArrowRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center gap-1">
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    1
                                </Button>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    2
                                </Button>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    3
                                </Button>
                                <span className="px-2">...</span>
                                <Button variant="outline" size="icon" className="h-8 w-8">
                                    8
                                </Button>
                                <Button variant="outline" size="icon" className="ml-1 h-8 w-8">
                                    <ChevronRight className="h-4 w-4" />
                                    <span className="sr-only">Page suivante</span>
                                </Button>
                            </nav>
                        </div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Newsletter</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Restez informé</h2>
                            <p className="mb-8 text-gray-600">
                                Abonnez-vous à notre newsletter pour recevoir toutes les actualités du lycée directement dans votre boîte mail.
                            </p>
                            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
                                <Input type="email" placeholder="Votre adresse email" className="flex-1" />
                                <Button className="bg-orange-500 text-white hover:bg-orange-600">S'abonner</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppHomeLayout>
    );
}
