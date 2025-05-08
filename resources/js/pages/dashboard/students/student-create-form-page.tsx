
import HeaderDashboard from '@/components/dashboard/header-dashboard'
import { StudentCreateForm } from '@/components/dashboard/student/forms/student-create-form';
import AdminLayout from '@/layouts/admin-layout'
import { Classe } from '@/types/models';
import { usePage } from '@inertiajs/react';

interface PageProps {
  classe: Classe[];
  [key: string]: Classe[] ; // Signature d'index requise
}
export default function StudentCreateFormPage() {
  
  const { classes } = usePage<PageProps>().props;

  return (
    <AdminLayout>
      <HeaderDashboard title='Ajouter un étudiant'/>
        <StudentCreateForm classes={classes}/>
    </AdminLayout>
       
    
  )
}