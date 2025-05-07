import HeaderDashboard from "@/components/dashboard/professor/header-dashboard";
import { ProfessorEditForm } from '@/components/dashboard/professor/forms/professor-edit-form';
import AdminLayout from "@/layouts/admin-layout";
import { Professor } from "@/types/models";
import { ProfessorForm } from "@/types/models/forms";
import { usePage } from "@inertiajs/react";


interface PageProps {
    professor: Professor;
    [key: string]: ProfessorForm; // Signature d'index requise
}


export default function ProfessorEditFormPage() {
  const { professor } = usePage<PageProps>().props;
  return (
<AdminLayout>
    <HeaderDashboard title='Modifier les informations'/>
        <ProfessorEditForm professor={professor}/>
    </AdminLayout>
  )
}

 
 