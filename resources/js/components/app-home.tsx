import { ChevronLeft, ChevronRight, Facebook, Instagram, Link, Mail, MapPin, Menu, Phone, Search, Twitter } from 'lucide-react';
import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';

// Données du carrousel
const slides = [
    {
        image: '/placeholder.svg?height=600&width=1200',
        title: 'Bienvenue au Lycée Jean Moulin',
        subtitle: 'Excellence académique et épanouissement personnel',
        description: "Un environnement d'apprentissage stimulant pour préparer les citoyens de demain",
    },
    {
        image: '/placeholder.svg?height=600&width=1200',
        title: 'Une éducation complète',
        subtitle: 'Sciences, Lettres, Arts et Sports',
        description: 'Des parcours diversifiés pour révéler tous les talents',
    },
    {
        image: '/placeholder.svg?height=600&width=1200',
        title: 'Réussir ensemble',
        subtitle: 'Accompagnement personnalisé',
        description: 'Une équipe pédagogique engagée pour la réussite de chaque élève',
    },
];

export default function AppHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation du carrousel
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, []);

    // Auto-défilement
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <div className="flex min-h-screen flex-col">
            {/* En-tête supérieur */}
            <div className="bg-[#1a3a70] px-4 py-2 text-white">
                <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                    <div className="flex flex-col gap-4 text-sm md:flex-row md:gap-8">
                        <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>01.23.45.67.89</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            <span>contact@lycee-jeanmoulin.fr</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>12 rue de l'Éducation, 75001 Paris</span>
                        </div>
                    </div>
                    <div className="mt-2 flex items-center gap-4 md:mt-0">
                        <Link href="#" aria-label="Facebook">
                            <Facebook className="h-4 w-4" />
                        </Link>
                        <Link href="#" aria-label="Twitter">
                            <Twitter className="h-4 w-4" />
                        </Link>
                        <Link href="#" aria-label="Instagram">
                            <Instagram className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation principale */}
            <header className="sticky top-0 z-50 bg-white px-4 py-4 shadow-sm">
                <div className="container mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <img
                            src="/placeholder.svg?height=60&width=60"
                            alt="Logo Lycée Jean Moulin"
                            width={60}
                            height={60}
                            className="h-12 w-auto"
                        />
                        <div>
                            <h1 className="text-xl font-bold text-[#1a3a70]">Lycée Jean Moulin</h1>
                            <p className="text-xs text-gray-600">Apprendre, Grandir, Réussir</p>
                        </div>
                    </Link>

                    <div className="hidden items-center gap-6 lg:flex">
                        <nav className="flex items-center gap-6">
                            <Link href="/" className="font-medium text-[#1a3a70]">
                                Accueil
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-[#1a3a70]">
                                Établissement
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-[#1a3a70]">
                                Formations
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-[#1a3a70]">
                                Vie scolaire
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-[#1a3a70]">
                                International
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-[#1a3a70]">
                                Actualités
                            </Link>
                            <Link href="#" className="text-gray-700 hover:text-[#1a3a70]">
                                Contact
                            </Link>
                        </nav>
                        <Button variant="ghost" size="icon" aria-label="Rechercher">
                            <Search className="h-5 w-5" />
                        </Button>
                        <Button className="bg-[#e63946] text-white hover:bg-[#c1121f]">Espace élèves</Button>
                    </div>

                    <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Menu className="h-6 w-6" />
                    </Button>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="container mx-auto mt-4 pb-4 lg:hidden">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="font-medium text-[#1a3a70]">
                                Accueil
                            </Link>
                            <Link href="#" className="text-gray-700">
                                Établissement
                            </Link>
                            <Link href="#" className="text-gray-700">
                                Formations
                            </Link>
                            <Link href="#" className="text-gray-700">
                                Vie scolaire
                            </Link>
                            <Link href="#" className="text-gray-700">
                                International
                            </Link>
                            <Link href="#" className="text-gray-700">
                                Actualités
                            </Link>
                            <Link href="#" className="text-gray-700">
                                Contact
                            </Link>
                            <div className="mt-2 flex items-center gap-2">
                                <Button variant="outline" size="icon" aria-label="Rechercher">
                                    <Search className="h-5 w-5" />
                                </Button>
                                <Button className="w-full bg-[#e63946] text-white hover:bg-[#c1121f]">Espace élèves</Button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            {/* Carrousel */}
            <div className="relative h-[500px] overflow-hidden md:h-[600px]">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'pointer-events-none opacity-0'
                        }`}
                    >
                        <img src={slide.image || '/placeholder.svg'} alt={slide.title} className="object-cover" />
                        <div className="absolute inset-0 bg-black/40">
                            <div className="container mx-auto flex h-full flex-col justify-center px-4">
                                <div className="max-w-3xl text-white">
                                    <p className="mb-2 text-sm tracking-wider text-[#ffb703] uppercase md:text-base">{slide.subtitle}</p>
                                    <h2 className="mb-4 text-3xl font-bold md:text-5xl">{slide.title}</h2>
                                    <p className="mb-6 text-base md:text-xl">{slide.description}</p>
                                    <Button className="bg-[#e63946] text-white hover:bg-[#c1121f]">En savoir plus</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Boutons de navigation */}
                <button
                    className="absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 hover:bg-white/40"
                    onClick={prevSlide}
                    aria-label="Image précédente"
                >
                    <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                    className="absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 hover:bg-white/40"
                    onClick={nextSlide}
                    aria-label="Image suivante"
                >
                    <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Indicateurs */}
                <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-3 w-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`Aller à l'image ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Section Actualités */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-2 text-3xl font-bold text-[#1a3a70]">Actualités</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">Restez informés des derniers événements et activités de notre établissement</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Actualité 1 */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md">
                            <div className="relative h-48">
                                <img src="/placeholder.svg?height=300&width=500" alt="Journée portes ouvertes" className="object-cover" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold text-[#e63946] uppercase">Événement</span>
                                <h3 className="mt-2 mb-3 text-xl font-bold">Journée portes ouvertes</h3>
                                <p className="mb-4 text-gray-600">
                                    Venez découvrir notre établissement lors de notre journée portes ouvertes le 15 mars 2025.
                                </p>
                                <Link href="#" className="font-medium text-[#1a3a70] hover:underline">
                                    Lire la suite →
                                </Link>
                            </div>
                        </div>

                        {/* Actualité 2 */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md">
                            <div className="relative h-48">
                                <img src="/placeholder.svg?height=300&width=500" alt="Concours d'éloquence"  className="object-cover" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold text-[#e63946] uppercase">Concours</span>
                                <h3 className="mt-2 mb-3 text-xl font-bold">Concours d'éloquence</h3>
                                <p className="mb-4 text-gray-600">
                                    Nos élèves ont brillé lors du concours régional d'éloquence. Découvrez les lauréats.
                                </p>
                                <Link href="#" className="font-medium text-[#1a3a70] hover:underline">
                                    Lire la suite →
                                </Link>
                            </div>
                        </div>

                        {/* Actualité 3 */}
                        <div className="overflow-hidden rounded-lg bg-white shadow-md">
                            <div className="relative h-48">
                                <img src="/placeholder.svg?height=300&width=500" alt="Voyage scolaire" className="object-cover" />
                            </div>
                            <div className="p-6">
                                <span className="text-xs font-semibold text-[#e63946] uppercase">Voyage</span>
                                <h3 className="mt-2 mb-3 text-xl font-bold">Voyage scolaire à Londres</h3>
                                <p className="mb-4 text-gray-600">
                                    Les élèves de Terminale partiront à la découverte de Londres du 10 au 15 avril 2025.
                                </p>
                                <Link href="#" className="font-medium text-[#1a3a70] hover:underline">
                                    Lire la suite →
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <Button variant="outline" className="border-[#1a3a70] text-[#1a3a70] hover:bg-[#1a3a70] hover:text-white">
                            Toutes les actualités
                        </Button>
                    </div>
                </div>
            </section>

            {/* Section Chiffres clés */}
            <section className="bg-[#1a3a70] py-16 text-white">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-2 text-3xl font-bold">Notre lycée en chiffres</h2>
                        <p className="mx-auto max-w-2xl opacity-80">Un établissement d'excellence au service de la réussite des élèves</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-center">
                            <div className="mb-2 text-5xl font-bold text-[#ffb703]">98%</div>
                            <p className="text-xl">Taux de réussite au baccalauréat</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-5xl font-bold text-[#ffb703]">1200</div>
                            <p className="text-xl">Élèves</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-5xl font-bold text-[#ffb703]">85</div>
                            <p className="text-xl">Enseignants</p>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-5xl font-bold text-[#ffb703]">12</div>
                            <p className="text-xl">Spécialités proposées</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Formations */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-2 text-3xl font-bold text-[#1a3a70]">Nos formations</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">Découvrez les parcours d'excellence proposés par notre établissement</p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {/* Formation 1 */}
                        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <div className="p-6">
                                <h3 className="mb-4 text-xl font-bold text-[#1a3a70]">Bac Général</h3>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Spécialité Mathématiques</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Spécialité Physique-Chimie</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Spécialité SVT</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Spécialité Histoire-Géographie, Géopolitique et Sciences Politiques</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Spécialité Humanités, Littérature et Philosophie</span>
                                    </li>
                                </ul>
                                <Link href="#" className="font-medium text-[#1a3a70] hover:underline">
                                    En savoir plus →
                                </Link>
                            </div>
                        </div>

                        {/* Formation 2 */}
                        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <div className="p-6">
                                <h3 className="mb-4 text-xl font-bold text-[#1a3a70]">Bac Technologique</h3>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>STMG - Sciences et Technologies du Management et de la Gestion</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>STI2D - Sciences et Technologies de l'Industrie et du Développement Durable</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>STL - Sciences et Technologies de Laboratoire</span>
                                    </li>
                                </ul>
                                <Link href="#" className="font-medium text-[#1a3a70] hover:underline">
                                    En savoir plus →
                                </Link>
                            </div>
                        </div>

                        {/* Formation 3 */}
                        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <div className="p-6">
                                <h3 className="mb-4 text-xl font-bold text-[#1a3a70]">Sections spéciales</h3>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Section européenne Anglais</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Section européenne Espagnol</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Section internationale Chinois</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Option Arts plastiques</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-[#e63946]">•</span>
                                        <span>Option Théâtre</span>
                                    </li>
                                </ul>
                                <Link href="#" className="font-medium text-[#1a3a70] hover:underline">
                                    En savoir plus →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Agenda */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <div className="mb-12 text-center">
                        <h2 className="mb-2 text-3xl font-bold text-[#1a3a70]">Agenda</h2>
                        <p className="mx-auto max-w-2xl text-gray-600">Les prochains événements à ne pas manquer</p>
                    </div>

                    <div className="mx-auto max-w-3xl space-y-6">
                        {/* Événement 1 */}
                        <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm md:flex-row">
                            <div className="flex h-32 w-full flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[#1a3a70] p-4 text-white md:w-32">
                                <span className="text-3xl font-bold">15</span>
                                <span className="text-lg">Mars</span>
                                <span className="text-sm">2025</span>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold">Journée portes ouvertes</h3>
                                <p className="mb-3 text-gray-600">
                                    De 9h à 17h - Venez découvrir notre établissement, rencontrer l'équipe pédagogique et les élèves.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="mr-1 h-4 w-4" />
                                    <span>Lycée Jean Moulin</span>
                                </div>
                            </div>
                        </div>

                        {/* Événement 2 */}
                        <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm md:flex-row">
                            <div className="flex h-32 w-full flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[#1a3a70] p-4 text-white md:w-32">
                                <span className="text-3xl font-bold">22</span>
                                <span className="text-lg">Mars</span>
                                <span className="text-sm">2025</span>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold">Réunion parents-professeurs</h3>
                                <p className="mb-3 text-gray-600">De 17h à 20h - Réunion pour les parents d'élèves de Terminale.</p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="mr-1 h-4 w-4" />
                                    <span>Salle polyvalente</span>
                                </div>
                            </div>
                        </div>

                        {/* Événement 3 */}
                        <div className="flex flex-col gap-6 rounded-lg bg-white p-6 shadow-sm md:flex-row">
                            <div className="flex h-32 w-full flex-shrink-0 flex-col items-center justify-center rounded-lg bg-[#1a3a70] p-4 text-white md:w-32">
                                <span className="text-3xl font-bold">10</span>
                                <span className="text-lg">Avril</span>
                                <span className="text-sm">2025</span>
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-bold">Voyage scolaire à Londres</h3>
                                <p className="mb-3 text-gray-600">
                                    Du 10 au 15 avril - Voyage culturel et linguistique pour les élèves de Terminale.
                                </p>
                                <div className="flex items-center text-sm text-gray-500">
                                    <MapPin className="mr-1 h-4 w-4" />
                                    <span>Londres, Royaume-Uni</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 text-center">
                        <Button variant="outline" className="border-[#1a3a70] text-[#1a3a70] hover:bg-[#1a3a70] hover:text-white">
                            Voir tout l'agenda
                        </Button>
                    </div>
                </div>
            </section>

            {/* Pied de page */}
            <footer className="bg-[#1a3a70] pt-16 pb-8 text-white">
                <div className="container mx-auto px-4">
                    <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <h3 className="mb-4 text-xl font-bold">Lycée Jean Moulin</h3>
                            <p className="mb-4 text-gray-300">Un établissement d'excellence au service de la réussite des élèves.</p>
                            <div className="flex items-center gap-4">
                                <Link href="#" aria-label="Facebook" className="hover:text-[#ffb703]">
                                    <Facebook className="h-5 w-5" />
                                </Link>
                                <Link href="#" aria-label="Twitter" className="hover:text-[#ffb703]">
                                    <Twitter className="h-5 w-5" />
                                </Link>
                                <Link href="#" aria-label="Instagram" className="hover:text-[#ffb703]">
                                    <Instagram className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl font-bold">Contact</h3>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span>12 rue de l'Éducation, 75001 Paris</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 flex-shrink-0" />
                                    <span>01.23.45.67.89</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 flex-shrink-0" />
                                    <span>contact@lycee-jeanmoulin.fr</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl font-bold">Liens rapides</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <Link href="#" className="hover:text-[#ffb703]">
                                        Établissement
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#ffb703]">
                                        Formations
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#ffb703]">
                                        Vie scolaire
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#ffb703]">
                                        International
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#ffb703]">
                                        Actualités
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="hover:text-[#ffb703]">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="mb-4 text-xl font-bold">Horaires</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex justify-between">
                                    <span>Lundi - Vendredi:</span>
                                    <span>8h00 - 18h00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Samedi:</span>
                                    <span>8h00 - 12h00</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Dimanche:</span>
                                    <span>Fermé</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
                        <p>© 2025 Lycée Jean Moulin. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
