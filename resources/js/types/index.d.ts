import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
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
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    flash: {
        success: string ;
        welcome: string ;
        [key: string]: unknown;
    }
        ;
    [key: string]: unknown;
}

export interface User {
    id: number;
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

export enum UserRole {
    ADMIN = 'ADMIN',
    PROFESSOR = 'PROFESSOR',
    SECRETARY = 'SECRATARY',
    STUDENT = 'STUDENT',
    USER = 'USER',
}
