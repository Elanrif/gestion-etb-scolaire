
import { CourEditForm } from '@/components/dashboard/cours/forms/cour-edit-form';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import AdminLayout from "@/layouts/admin-layout";
import { Classe, Cour, Matiere, Professor } from "@/types/models";
import { usePage } from "@inertiajs/react";

interface PageProps {
    cour: Cour;
    professors: Professor[];
    classes: Classe[];
    matieres: Matiere[];
    [key: string]: unknown;
  }
export default function CourEditFormPage() {
  const { cour, classes } = usePage<PageProps>().props;
  const cour_form = {
    id: cour.id,
    name: cour.name,
    classe_id: cour.classe?.id,
    matiere_id: cour.matiere?.id,
    professor_id: cour.professor?.id,
  }

  console.log("CourEditFormPage cour_form: ", cour_form);
  return (
<AdminLayout>
    <HeaderDashboard title='Modifier les informations du cours'/>
     <CourEditForm 
        cour={cour_form}
        classes={classes}
        />
    </AdminLayout>
  )
}