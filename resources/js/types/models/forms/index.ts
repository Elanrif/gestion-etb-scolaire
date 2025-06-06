export type userFormType = {
    email: string;
    password?: string;
    password_confirmation?: string;
    birthday: string;
    phone_number: string;
    address: string;
}

 export type ProfessorFormType = {
    id?: number;
    first_name: string;
    last_name: string;
    employee_number: string;
    status: string;
    discipline: string;
    experience_years: number;
    classe_id?: number;
    level_taught: string;
    additional_info: string;
 } & userFormType

export type StudentFormType = {
    id?: number;
    id_photo?: File | null;
    card_photo?: File | null;
    first_name: string;
    last_name: string;
    gender: string;
    matricule: string;
    classe_id: number;
    level: string;
    relationship: string;
    guardian_first_name: string;
    guardian_last_name: string;
    guardian_email: string;
    guardian_phone_number: string;
} & userFormType

export type MatiereFormType = {
    id?: number;
    name: string;
    classe_id: number;
    professor_id: number;
}

export type CourFormType = {
    id?: number;
    name: string;
    classe_id: number | null;
    professor_id: number | null;
    matiere_id: number | null;
}
