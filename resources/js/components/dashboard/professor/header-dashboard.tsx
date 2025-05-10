import { GraduationCap } from 'lucide-react'

export default function HeaderDashboard( {title}:{title:string}) {
  return (
    <header className="bg-[#1E3A8A] shadow mb-3">
        <div className="mx-auto flex max-w-7x1 items-center px-4 py-4 sm:px-6 lg:px-8">
            <GraduationCap className="mr-3 h-8 w-8 text-white"/>
            <h1 className="text-xl font-bold text-white"> {title}</h1>
        </div>
    </header>
  )
}
