import React from 'react';
import AppHomeLayout from './app/app-home-layout';

export default function HomeLayout({ children }: { children: React.ReactNode;}) {
    return (
        <AppHomeLayout>
            {children}
        </AppHomeLayout>
    );
}