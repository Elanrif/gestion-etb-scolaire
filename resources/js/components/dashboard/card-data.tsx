import React from 'react';
import { Card } from '../ui/card';

type CardDataProps = {
    title: string;
    value: string | number;
    description: string;
    icon: React.ReactNode; // Pour accepter une icône comme composant React
    gradientFrom?: string; // Couleur de départ du gradient
    gradientTo?: string; // Couleur de fin du gradient
};

export default function CardData({ title, value, description, icon, gradientFrom = '#ec4899', gradientTo = '#f43f5e' }: CardDataProps) {
    return (
        <Card className={`relative overflow-hidden border-0 bg-gradient-to-br from-[${gradientFrom}]/10 to-[${gradientTo}]/10 p-6 shadow-md`}>
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-20 w-20 rounded-full bg-[#ec4899]/10"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-16 w-16 rounded-full bg-[#ec4899]/10"></div>

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <p className="mt-2 text-3xl font-bold text-gray-800">{value}</p>
                    <div className="mt-2 flex items-center text-xs text-green-600">
                        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                        {description}
                    </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ec4899]/20">{icon}</div>
            </div>
        </Card>
    );
}
