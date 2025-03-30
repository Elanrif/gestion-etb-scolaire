import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import Footer7 from '@/components/home/footer-7';
import Navbar1 from '@/components/home/navbar-1';
import Banner2 from '@/components/home/banner'
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHomeLayout({ children }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
             <Banner2 />
            <Navbar1/>
            <AppContent>{children}</AppContent>
            <Footer7/>
        </AppShell>
    );
}
