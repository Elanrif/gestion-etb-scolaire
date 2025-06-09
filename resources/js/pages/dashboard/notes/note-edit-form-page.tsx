import HeaderDashboard from '@/components/dashboard/header-dashboard';
import { NoteEditForm } from '@/components/dashboard/note/forms/note-edit-form';
import AdminLayout from "@/layouts/admin-layout";
import { Classe, Matiere, Note, Student } from "@/types/models";
import { usePage } from "@inertiajs/react";

interface PageProps {
    note: Note;
    students: Student[];
    classes: Classe[];
    matieres: Matiere[];
    [key: string]: unknown;
  }
export default function NoteEditFormPage() {
  const { note, classes } = usePage<PageProps>().props;

  const note_form = {
    id: note.id,
    note: note.note,
    trimestre: note.trimestre,
     classe_id: note.matiere?.classe?.id,
    student_id: note.student?.id,
    matiere_id: note.matiere?.id,
    
  }
  return (
<AdminLayout>
    <HeaderDashboard title='Modifier les informations de la note'/>
     <NoteEditForm 
        note={note_form}
        classes={classes}
      />
    </AdminLayout>
  )
}