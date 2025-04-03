import AppHomeLayout from '@/layouts/app/app-home-layout';
import { CalendarDays } from 'lucide-react';

export default function History() {
    const timelineEvents = [
        {
            year: '1970',
            title: 'Fondation du lycée',
            description: "Inauguration du Lycée Saint-Exupéry par le ministre de l'Éducation nationale, avec une première promotion de 120 élèves.",
        },
        {
            year: '1975',
            title: 'Première promotion de bacheliers',
            description:
                "La première promotion obtient un taux de réussite de 92% au baccalauréat, établissant d'emblée la réputation d'excellence de l'établissement.",
        },
        {
            year: '1985',
            title: 'Création des sections internationales',
            description:
                "Ouverture des premières sections internationales en anglais et en espagnol, marquant le début de l'ouverture internationale du lycée.",
        },
        {
            year: '1992',
            title: 'Agrandissement du campus',
            description:
                "Construction d'une nouvelle aile comprenant des laboratoires scientifiques modernes et un centre de documentation et d'information.",
        },
        {
            year: '2000',
            title: 'Entrée dans le nouveau millénaire',
            description: "Lancement du plan numérique avec l'équipement de toutes les salles en matériel informatique et multimédia.",
        },
        {
            year: '2008',
            title: 'Rénovation complète',
            description:
                "Rénovation majeure des bâtiments et modernisation des installations sportives pour offrir un cadre d'apprentissage optimal.",
        },
        {
            year: '2015',
            title: 'Labellisation E3D',
            description:
                'Le lycée obtient la labellisation E3D (Établissement en Démarche de Développement Durable) pour son engagement environnemental.',
        },
        {
            year: '2020',
            title: '50ème anniversaire',
            description: "Célébration du cinquantenaire du lycée avec d'anciens élèves devenus des personnalités reconnues dans divers domaines.",
        },
    ];

    return (
        <AppHomeLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 z-0">
                        <img src="/images/histoire.jpg" alt="Histoire du lycée" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Notre histoire</h1>
                            <p className="mb-8 text-xl text-gray-200">Plus de 50 ans d'excellence et d'innovation éducative</p>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Notre héritage</div>
                                <h2 className="mb-4 text-3xl font-bold tracking-tighter">Un demi-siècle d'engagement pour l'éducation</h2>
                                <p className="mb-6 text-gray-600">
                                    Depuis sa création en 1970, le Lycée Saint-Exupéry s'est imposé comme un établissement de référence dans le
                                    paysage éducatif français. Nommé en hommage à l'écrivain et aviateur Antoine de Saint-Exupéry, notre lycée incarne
                                    les valeurs d'humanisme, de courage et d'excellence qui ont caractérisé cet homme remarquable.
                                </p>
                                <p className="text-gray-600">
                                    Au fil des décennies, nous avons formé des milliers d'élèves qui ont poursuivi des carrières brillantes dans tous
                                    les domaines. Notre histoire est marquée par une constante évolution pour répondre aux défis éducatifs de chaque
                                    époque, tout en préservant notre engagement envers l'excellence académique et le développement personnel de chaque
                                    élève.
                                </p>
                            </div>
                            <div className="relative">
                                <img src="/images/lycee.jpg" alt="Photo historique du lycée" className="rounded-lg shadow-xl" />
                                <div className="absolute -right-6 -bottom-6 rounded-lg bg-white p-4 shadow-lg">
                                    <p className="text-3xl font-bold text-orange-500">1970</p>
                                    <p className="text-sm text-gray-600">Année de fondation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800">Chronologie</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Les grandes étapes de notre histoire</h2>
                            <p className="text-gray-600">
                                Découvrez les moments clés qui ont façonné l'identité et le développement de notre établissement au fil des décennies.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-200"></div>

                            {/* Timeline events */}
                            <div className="space-y-12">
                                {timelineEvents.map((event, index) => (
                                    <div
                                        key={index}
                                        className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} md:gap-8`}
                                    >
                                        <div className="hidden w-1/2 md:block"></div>

                                        {/* Timeline dot */}
                                        <div className="absolute left-1/2 z-10 h-10 w-10 -translate-x-1/2 transform rounded-full border-4 border-blue-600 bg-white"></div>

                                        {/* Content */}
                                        <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-1/2">
                                            <div className="mb-3 flex items-center gap-3">
                                                <CalendarDays className="h-5 w-5 text-orange-500" />
                                                <h3 className="text-xl font-bold text-blue-600">{event.year}</h3>
                                            </div>
                                            <h4 className="mb-2 text-lg font-semibold">{event.title}</h4>
                                            <p className="text-gray-600">{event.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Témoignages */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">Témoignages</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Ils ont fait notre histoire</h2>
                            <p className="text-gray-600">
                                Découvrez les témoignages d'anciens élèves et enseignants qui ont contribué à l'histoire de notre établissement.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <p className="mb-6 text-gray-600 italic">
                                    "J'ai eu la chance d'être parmi les premiers élèves du lycée en 1970. L'ambiance était extraordinaire, nous avions
                                    le sentiment de participer à une aventure unique. Les valeurs d'excellence et d'humanisme étaient déjà au cœur du
                                    projet."
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src="/images/jean.jpg" alt="Ancien élève" className="h-12 w-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold">Jean Dupont</p>
                                        <p className="text-sm text-gray-500">Promotion 1973</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <p className="mb-6 text-gray-600 italic">
                                    "J'ai enseigné les mathématiques au lycée pendant plus de 30 ans. J'ai vu l'établissement évoluer, se moderniser,
                                    mais toujours conserver cette exigence académique et cette attention portée à chaque élève qui font sa
                                    spécificité."
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src="/images/marie.jpg" alt="Ancien professeur" className="h-12 w-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold">Marie Lambert</p>
                                        <p className="text-sm text-gray-500">Professeure 1975-2008</p>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <p className="mb-6 text-gray-600 italic">
                                    "Les années passées au Lycée Saint-Exupéry ont été déterminantes dans mon parcours. J'y ai développé non seulement
                                    des connaissances académiques solides, mais aussi des compétences humaines et une ouverture d'esprit qui m'ont été
                                    précieuses."
                                </p>
                                <div className="flex items-center gap-4">
                                    <img src="/images/sophie.jpg" alt="Ancien élève" className="h-12 w-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-bold">Sophie Martin</p>
                                        <p className="text-sm text-gray-500">Promotion 1995</p>
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