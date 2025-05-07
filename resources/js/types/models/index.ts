export type userForm = {

    email: string;
    birthday: string;
    phone_number: string;
    adresse: string;
}


export type ProfessorForm = {


    first_name: string;
    last_name: string;
    gender: string;
    employee_number: string;
    statut: string;
    experience_years : string;
    level_taught: string; 
    additionnal_info : string;
} & userForm




