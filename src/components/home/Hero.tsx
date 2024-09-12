function Hero() {
  return (
    <article className="w-full flex justify-center items-center flex-col">
        <h1 className="text-4xl font-semibold">Aprendiendo Docker</h1>
        <p className="text-lg text-muted-foreground text-center mt-4">
          La intensión de este sitio es aprender Docker de una forma sencilla y
          práctica.
        </p>
        <img
          src="/docker.svg"
          alt="Docker Logo"
          className="w-32 h-32 opacity-40"
        />
      </article>
  )
}

export default Hero