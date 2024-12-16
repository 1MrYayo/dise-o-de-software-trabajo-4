import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Bienvenidos a Ingenierosuai</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">Nosotros</Link>
          </li>
          <li>
            <Link href="/services">Servicios</Link>
          </li>
          <li>
            <Link href="/contact">Contáctanos</Link>
          </li>
          <li>
            <Link href="/projects/1">Proyecto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
