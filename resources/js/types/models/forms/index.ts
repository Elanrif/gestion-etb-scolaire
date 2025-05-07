export type userForm = {
    email: string;
    birthday: string;
    phone_number: string;
    address: string;
}

 export type ProfessorForm = {
    first_name: string;
    last_name: string;
    employee_number: string;
    status: string;
    discipline: string;
    experience_year: number;
    level_taught: string;
    additional_info: string;
 } & userForm


export type StudentForm = {
    id?: number;
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
} & userForm
