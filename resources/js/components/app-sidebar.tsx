import { NavFooter } from '@/components/shared/nav-footer';
import { NavMain } from '@/components/shared/nav-main';
import { NavUser } from '@/components/shared/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, FileDigit, Folder, GraduationCap, LayoutGrid, NotebookPen } from 'lucide-react';
import AppLogo from './app-logo';


const mainNavItems: NavItem[] = [
    {
        title: 'Accueil',
        href: 'account.user.index',
        icon: LayoutGrid,
    },

     {
        title: 'Mes Cours',
        href: 'account.user.index_cour',
        icon: NotebookPen,
    },

     {
        title: 'Mes matières',
        href: 'account.user.index_matiere',
        icon: GraduationCap ,
    },

     {
        title: 'Mes notes',
        href: 'account.user.index',
        icon: FileDigit,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
