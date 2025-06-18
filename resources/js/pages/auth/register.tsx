
import RegistrationForm from "@/components/forms/registration-form";
import HomeLayout from "@/layouts/home-layout";
import { Classe } from "@/types/models";
import { usePage } from "@inertiajs/react";

interface PageProps {
  classe: Classe[];
  [key: string]: Classe[] ; // Signature d'index requise
}

export default function RegisterPage() {
   const { classes } = usePage<PageProps>().props;
  
  return (
      <HomeLayout>
          <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
              <div className="w-full max-w-4xl">
                  <h1 className="mb-2 text-center text-3xl font-bold text-indigo-900 md:text-4xl">
                    Lycée Said Mohamed Cheick</h1>
                  <p className="mb-8 text-center text-indigo-700">
                    Inscrivez-vous en tant qu'élève, professeur ou secrétaire général</p>
                  <RegistrationForm classes={classes}/>
              </div>
          </main>
      </HomeLayout>
  );
}
