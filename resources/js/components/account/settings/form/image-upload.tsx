'use client';

import type React from 'react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertCircle, Upload } from 'lucide-react';
import { useRef, useState } from 'react';

interface ImageUploadProps {
    onUpload: (file: File) => void;
    label: string;
    description: string;
    maxSize?: number; // en MB
    acceptedTypes?: string[];
}

export function ImageUpload({
    onUpload,
    label,
    description,
    maxSize = 5,
    acceptedTypes = ['image/jpeg', 'image/png', 'image/gif'],
}: ImageUploadProps) {
    const [dragActive, setDragActive] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const validateFile = (file: File): boolean => {
        setError(null);

        if (!acceptedTypes.includes(file.type)) {
            setError(`Type de fichier non accepté. Veuillez utiliser: ${acceptedTypes.join(', ')}`);
            return false;
        }

        if (file.size > maxSize * 1024 * 1024) {
            setError(`Fichier trop volumineux. Taille maximale: ${maxSize}MB`);
            return false;
        }

        return true;
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (validateFile(file)) {
                onUpload(file);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            if (validateFile(file)) {
                onUpload(file);
            }
        }
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <div className="w-full">
            <div
                className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
                    dragActive ? 'border-primary bg-primary/5' : 'hover:border-primary/50 border-gray-300'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                <input ref={inputRef} type="file" className="hidden" accept={acceptedTypes.join(',')} onChange={handleChange} />
                <div className="flex flex-col items-center text-center">
                    <Upload className="mb-2 h-10 w-10 text-gray-400" />
                    <h3 className="mb-1 text-lg font-semibold">{label}</h3>
                    <p className="mb-3 text-sm text-gray-500">{description}</p>
                    <Button type="button" variant="outline" size="sm">
                        Sélectionner une image
                    </Button>
                    <p className="mt-2 text-xs text-gray-500">Glissez-déposez ou cliquez pour sélectionner (max {maxSize}MB)</p>
                </div>
            </div>

            {error && (
                <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Erreur</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
        </div>
    );
}
