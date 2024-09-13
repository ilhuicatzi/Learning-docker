import CodeString from "@/components/code/CodeString";

function PostgresDockerPage() {
  return (
    <main className="flex flex-col space-y-16 md:px-20 px-3 my-8">
      <article className="mt-5">
        <h1 className="text-2xl sm:text-4xl text-center font-semibold"> Imagen Postgres en Docker</h1>
        <p className="text-lg text-muted-foreground text-center mt-4">
          En esta seccion aprenderemos a crear un contenedor de Postgres en
          Docker, para mayor información visita la documentación oficial de{" "}
          <a href="https://hub.docker.com/_/postgres" className="text-blue-500">
            Postgres
          </a>
        </p>
      </article>
      <section className="my-10 space-y-6">
        <h2 className="text-2xl font-medium text-primary">
          Instalación de Postgres
        </h2>
        <article className="space-y-4">
          <h3 className="text-xl font-medium text-emerald-600">
            Crear contenedor
          </h3>
          <p>1. Descargar la imagen de Postgres</p>
          <CodeString code="docker pull postgres" />
          <p>2. Crear un contenedor de Postgres</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres" />
          <p>2.1 Crear un contenedor de Postgres con nombre de usuario</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_USER=username -e POSTGRES_PASSWORD=mysecretpassword -d postgres" />
          <p>2.2 Crear un contenedor de Postgres con nombre de base de datos</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_DB=database_name -e POSTGRES_PASSWORD=mysecretpassword -d postgres" />
          <p>2.3 Crear un contenedor de Postgres con puerto</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres" />
          <p>2.4 Crear un contenedor de Postgres con volumen</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -v /custom/mount:/var/lib/postgresql/data -d postgres" />
          <p>2.5 Crear un contenedor de Postgres con red</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword --network=host -d postgres" />
          <p>2.6 Crear un contenedor de Postgres con version</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres:tag" />
          <p>2.7 Crear un contenedor de Postgres ejemplo GonzDev</p>
          <CodeString code="docker run --name some-postgres -e POSTGRES_USER=gonzdev -e POSTGRES_PASSWORD=gonzdev_password -e POSTGRES_DB=gonzdev_db -p 5432:5432 -d postgres" />
          <p>3. Verificar el contenedor</p>
          <CodeString code="docker ps" />
          <p>4. Conectarse al contenedor</p>
          <CodeString code="docker exec -it some-postgres bash" />
          <p>5. Conectarse a Postgres</p>
          <CodeString code="psql -U postgres" />
            <p>5.1 Conectarse a Postgres con nombre de usuario</p>
            <CodeString code="psql -U username" />
            <p>5.2 Conectarse a Postgres con contraseña</p>
            <CodeString code="psql -U username -W" />
            <p>5.3 Conectarse a Postgres con nombre de base de datos</p>
            <CodeString code="psql -d database_name" />
            <p>5.4 Conectarse a Postgres ejemplo GonzDev</p>
            <CodeString code="psql -U gonzdev --password --db gonzdev_db" />
          <p>6. Salir de Postgres</p>
          <CodeString code="\q" />
          <p>7. Salir del contenedor</p>
          <CodeString code="exit" />
          <p>8. Detener la ejecucioón del contenedor</p>
            <CodeString code="docker stop some-postgres" />
          <p>9. Eliminar el contenedor</p>
          <CodeString code="docker rm some-postgres" />
        </article>
      </section>
    </main>
  );
}

export default PostgresDockerPage;
