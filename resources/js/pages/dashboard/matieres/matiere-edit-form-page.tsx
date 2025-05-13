
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import { MatiereEditForm } from '@/components/dashboard/matiere/forms/matiere-edit-form';
import AdminLayout from "@/layouts/admin-layout";
import { Classe, Matiere, Professor } from "@/types/models";
import { usePage } from "@inertiajs/react";

interface PageProps {
    matiere: Matiere;
    professors: Professor[];
    classes: Classe[];
    [key: string]: unknown;
  }
export default function MatiereEditFormPage() {
  const { matiere, professors, classes } = usePage<PageProps>().props;

  const matiere_form = {
    id: matiere.id,
    name: matiere.name,
    classe_id: matiere.classe?.id,
    professor_id: matiere.professor?.id
  }
  return (
<AdminLayout>
    <HeaderDashboard title='Modifier les informations de la matière'/>
     <MatiereEditForm 
        matiere={matiere_form}
        professors={professors}
        classes={classes} />
    </AdminLayout>
  )
}