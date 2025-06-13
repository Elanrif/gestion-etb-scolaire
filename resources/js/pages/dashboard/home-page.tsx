import Home from '@/components/dashboard/home';
import { Classe, Cour, Matiere, Professor, Student } from '@/types/models';
import { usePage } from '@inertiajs/react';
interface PageProps {
    students: Student[];
    professors: Professor[];
    matieres: Matiere[];
    cours: Cour[];
    classes: Classe[];
    [key: string]: Student[] | Professor[] | Matiere [] | Cour[] | Classe[];
}

export default function HomePage() {
  const { students } = usePage<PageProps>().props;
  const { professors } = usePage<PageProps>().props;
  const { matieres } = usePage<PageProps>().props;
  const { cours} = usePage<PageProps>().props;
   const { classes} = usePage<PageProps>().props;
  return (
    <>
     <Home 
      students = {students} 
      professors = {professors} 
      matieres = {matieres} 
      cours = {cours}
      classes = {classes}  />
     </>
  )
}





