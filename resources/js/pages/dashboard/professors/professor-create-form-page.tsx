import HeaderDashboard from '@/components/dashboard/professor/header-dashboard'
import { ProfessorForm } from '@/components/forms/professor-form'
import AdminLayout from '@/layouts/admin-layout'

export default function ProfessorCreateFormPage() {
  return (
   <AdminLayout>
     <HeaderDashboard title='Modifier les informations' />
     <ProfessorForm />
   </AdminLayout>
  )
}
