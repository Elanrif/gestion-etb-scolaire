import HeaderDashboard from '@/components/dashboard/header-dashboard'
import { MatiereCreateForm } from '@/components/dashboard/matiere/forms/matiere-create-form'
import AdminLayout from '@/layouts/admin-layout'

export default function MatiereCreateFormPage() {
  return (
   <AdminLayout>
     <HeaderDashboard title='Ajouter une matière' />
     <MatiereCreateForm />
   </AdminLayout>
  )
}