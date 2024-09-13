import Hero from "@/components/home/Hero";
import Introcuccion from "@/components/home/Introcuccion";
import Descripcion from "@/components/home/Descripcion";
import Contenedores from "@/components/home/Contenedores";
import Comparacion from "@/components/home/Comparacion";

function HomePage() {
  return (
    <main className="grid space-y-16 px-4 sm:px-20 w-full max-w-4xl">
      <Hero />
      <section className="my-10 space-y-10">
        <Introcuccion />
        <Descripcion />
        <Contenedores />
        <Comparacion />
      </section>
    </main>
  );
}

export default HomePage;
