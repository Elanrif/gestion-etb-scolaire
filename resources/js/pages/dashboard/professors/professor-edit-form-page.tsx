import HeaderDashboard from "@/components/dashboard/professor/header-dashboard";
import { ProfessorEditForm } from '@/components/dashboard/professor/forms/professor-edit-form';
import AdminLayout from "@/layouts/admin-layout";
import { Professor } from "@/types/models";
import { usePage } from "@inertiajs/react";


interface PageProps {
    professor: Professor;
    [key: string]: Professor; // Signature d'index requise
}

export default function ProfessorEditFormPage() {
  const { professor } = usePage<PageProps>().props;

  const professor_form = {
    id: professor.id,
    first_name: professor.first_name,
    last_name: professor.last_name,
    gender: professor.gender,
    matricule:professor.matricule,
    classe_id: professor.classes?.length,
    level: professor.level,
    relationship: professor.relationship,
    /* user info */
    email: professor.user?.email,
    birthday: professor.user?.birthday,
    phone_number: professor.user?.phone_number,
    address: professor.user?.address,
  }
  return (
<AdminLayout>
    <HeaderDashboard title='Modifier les informations'/>
        <ProfessorEditForm professor={professor_form} />
    </AdminLayout>
  )
}

 
 