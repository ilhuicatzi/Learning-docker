import CodeString from "@/components/code/CodeString";

function InstallPage() {
  return (
    <main className="flex flex-col space-y-16 md:px-20 px-3 my-8">
      <article className="mt-5">
        <h1 className="text-2xl sm:text-4xl text-center  font-semibold">Instalación: Docker</h1>
        <p className="text-lg text-muted-foreground text-center mt-4">
          En esta seccion aprenderemos a instalar Docker en diferentes sistemas
          operativos
        </p>
      </article>
      <section className="my-10 space-y-6">
        <h2 className="text-2xl font-medium text-primary">
          Instalación en Linux
        </h2>
        <article className="space-y-4">
          <h3 className="text-xl font-medium text-emerald-600">Manjaro</h3>
          <p>1. Actualizar el sistema</p>
          <CodeString code="sudo pacman -Syu" />
          <p>2. Instalar Docker</p>
          <CodeString code="sudo pacman -S docker" />
          <p>3. Iniciar el servicio de Docker</p>
          <CodeString code="sudo systemctl start docker.service" />
          <p>4. Habilitar el servicio de Docker</p>
          <CodeString code="sudo systemctl enable docker.service" />
          <p>5. Verificar la instalación</p>
          <CodeString code="docker --version" />
        </article>
      </section>
    </main>
  );
}

export default InstallPage;
