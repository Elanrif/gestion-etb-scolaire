import HeaderDashboard from '@/components/dashboard/header-dashboard';
import { StudentEditForm } from '@/components/dashboard/student/forms/student-edit-form'
import AdminLayout from '@/layouts/admin-layout'
import { Classe, Student } from '@/types/models';
import { usePage } from '@inertiajs/react';

interface PageProps {
    student: Student;
    classes: Classe[];
    [key: string]: Student | Classe[]; // Signature d'index requise
}


export default function StudentEditFormPage() {
  const { student, classes } = usePage<PageProps>().props;

  const student_form = {
    id: student.id,
    first_name: student.first_name,
    last_name: student.last_name,
    gender: student.gender,
    matricule:student.matricule,
    classe_id: student.classe?.id,
    level: student.level,
    cin_photo: student.cin_photo,
    card_photo: student.card_photo,
    relationship: student.relationship,
    guardian_first_name: student.guardian_first_name,
    guardian_last_name: student.guardian_last_name,
    guardian_email: student.guardian_email,
    guardian_phone_number: student.guardian_phone_number,
    /* user info */
    email: student.user?.email,
    birthday: student.user?.birthday,
    phone_number: student.user?.phone_number,
    address: student.user?.address,
  }
  
  return (
<AdminLayout>
    <HeaderDashboard title="Modifier les informations de l'étudiant"/>
        <StudentEditForm student={student_form} classes={classes}/>
    </AdminLayout>
  )
}