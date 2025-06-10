import HeaderDashboard from '@/components/dashboard/header-dashboard'
import { NoteCreateForm } from '@/components/dashboard/note/forms/note-create-form'
import AdminLayout from '@/layouts/admin-layout'

export default function noteCreateFormPage() {
  return (
   <AdminLayout>
     <HeaderDashboard title='Ajouter une note ' />
     <NoteCreateForm />
   </AdminLayout>
  )
}