import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-between items-center w-full mt-2 gap-5 max-[600px]:flex-wrap">
      <section className="w-4/5 max-[600px]:w-full">

        <h1 className="text-center mb-5 text-3xl">Mis Proyectos</h1>

        <article className="grid grid-cols-2 grid-rows-1 gap-5 justify-items-center px-5 max-[600px]:flex max-[600px]:flex-col max-[600px]:flex-wrap">

          <Link href="https://lucas25rock.github.io/CyberWeb/" target="__blank">
            <div className="flex justify-between items-center w-full h-full gap-5 bg-stone-900 rounded-3xl hover:p-5">
              <div className="flex w-4/5 h-full items-center">
                <img src="/img/proyectos/proyecto1/wide.png" className="rounded-xl" alt="" />
              </div>
              <div className="w-1/5 h-full">
                <img src="/img/proyectos/proyecto1/vert.jpeg" className="rounded-xl" alt="" />
              </div>
            </div>
          </Link>

          <Link href="https://lucas25rock.github.io/dise-os-variete1.0/" target="__blank">
            <div className="flex justify-between items-center w-full h-full gap-5 bg-stone-900 rounded-3xl hover:p-5">
              <div className="flex w-4/5 h-full items-center">
                <img src="/img/proyectos/proyecto2/wide.png" className="rounded-xl" alt="" />
              </div>
              <div className="w-1/5 h-full">
                <img src="/img/proyectos/proyecto2/vert.jpeg" className="rounded-xl" alt="" />
              </div>
            </div>
          </Link>

          <Link href="https://lucas25rock.github.io/ride-instruments/" target="__blank">
            <div className="flex justify-between items-center w-full h-full gap-5 bg-stone-900 rounded-3xl hover:p-5">
              <div className="flex w-4/5 h-full items-center">
                <img src="/img/proyectos/proyecto3/wide.png" className="rounded-xl" alt="" />
              </div>
              <div className="w-1/5 h-full">
                <img src="/img/proyectos/proyecto3/vert.jpeg" className="rounded-xl" alt="" />
              </div>
            </div>
          </Link>
          <Link href="https://lucas25rock.github.io/juegos-para-todos/" target="__blank">
            <div className="flex justify-between items-center w-full h-full gap-5 bg-stone-900 rounded-3xl hover:p-5">
              <div className="flex w-4/5 h-full items-center">
                <img src="/img/proyectos/proyecto4/wide.png" className="rounded-xl" alt="" />
              </div>
              <div className="w-1/5 h-full">
                <img src="/img/proyectos/proyecto4/vert.jpeg" className="rounded-xl h-full" alt="" />
              </div>
            </div>
          </Link>

        </article>
      </section>

      <aside className="w-1/5 max-[600px]:w-full max-[600px]:px-5 max-[600px]:border-t max-[600px]:border-indigo-900">
        <h1 className="text-center mb-5 text-3xl">Presentacion</h1>
        <p className="mb-5">Soy un estudiante de la Universidad Nacional de Hurlingham con solidos conocimientos en maquetado web con las siguientes tecnologías:</p>
        <ul className="ml-5 mb-5">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Tailwind</li>
          <li>Next. Js</li>
        </ul>
        <p className="mb-5">Tambien cuento con el conocmiento de estas habilidades por fuera de lo aprendido en la universidad</p>
        <ul className="ml-5 mb-5">
          <li>Python</li>
          <li>Uso de programas de edicion de imágenes/videos</li>
        </ul>
        <p>Quedo a dispocicion de lo que nececiten, desde ya muchas gracias</p>
      </aside>
    </main>
  );
}
