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
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Student {
    user: User;
    first_name: string;
    last_name: string;
    gender: string;
    matricule: number;
    birthday: Date;
    level: string;
    class: string;
    average: int;
    number_of_absences: number;
    email: string;
    address: string;
    full_name_parents: string;
    phone_parents: string;
    image_url: string;
}