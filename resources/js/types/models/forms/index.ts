export type userForm = {

    email: string;
    birthday:string;
    phone_number:string;
    addresse:string;

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

 