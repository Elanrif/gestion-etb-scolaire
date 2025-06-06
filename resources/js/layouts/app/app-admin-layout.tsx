'use client';

import { usePage } from '@inertiajs/react';
import type React from 'react';

import { Link } from '@inertiajs/react';
import {
    BarChart3,
    Bell,
    BookOpen,
    BookUser,
    Calendar,
    ChevronDown,
    FileText,
    GraduationCap,
    Home,
    LayoutDashboard,
    Menu,
    PanelLeft,
    School,
    Search,
    Settings,
    Users,
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { SharedData } from '@/types';
import { UserInfo } from '@/components/shared/user-info';
import { UserMenuContent } from '@/components/shared/user-menu-content';

export default function AppAdminLayout({ children }: { children: React.ReactNode }) {
    const { auth } = usePage<SharedData>().props;
    const { url: pathname } = usePage();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Détecter si l'écran est mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);

        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navigationItems = [
        {
            name: 'Tableau de bord',
            href: 'dashboard.home',
            icon: LayoutDashboard,
            active: pathname === '/dashboard/home',
        },
        {
            name: 'Élèves',
            href: 'dashboard.students.index',
            icon: Users,
            active: pathname.startsWith(`/dashboard/students`),
        },
        {
            name: 'Professeurs',
            href: 'dashboard.professors.index',
            icon: BookUser,
            active: pathname.startsWith(`/dashboard/professors`),
        },
        {
            name: 'Classes',
            href: 'dashboard.classes.index',
            icon: School,
            active: pathname.startsWith(`/dashboard/classes`),
        },
        {
            name: 'Matières',
            href: 'dashboard.matieres.index',
            icon: School,
            active: pathname.startsWith(`/dashboard/matieres`),
        },
        {
            name: 'Cours',
            href: 'dashboard.cours.index',
            icon: BookOpen,
            active: pathname.startsWith('/dashboard/cours'),
        },
        {
            name: 'Notes',
            href: 'dashboard.notes.index',
            icon: FileText,
            active: pathname.startsWith('/dashboard/notes'),
        },
        {
            name: 'Emploi du temps',
            href: 'dashboard.home',
            icon: Calendar,
            active: pathname.startsWith('/admin/schedule'),
        },
        {
            name: 'Statistiques',
            href: 'dashboard.home',
            icon: BarChart3,
            active: pathname.startsWith('/admin/statistics'),
        },
        {
            name: 'Paramètres',
            href: 'dashboard.home',
            icon: Settings,
            active: pathname.startsWith('/admin/settings'),
        },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar - version desktop */}
            <aside
                className={cn(
                    'fixed inset-y-0 left-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out lg:translate-x-0',
                    isSidebarOpen ? 'w-64' : 'w-20',
                    isMobile && !mobileMenuOpen ? '-translate-x-full' : '',
                )}
            >
                <div className="flex h-16 items-center justify-between border-b p-4">
                    <div className={cn('flex items-center', !isSidebarOpen && 'w-full justify-center')}>
                        <div className="rounded-full bg-blue-600 p-1.5">
                            <GraduationCap className="h-5 w-5 text-white" />
                        </div>
                        {isSidebarOpen && <span className="ml-2 text-lg font-bold">Admin Panel</span>}
                    </div>
                    {isMobile && (
                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                            <X className="h-5 w-5" />
                        </Button>
                    )}
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={route(item.href)}
                            className={cn(
                                'flex items-center rounded-md px-3 py-2 transition-colors',
                                item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100',
                                !isSidebarOpen && 'justify-center',
                            )}
                        >
                            <item.icon className="h-5 w-5 flex-shrink-0" />
                            {isSidebarOpen && <span className="ml-3">{item.name}</span>}
                        </Link>
                    ))}
                </nav>

                <div className="border-t p-4 pb-4">

                    <Link
                        href="/"
                        className={cn(
                            'mt-2 flex items-center rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-gray-100',
                            !isSidebarOpen && 'justify-center',
                        )}
                    >
                        <Home className="h-5 w-5 flex-shrink-0" />
                        {isSidebarOpen && <span className="ml-3">Retour au site</span>}
                    </Link>
                </div>
            </aside>

            {/* Main content */}
            <div className={cn('flex-1 transition-all duration-300 ease-in-out', isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20')}>
                {/* Header */}
                <header className="sticky top-0 z-40 flex h-16 items-center bg-white px-6 shadow-sm">
                    <div className="flex items-center gap-4">
                        {isMobile ? (
                            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                                <Menu className="h-6 w-6" />
                            </Button>
                        ) : (
                            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                                <PanelLeft className="h-5 w-5" />
                            </Button>
                        )}

                        <div className="relative hidden md:block">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <Input placeholder="Rechercher..." className="w-[300px] border-gray-200 bg-gray-50 pl-10 focus:bg-white" />
                        </div>
                    </div>

                    <div className="ml-auto flex items-center gap-3">
                        <Button variant="outline" size="sm" className="hidden md:flex">
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Aujourd'hui</span>
                        </Button>

                        <Button variant="ghost" size="icon" className="relative">
                            <Bell className="h-5 w-5" />
                            <Badge className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center bg-red-500 p-0">3</Badge>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="relative flex h-8 items-center gap-2 pr-1 pl-2">
                                     <UserInfo user={auth.user} />
                                    <ChevronDown className="h-4 w-4 opacity-50" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <UserMenuContent user={auth.user} />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </header>

                {/* Page content */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    );
}