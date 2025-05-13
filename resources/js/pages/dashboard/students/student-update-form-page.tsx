import { StudentForm } from "@/components/forms/student-form";
import AdminLayout from "@/layouts/admin-layout";
import { usePage } from "@inertiajs/react";
import { Classe } from "@/types/models";

export default function StudentUpdateFormPage() {
  const { classes } = usePage<{ classes: Classe[] }>().props;
  return (

    <AdminLayout>
            <StudentForm classes={classes} />
        </AdminLayout>
  )
}