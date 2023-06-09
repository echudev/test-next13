import Link from 'next/link'

const Navigation = () => {
  return (
    <>
       <h1 className="text-3xl">Navegación</h1>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/servicios">Servicios</Link></li>
      </ul>
      </>
  )
}

export default Navigation