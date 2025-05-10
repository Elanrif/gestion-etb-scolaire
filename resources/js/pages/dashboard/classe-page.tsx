import ClasseList from '@/components/dashboard/classe/classe-list';
import HeaderDashboard from '@/components/dashboard/header-dashboard';
import AdminLayout from '@/layouts/admin-layout'

export default function ClassePage() {
    
  return (
    <AdminLayout>
      <HeaderDashboard title='Gestion des classes'/>
       <ClasseList/>
    </AdminLayout>
  )
}
