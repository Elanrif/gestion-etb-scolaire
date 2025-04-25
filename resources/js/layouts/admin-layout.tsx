import React from 'react';
import AppAdminLayout from './app/app-admin-layout';
import { Bounce, ToastContainer } from 'react-toastify';

export default function AdminLayout({ children }: { children: React.ReactNode;}) {
    return (
        <AppAdminLayout>
            {children}
            {/* display Toast */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </AppAdminLayout>
    );
}