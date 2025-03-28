import Breadcrumb from "@/components/demo/breadcrumb";
import Hero from "@/components/demo/hero";


export default function Demo() {
  return (
    <div className="mt-10 text-center flex flex-col gap-5">
        <Breadcrumb jdskd={23}/>
        <Breadcrumb dslfsk="je m'appelle" jdskd={100}/>
        <Breadcrumb dslfsk="Qui êtes vous?" jdskd={123}/>

        <Hero> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, consequuntur cumque debitis explicabo commodi doloribus recusandae ipsum pariatur delectus similique veniam inventore perferendis eaque itaque quis fuga molestias reprehenderit deserunt.</Hero>

    </div>
  )
}
