
function Contenedores() {
  return (
    <article className="space-y-5">
          <h2 className="text-2xl font-semibold mt-8">¿Qué es un contenedor?</h2>
          <p>
            Un contenedor es una unidad ligera y aislada que incluye todo lo
            necesario para que una aplicación funcione, como el código fuente,
            las bibliotecas, las configuraciones y las dependencias. Los
            contenedores son portátiles y se pueden ejecutar en cualquier
            entorno, desde la computadora de un desarrollador hasta un servidor
            en producción o una infraestructura en la nube.
          </p>
          <p>
            Los contenedores son una forma de virtualización a nivel de sistema
            que permite a los desarrolladores empaquetar una aplicación con sus
            dependencias en un contenedor, lo que facilita la implementación y
            la ejecución de aplicaciones en diferentes entornos sin preocuparse
            por las diferencias de configuración.
          </p>
          <p>
            Los contenedores son una tecnología clave en la contenedorización y
            se han vuelto muy populares en los últimos años debido a su
            portabilidad, eficiencia y escalabilidad. Docker es la plataforma de
            contenedorización más conocida y ampliamente utilizada, pero hay
            otras alternativas como Podman, LXC y rkt.
          </p>
        </article>
  )
}

export default Contenedores