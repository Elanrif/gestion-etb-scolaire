import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';
import { Professor, Secretary, Student } from './models';

export interface Auth {
    user: User;
}

export interface AuthData extends User {
        student: Student;
        secretary: Secretary;
        professor: Professor;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isStudent?: boolean;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    data?: AuthData;
    ziggy: Config & { location: string };
    flash: {
        success: string;
        welcome: string;
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

export interface User {
    id: number;
    cin_photo: string;
    name: string;
    email: string;
    role: UserRole;
    password: string;
    birthday: string;
    phone_number: string;
    address: string;
    avatar?: string;
    email_verified_at?: string | null;
    created_at?: string;
    updated_at?: string;
    [key: string]: unknown;
}
