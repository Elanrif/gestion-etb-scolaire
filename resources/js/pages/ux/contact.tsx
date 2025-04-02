import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import AppHomeLayout from '@/layouts/app/app-home-layout';

export default function ContactPage() {
    return (
        <AppHomeLayout>
            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden py-20 md:py-28">
                    <div className="absolute inset-0 z-0">
                        <img src="/contact-hero.jpg" alt="Contact" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/70" />
                    </div>
                    <div className="relative z-10 container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">Contactez-nous</h1>
                            <p className="mb-8 text-xl text-gray-200">Nous sommes à votre disposition pour répondre à toutes vos questions</p>
                        </div>
                    </div>
                </section>

                {/* Formulaire et informations */}
                <section className="py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-2">
                            <Card className="border-none shadow-lg">
                                <CardContent className="p-6">
                                    <h2 className="mb-6 text-2xl font-bold">Envoyez-nous un message</h2>
                                    <form className="space-y-6">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">Prénom</Label>
                                                <Input id="firstName" placeholder="Votre prénom" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Nom</Label>
                                                <Input id="lastName" placeholder="Votre nom" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="Votre email" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Téléphone</Label>
                                            <Input id="phone" type="tel" placeholder="Votre numéro de téléphone" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Sujet</Label>
                                            <Select>
                                                <SelectTrigger id="subject">
                                                    <SelectValue placeholder="Sélectionnez un sujet" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="information">Demande d'information</SelectItem>
                                                    <SelectItem value="inscription">Inscription</SelectItem>
                                                    <SelectItem value="rendez-vous">Demande de rendez-vous</SelectItem>
                                                    <SelectItem value="recrutement">Recrutement</SelectItem>
                                                    <SelectItem value="autre">Autre</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea id="message" placeholder="Votre message" className="min-h-[150px]" required />
                                        </div>
                                        <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                                            <Send className="mr-2 h-4 w-4" /> Envoyer le message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                            <div className="space-y-8">
                                <div>
                                    <h2 className="mb-6 text-2xl font-bold">Informations de contact</h2>
                                    <p className="mb-8 text-gray-600">
                                        N'hésitez pas à nous contacter par téléphone, email ou à venir nous rencontrer directement au lycée.
                                    </p>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full bg-blue-100 p-3">
                                                <MapPin className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">Adresse</h3>
                                                <p className="text-gray-600">123 Avenue de l'Éducation, 75001 Paris</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full bg-orange-100 p-3">
                                                <Phone className="h-5 w-5 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">Téléphone</h3>
                                                <p className="text-gray-600">+33 1 23 45 67 89</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full bg-blue-100 p-3">
                                                <Mail className="h-5 w-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">Email</h3>
                                                <p className="text-gray-600">contact@lycee-saintexupery.fr</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="rounded-full bg-orange-100 p-3">
                                                <Clock className="h-5 w-5 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-medium">Horaires d'ouverture</h3>
                                                <div className="text-gray-600">
                                                    <p>Lundi - Vendredi : 8h00 - 18h00</p>
                                                    <p>Samedi : 9h00 - 12h00</p>
                                                    <p>Dimanche : Fermé</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-[300px] w-full overflow-hidden rounded-lg border">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85836507928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1651245814279!5m2!1sfr!2sfr"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-gray-50 py-16 md:py-24">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto mb-16 max-w-3xl text-center">
                            <div className="mb-4 inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">FAQ</div>
                            <h2 className="mb-4 text-3xl font-bold tracking-tighter">Questions fréquentes</h2>
                            <p className="text-gray-600">Retrouvez les réponses aux questions les plus fréquemment posées.</p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-bold">Comment s'inscrire au lycée ?</h3>
                                <p className="text-gray-600">
                                    Les inscriptions se font en ligne via notre plateforme dédiée ou directement auprès du secrétariat. Les dossiers
                                    sont à déposer entre mars et juin pour la rentrée suivante.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-bold">Quels sont les horaires des cours ?</h3>
                                <p className="text-gray-600">
                                    Les cours se déroulent du lundi au vendredi, de 8h à 18h. L'emploi du temps précis est communiqué à chaque élève
                                    en début d'année scolaire.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-bold">Comment accéder à l'espace élève en ligne ?</h3>
                                <p className="text-gray-600">
                                    L'accès à l'espace élève se fait via notre site internet, rubrique "Espace élève". Les identifiants sont
                                    communiqués en début d'année scolaire.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-bold">Quelles sont les options proposées ?</h3>
                                <p className="text-gray-600">
                                    Nous proposons de nombreuses options : langues vivantes (anglais, espagnol, allemand, italien), arts (théâtre,
                                    arts plastiques, musique), sport, latin, grec ancien...
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-bold">Comment fonctionne la restauration scolaire ?</h3>
                                <p className="text-gray-600">
                                    Le lycée dispose d'un restaurant scolaire ouvert tous les midis. Les élèves peuvent s'y inscrire à l'année ou
                                    occasionnellement via leur carte de cantine.
                                </p>
                            </div>
                            <div className="rounded-xl bg-white p-6 shadow-md">
                                <h3 className="mb-3 text-lg font-bold">Y a-t-il un internat ?</h3>
                                <p className="text-gray-600">
                                    Le lycée ne dispose pas d'internat, mais nous pouvons vous orienter vers des solutions d'hébergement à proximité
                                    pour les élèves qui viennent de loin.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </AppHomeLayout>
    );
}
