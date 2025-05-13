import HeaderDashboard from '@/components/dashboard/header-dashboard'
import { ProfessorCreateForm } from '@/components/dashboard/professor/forms/professor-create-form'
import AdminLayout from '@/layouts/admin-layout'

export default function ProfessorCreateFormPage() {
  return (
   <AdminLayout>
     <HeaderDashboard title='Ajouter un professeur' />
     <ProfessorCreateForm />
   </AdminLayout>
  )
}
