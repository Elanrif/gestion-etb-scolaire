"use client";
import { Facebook, Home, Instagram, Mail, Phone,  Twitter } from "lucide-react";
const data= [
    { icon: <Mail size={16}/> , name: 'contacter@gmail.com'},
    { icon: <Phone size={16}/> , name: '+212 690577380'},
    { icon: <Home size={16}/> , name: ' Lycée Mstachiwa - 15 Rue Mledjele, 300 Moroni'},  
]
const Banner2 = () => {
  return (
    <section className="w-full bg-blue-900 text-white p-3  ">
      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col items-start gap-3 pt-2 md:flex-row md:items-center md:pt-0 pl-20">
          <div className="flex gap-5  md:items-center text-sm ">
           ¨{data.map((value,index) => (
            <div key={index} className="flex gap-3 items-center px-4 ">
                { value.icon}
                { value.name}
            </div>
           ))}
          </div>
        </div>
        <div className="flex items-center gap-3 ">
          <Facebook size={19}/>
          <Instagram size={19}/>
          <Twitter size={19}/>
        </div>
      </div>
    </section>
  );
};
export default Banner2 ;
