import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, GraduationCap, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { route } from 'ziggy-js';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SharedData } from '@/types';

export function SiteHeader() {
    // Utiliser usePage() d'Inertia pour obtenir l'URL actuelle
    const { url, auth } = usePage<SharedData>().props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = [
        {
            href: 'home',
            label: 'Accueil',
            active: url === '/',
        },
        {
            href: '#',
            label: "L'établissement",
            active: url === 'about',
            hasSubmenu: true,
            submenu: [
                { href: 'about', label: 'Présentation' },
                { href: 'team', label: 'Équipe pédagogique' },
                { href: 'installation', label: 'Nos installations' },
                { href: 'history', label: 'Histoire' },
            ],
        },
        {
            href: 'formations',
            label: 'Formations',
            active: url === 'formations',
        },
        {
            href: 'actuality',
            label: 'Actualités',
            active: url === 'news',
        },
        {
            href: 'contact',
            label: 'Contact',
            active: url === 'contact',
        },
        {
            href: 'installation',
            label: 'instalation',
            active: url === 'instalition',
        },
        {
            href: 'about',
            label: 'about',
            active: url === 'about',
        },
        {
            href: 'history',
            label: 'history',
            active: url === 'history',
        },
    ];

    return (
        <header className="sticky px-7 top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="rounded-full bg-blue-600 p-1.5">
                        <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-black">Lycée Said Mohamed Checkh</span>
                </Link>
                <nav className="hidden gap-6 md:flex">
                    {links.map((link) =>
                        link.hasSubmenu ? (
                            <div key={link.label} className="group relative">
                                <button
                                    className={cn(
                                        'flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue-600',
                                        link.active ? 'text-blue-600' : 'text-gray-600',
                                    )}
                                    onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                                >
                                    {link.label}
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                                <div className="invisible absolute top-full left-0 mt-2 w-48 rounded-md border bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                                    <div className="p-2">
                                        {link.submenu?.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={route(item.href)}
                                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={route(link.href)}
                                className={cn(
                                    'text-sm font-medium transition-colors hover:text-blue-600',
                                    link.active ? 'text-blue-600' : 'text-gray-600',
                                )}
                            >
                                {link.label}
                            </Link>
                        ),
                    )}
                </nav>
                { !auth.user  && (
                <div className="hidden gap-4 md:flex">
                    <Link href="/login">
                        <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-100 hover:text-blue-600">
                            Se connecter
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button className="bg-orange-500 text-white hover:bg-orange-600">S'inscrire</Button>
                    </Link>
                </div>)
                }
                <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="container border-t py-4 md:hidden">
                    <nav className="flex flex-col space-y-4">
                        {links.map((link) =>
                            link.hasSubmenu ? (
                                <div key={link.label} className="space-y-2">
                                    <button
                                        className={cn(
                                            'flex w-full items-center justify-between text-sm font-medium transition-colors hover:text-blue-600',
                                            link.active ? 'text-blue-600' : 'text-gray-600',
                                        )}
                                        onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
                                    >
                                        {link.label}
                                        <ChevronDown className={cn('h-4 w-4 transition-transform', isSubmenuOpen && 'rotate-180')} />
                                    </button>
                                    {isSubmenuOpen && (
                                        <div className="space-y-2 border-l border-gray-200 pl-4">
                                            {link.submenu?.map((item) => (
                                                <Link
                                                    key={item.href}
                                                    href={route(item.href)}
                                                    className="block text-sm text-gray-600 hover:text-blue-600"
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        'text-sm font-medium transition-colors hover:text-blue-600',
                                        link.active ? 'text-blue-600' : 'text-gray-600',
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ),
                        )}
                        { !auth.user && (
                        <div className="flex flex-col gap-2 pt-2">
                            <Link href="/login">
                                <Button variant="outline" className="w-full border-gray-200 text-gray-800 hover:bg-gray-100 hover:text-blue-600">
                                    Se connecter
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600">S'inscrire</Button>
                            </Link>
                        </div>)
                        }
                        
                    </nav>
                </div>
            )}
        </header>
    );
}
