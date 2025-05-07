import { User } from "..";

export interface Student {
    id: number;
    user: User;
    first_name: string;
    last_name: string;
    gender: string;
    matricule:string;
    class:string;
    level:string;
    relationship:string;
    guardian_first_name:string;
    guardian_last_name:string;
    guardian_email:string;
    guardian_phone_number:string;
    [key: string]: unknown;
}


type Professor = {
    id: number;
    user: User;
    first_name: string;
    last_name: string;
    employee_number: string;
    status: string;
    discipline: string;
    experience_year: number;
    level_taught: string;
    additional_info: string;
    [key: string]: unknown;
};

interface Classe {
    id: string;
    name: string;
    professorId: string;
    professors: Professor[];
    created_at?: string;
    updated_at?: string;
    [key: string]: string | Professor[];
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
