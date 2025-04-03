import React from 'react';
import AppAdminLayout from './app/app-admin-layout';

export default function AdminLayout({ children }: { children: React.ReactNode;}) {
    return (
        <AppAdminLayout>
            {children}
        </AppAdminLayout>
    );
}