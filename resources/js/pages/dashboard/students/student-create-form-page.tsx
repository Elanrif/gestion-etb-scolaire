
import HeaderDashboard from '@/components/dashboard/header-dashboard'
import { StudentForm } from '@/components/dashboard/student/forms/student-form'
import AdminLayout from '@/layouts/admin-layout'
export default function StudentCreateFormPage() {
  return (
    <AdminLayout>
      <HeaderDashboard title='Modifier les informations'/>
        <StudentForm />
    </AdminLayout>
       
    
  )
}