import Hero from "@/components/home/Hero";
import Introcuccion from "@/components/home/Introcuccion";
import Descripcion from "@/components/home/Descripcion";
import Contenedores from "@/components/home/Contenedores";
import Comparacion from "@/components/home/Comparacion";

function HomePage() {
  return (
    <div className="w-full max-w-4xl px-20">
      <Hero />
      <section className="my-10 space-y-10">
        <Introcuccion />
        <Descripcion />
        <Contenedores />
        <Comparacion />
      </section>
    </div>
  );
}

export default HomePage;
