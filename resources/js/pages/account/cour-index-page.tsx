import { useEffect, useState } from 'react';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import { usePage } from '@inertiajs/react';
import { Cour} from '@/types/models';
import { toast } from 'react-toastify';
import { SharedData } from '@/types';
import CourDetail from '@/components/dashboard/cours/cour-detail';
import CourList from '@/components/account/cours/cour-list';
import AppLayout from '@/layouts/app-layout';



interface PageProps {
    cours: Cour[];
    [key: string]: Cour[] ; // Signature d'index requise
}

export default function CourIndexPage() {
    const { cours} = usePage<PageProps>().props;
    const [selectedCour, setSelectedCour] = useState<Cour | null>(null);
    const { flash } = usePage<SharedData>().props;
    
    console.log('cours', cours);

    useEffect(() => {
        
        if (flash.success) {
            toast.success(flash.success);
        }
    }, [flash.success]);
        
    const handleViewCour = (cour: Cour) => {
        setSelectedCour(cour);
    };

    const handleBackToList = () => {
        setSelectedCour(null);
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-gray-100">
                <HeaderDashboard title='Gestion des cours'/>

                <main className="mx-auto max-w-7xl  sm:px-2 lg:px-4">
                    {selectedCour ? (
                        <CourDetail cour={selectedCour} onBack={handleBackToList} />
                    ) : (
                        <CourList
                            cours={cours}
                            onViewCour={handleViewCour}
                        />
                    )}
                </main>
            </div>
        </AppLayout>
    );
}