import { User } from "..";

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
    [key: string]: unknown;
}

export interface Professor {
    user: User;
    fullname: string;
    phone: string;
    address: string;
    level: string;
    birthday: number;
    [key: string]: unknown;
}

export interface Secretary {
    user?: User;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    unique_id: string;
    status: StagiaireStatus;
    address: string;
    experience_year: number;
    responsability_notes: string;
    birthday: string;
    [key: string]: unknown;
}

export enum StagiaireStatus {
    TITULAIRE = 'TITULAIRE',
    STAGIAIRE = 'STAGIAIRE',
    CONTRACTUEL = 'CONTRACTUEL',
}
