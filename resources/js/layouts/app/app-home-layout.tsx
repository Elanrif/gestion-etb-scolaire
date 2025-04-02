import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { type BreadcrumbItem } from '@/types';
import type { PropsWithChildren } from 'react';

export default function AppHomeLayout({ children }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    return (
        <AppShell>
            <SiteHeader/>
            <AppContent>{children}</AppContent>
            <SiteFooter/>
        </AppShell>
    );
}
