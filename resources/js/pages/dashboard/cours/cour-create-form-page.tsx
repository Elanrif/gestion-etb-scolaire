import { CourCreateForm } from "@/components/dashboard/cours/forms/cour-create-form";
import HeaderDashboard from "@/components/dashboard/header-dashboard";
import AdminLayout from "@/layouts/admin-layout";

export default function CourCreateFormPage() {
  return (
    <div>
     <AdminLayout>
         <HeaderDashboard title='Ajouter un cours' />
            <CourCreateForm />
         </AdminLayout>
    </div>
  )
}
