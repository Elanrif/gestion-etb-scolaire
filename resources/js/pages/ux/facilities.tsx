import { Card, CardContent } from '@/components/ui/card';
import AppHomeLayout from '@/layouts/app/app-home-layout';
import { BookOpen, Building, Dumbbell, FlaskRoundIcon as Flask, Palette, Users, Utensils, Wifi } from 'lucide-react';

export default function FacilitiesPage() {
    const facilities = [
        {
            title: 'Salles de classe modernes',
            description: '30 salles de classe équipées de tableaux interactifs et de matériel pédagogique de pointe.',
            icon: <Building className="h-6 w-6 text-blue-600" />,
            image: '/facilities/classrooms.jpg',
        },
        {
            title: 'Centre de documentation',
            description: 'Une bibliothèque riche de plus de 15 000 ouvrages, revues et ressources numériques.',
            icon: <BookOpen className="h-6 w-6 text-orange-500" />,
            image: '/facilities/library.jpg',
        },
        {
            title: 'Amphithéâtre',
            description: 'Un amphithéâtre de 300 places pour les conférences, spectacles et événements.',
            icon: <Users className="h-6 w-6 text-blue-600" />,
            image: '/facilities/auditorium.jpg',
        },
        {
            title: 'Installations sportives',
            description: 'Gymnase, terrain multisport, salle de fitness et partenariat avec la piscine municipale.',
            icon: <Dumbbell className="h-6 w-6 text-orange-500" />,
            image: '/facilities/sports.jpg',
        },
        {
            title: 'Restaurant scolaire',
            description: 'Un restaurant proposant des repas équilibrés préparés sur place avec des produits locaux.',
            icon: <Utensils className="h-6 w-6 text-blue-600" />,
            image: '/facilities/cafeteria.jpg',
        },
        {
            title: 'Laboratoires scientifiques',
            description: 'Trois laboratoires équipés pour les cours de physique, chimie et sciences de la vie et de la Terre.',
            icon: <Flask className="h-6 w-6 text-orange-500" />,
            image: '/facilities/labs.jpg',
        },
        {
            title: "Ateliers d'art",
            description: 'Espaces dédiés aux arts plastiques, à la musique et au théâtre pour développer la créativité.',
            icon: <Palette className="h-6 w-6 text-blue-600" />,
            image: '/facilities/art-studio.jpg',
        },
        {
            title: 'Infrastructure numérique',
            description: "Réseau WiFi haut débit, salles informatiques et prêt d'équipements numériques.",
            icon: <Wifi className="h-6 w-6 text-orange-500" />,
            image: '/facilities/digital.jpg',
        },
    ];

    return (
        <AppHomeLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 z-0">
                        <img src="/facilities-hero.jpg" alt="Installations du lycée" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Nos installations</h1>
                            <p className="mb-8 text-xl text-gray-200">Un environnement d'apprentissage moderne et stimulant</p>
                        </div>
                    </div>
                </section>

                {/* Présentation */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Notre campus</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Des équipements de qualité pour une éducation d'excellence</h2>
                            <p className="text-gray-600">
                                Le Lycée Saint-Exupéry dispose d'installations modernes et adaptées pour offrir à nos élèves les meilleures conditions
                                d'apprentissage et d'épanouissement.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {facilities.map((facility, index) => (
                                <Card key={index} className="overflow-hidden border-none shadow-lg">
                                    <div className="relative h-48">
                                        <img
                                            src={facility.image || `/placeholder.svg?height=200&width=400`}
                                            alt={facility.title}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="mb-3 flex items-center gap-3">
                                            {facility.icon}
                                            <h3 className="text-xl font-bold">{facility.title}</h3>
                                        </div>
                                        <p className="text-gray-600">{facility.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visite virtuelle */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <div className="mb-4 inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Découvrir</div>
                                <h2 className="mb-4 text-3xl font-bold tracking-tighter">Visite virtuelle de notre établissement</h2>
                                <p className="mb-6 text-gray-600">
                                    Explorez notre campus depuis chez vous grâce à notre visite virtuelle interactive. Découvrez nos salles de classe,
                                    nos laboratoires, notre centre de documentation et toutes nos installations.
                                </p>
                                <p className="mb-8 text-gray-600">
                                    Cette visite vous permettra de vous familiariser avec notre environnement avant même de franchir nos portes.
                                </p>
                                <button className="rounded-md bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">
                                    Lancer la visite virtuelle
                                </button>
                            </div>
                            <div className="relative">
                                <img src="/virtual-tour.jpg" alt="Visite virtuelle" className="rounded-lg shadow-xl" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-white/80">
                                        <div className="ml-2 h-0 w-0 border-t-[10px] border-b-[10px] border-l-[20px] border-t-transparent border-b-transparent border-l-orange-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppHomeLayout>
    );
}
