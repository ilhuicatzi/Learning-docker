import { useState } from "react";
import { Button } from "../ui/button";

function Descripcion() {
  const [show, setShow] = useState(false);
  return (
    <article className="space-y-5">
      <h2 className="text-2xl font-semibold mt-8">
        Intención y Propósito de Docker
      </h2>
      <p>
        La principal intención detrás de Docker es{" "}
        <strong>
          resolver problemas relacionados con la consistencia y la portabilidad
          de las aplicaciones
        </strong>
        , simplificando el proceso de desarrollo, despliegue y operación de
        software a gran escala. Aquí se destacan las razones fundamentales por
        las que Docker es tan valioso:
      </p>
      <div className={`flex-col ${show ? "flex" : "hidden"}`}>
        <h3 className="text-xl font-semibold mt-8">1. Portabilidad</h3>
        <p>
          Uno de los grandes desafíos en el desarrollo de software es el clásico
          problema de "funciona en mi máquina, pero no en producción". Docker
          aborda este problema encapsulando una aplicación con todas sus
          dependencias en un contenedor. Como el contenedor incluye todo lo
          necesario para ejecutar la aplicación, puedes llevarlo a cualquier
          entorno que soporte Docker y garantizar que se comportará de la misma
          manera. Esto simplifica enormemente la transición desde el desarrollo
          a la producción.
        </p>

        <h3 className="text-xl font-semibold mt-8">2. Aislamiento</h3>
        <p>
          Docker proporciona un entorno aislado para ejecutar aplicaciones, lo
          que significa que los contenedores no interfieren entre sí, a pesar de
          estar ejecutándose en el mismo host. Cada contenedor tiene su propio
          espacio de nombres de procesos, sistema de archivos y redes. Esto hace
          que sea más fácil ejecutar múltiples aplicaciones o servicios en una
          sola máquina sin que entren en conflicto entre sí.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          3. Escalabilidad y eficiencia
        </h3>
        <p>
          Al ser livianos, los contenedores de Docker permiten ejecutar muchas
          más aplicaciones en la misma infraestructura en comparación con
          máquinas virtuales tradicionales. Docker utiliza los recursos del
          sistema operativo del host, como el kernel de Linux, lo que lo hace
          mucho más eficiente en términos de rendimiento y uso de recursos en
          comparación con una VM, que requiere su propio sistema operativo
          completo.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          4. Reutilización y Mantenibilidad
        </h3>
        <p>
          Docker utiliza un sistema de capas para construir imágenes. Las
          imágenes de Docker son plantillas de solo lectura que se utilizan para
          crear contenedores. Estas imágenes están compuestas por capas que
          representan los diferentes pasos en la construcción de la aplicación.
          Al cambiar una parte de la aplicación (por ejemplo, actualizando una
          dependencia), Docker solo necesita modificar la capa correspondiente y
          reutilizar las capas anteriores, lo que mejora la eficiencia en el
          almacenamiento y el despliegue.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          5. Consistencia en el ciclo de vida del software
        </h3>
        <p>
          Docker asegura consistencia a lo largo de todo el ciclo de vida del
          software. Los desarrolladores pueden usar Docker para crear un entorno
          de desarrollo consistente en cualquier sistema. Luego, este mismo
          entorno se puede pasar al equipo de pruebas y finalmente a producción
          sin riesgo de diferencias de configuración. Este flujo mejora la
          colaboración entre los equipos de desarrollo, operaciones y seguridad,
          promoviendo la cultura de DevOps.
        </p>

        <h3 className="text-xl font-semibold mt-8">
          6. Microservicios y Arquitecturas Distribuidas
        </h3>
        <p>
          Docker facilita la creación de arquitecturas de microservicios, donde
          una aplicación se divide en pequeños servicios que se ejecutan de
          manera independiente en diferentes contenedores. Cada contenedor puede
          tener su propio ciclo de vida lo que facilita la escalabilidad y la
          actualización de partes individuales de la aplicación sin afectar al
          sistema completo. Esto es especialmente útil en entornos de alta
          disponibilidad y escalabilidad.
        </p>
      </div>
      <Button onClick={() => setShow(!show)} variant="link">
        {show ? "Leer menos" : "Leer más"}
      </Button>
    </article>
  );
}

export default Descripcion;
