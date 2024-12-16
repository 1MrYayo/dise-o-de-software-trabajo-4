// ESTA VA A SER MI RUTA DINÁMICA
import { useRouter } from "next/router";

export default function Project() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Proyecto Final</h1>
      <p>Este es el último trabajo de diseño de software por fin xD {id}</p>
    </div>
  );
}
