
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import AdminLayout from "@/layouts/admin-layout";
import { Classe, Matiere, Professor } from "@/types/models";
import { usePage } from "@inertiajs/react";

interface PageProps {
    cour: Matiere;
    prcours: Professor[];
    classes: Classe[];
    [key: string]: unknown;
  }
export default function MatiereEditFormPage() {
  const { cour, professors, classes } = usePage<PageProps>().props;

  const cour_form = {
    id: cour.id,
    name: cour.name,
    classe_id: cour.classe?.id,
    professor_id: cour.professor?.id
  }
  return (
<AdminLayout>
    <HeaderDashboard title='Modifier les informations du cours'/>
     <CourEditForm 
        cour={cour_form}
        professors={professors}
        classes={classes} />
    </AdminLayout>
  )
}