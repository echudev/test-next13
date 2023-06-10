async function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center p-10 max-w-[800px] mx-auto">
      <h1 className="text-2xl text-orange-300">Testing Next.js 13</h1>
      <p className="text-slate-300 mt-5">
        App sencilla para probar y poner en práctica funcionalidades de Next.js
        13, entre ellas el sistema de rutas, rutas anidadas, rutas dinámicas,
        hooks como <b>useRouter</b> y<b> usePathname</b>, funcionamiento de los{" "}
        <b>React Server Components</b> y más.
      </p>
      <p className="text-slate-300 mt-5">
        En la pestaña Usuarios se hace un breve llamado a una API pública a modo
        de prueba, en la que a su vez se puede seleccionar cada usuario para
        hacer un nuevo llamado a la API en busca de más datos.
      </p>
      <p className="text-slate-300 mt-5">
        Para conocer más a fondo Next.js y todas sus características podés
        chusmear la documentación oficial en el siguiente link:{" "}
        <a
          className="text-orange-300"
          href="https://nextjs.org/docs"
          target="_blank"
        >
          Nextjs.org/docs
        </a>
      </p>
    </div>
  );
}

export default HomePage;
