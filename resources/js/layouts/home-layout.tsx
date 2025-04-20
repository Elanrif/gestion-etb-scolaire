import React from 'react';
import AppHomeLayout from './app/app-home-layout';
import { Bounce, ToastContainer } from 'react-toastify';

export default function HomeLayout({ children }: { children: React.ReactNode;}) {
    return (
        <AppHomeLayout>
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
        </AppHomeLayout>
    );
}