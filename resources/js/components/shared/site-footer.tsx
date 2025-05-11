import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from '@inertiajs/react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SiteFooter() {
    return (
        <footer className="w-full px-10 bg-white text-gray-800">
            <div className="container flex flex-col gap-8 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="rounded-full bg-blue-600 p-1.5">
                                <GraduationCap className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-black">Lycée Saint-Exupéry</span>
                        </Link>
                        <p className="max-w-xs text-sm text-gray-600">
                            Un établissement d'excellence dédié à la réussite de chaque élève et à la préparation de leur avenir.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <MapPin className="h-4 w-4 text-blue-600" />
                                <span>123 Avenue de l'Éducation, 75001 Paris</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Phone className="h-4 w-4 text-blue-600" />
                                <span>+33 1 23 45 67 89</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Mail className="h-4 w-4 text-blue-600" />
                                <span>contact@lycee-saintexupery.fr</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-black">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/formations" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Formations
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Actualités
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-black">Espace élève</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/login" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Se connecter
                                </Link>
                            </li>
                            <li>
                                <Link href="/register" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    S'inscrire
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Tableau de bord
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/notes" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Mes notes
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/emploi-du-temps" className="text-sm text-gray-600 transition-colors hover:text-blue-600">
                                    Emploi du temps
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-black">Newsletter</h3>
                        <p className="text-sm text-gray-600">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités du lycée.</p>
                        <div className="space-y-2">
                            <Input
                                type="email"
                                placeholder="Votre email"
                                className="border-gray-200 bg-white text-gray-800 placeholder:text-gray-400"
                            />
                            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">S'abonner</Button>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <Link href="#" className="text-blue-600 transition-colors hover:text-blue-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </Link>
                            <Link href="#" className="text-blue-600 transition-colors hover:text-blue-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                </svg>
                            </Link>
                            <Link href="#" className="text-blue-600 transition-colors hover:text-blue-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </Link>
                            <Link href="#" className="text-blue-600 transition-colors hover:text-blue-800">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
                    <p className="text-xs text-gray-500">© {new Date().getFullYear()} Lycée Saint-Exupéry. Tous droits réservés.</p>
                    <div className="mt-4 flex items-center gap-4 md:mt-0">
                        <Link href="/privacy" className="text-xs text-gray-500 transition-colors hover:text-blue-600">
                            Politique de confidentialité
                        </Link>
                        <Link href="/terms" className="text-xs text-gray-500 transition-colors hover:text-blue-600">
                            Conditions d'utilisation
                        </Link>
                        <Link href="/legal" className="text-xs text-gray-500 transition-colors hover:text-blue-600">
                            Mentions légales
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}