import Image from "next/image";
import Link from "next/link";

export default function MisDatos() {
  return (
    <main className="w-full flex justify-between items-center mt-2 gap-2 max-[600px]:flex-wrap">

      <section className="w-3/4 max-[600px]:w-full">
        <h1 className="text-center mb-5 text-3xl">Experencias Laborales</h1>

        <article className="grid grid-cols-2 grid-rows-1 gap-5 justify-items-center px-5 max-[600px]:flex max-[600px]:flex-col max-[600px]:flex-wrap">

            <div className="flex flex-col items-center w-full h-full gap-5 bg-slate-950 rounded-3xl">
                <div className="flex justify-between items-center gap-2 mt-5">
                    <img src="/img/trabajos-logos/1.png" height="80px" width="80px" alt="" />
                    <h1 className="text-3xl">Diseños Variete</h1>
                </div>
                <div className="flex flex-col w-full p-5">
                    <h1 className="mb-5">Puesto: Diseñador grafico</h1>
                    <p>Tareas: Responsable del diseño de Candibar, creación de logos y elaboración de posteos para redes sociales. Implicado en el desarrollo visual de la marca y en la comunicación gráfica a través de diferentes plataformas.</p>
                </div>
            </div>

            <div className="flex flex-col items-center w-full h-full gap-5 bg-slate-950 rounded-3xl">
                <div className="flex justify-between items-center gap-2 mt-5">
                    <img src="/img/trabajos-logos/2.jpg" height="80px" width="80px" className="rounded-3xl" alt="" />
                    <h1 className="text-3xl">Tapiceria - Santa Clara</h1>
                </div>
                <div className="flex flex-col w-full p-5">
                    <h1 className="mb-5">Puesto: Ayudante de tapicero</h1>
                    <p>Tareas: Responsable del reparto de sillones y sillas, colocación de gomas en sillas, tapizado de banquetas y colocación de cinchas.</p>
                </div>
            </div>

            <div className="flex flex-col items-center w-full h-full gap-5 bg-slate-950 rounded-3xl">
                <div className="flex justify-between items-center gap-2 mt-5">
                    <h1 className="text-3xl">Kiosco Lupín</h1>
                </div>
                <div className="flex flex-col w-full p-5">
                    <h1 className="mb-5">Puesto: Repositor y Atención al Cliente</h1>
                    <p>Responsable de la atención al cliente, brindando un servicio amable y eficiente. Encargado de la reposición de stock, asegurando que los productos estén disponibles y organizados en el kiosco.</p>
                </div>
            </div>

            <div className="flex flex-col items-center w-full h-full gap-5 bg-slate-950 rounded-3xl">
                <div className="flex justify-between items-center gap-2 mt-5">
                    <h1 className="text-3xl">Jugueteria Victoria y Sol</h1>
                </div>
                <div className="flex flex-col w-full p-5">
                    <h1 className="mb-5">Puesto: Repositor y Atencion al Cliente</h1>
                    <p>Responsable de la atención al cliente, venta presencial y reposición de stock. Brindar un excelente servicio al cliente, resolver consultas y asegurar la satisfacción del cliente en la tienda.</p>
                </div>
            </div>

        </article>
      </section>

      <aside className="w-1/4 text-left flex flex-col items-center wrap-break-word max-[600px]:w-full max-[600px]:px-5">
        <h1 className="text-3xl mb-2">Mi Perfíl</h1>
        <div className="flex justify-between items-center gap-2">
                <img src="/img/yo/Yo.jpg" height="150px" width="150px" className="rounded-3xl" alt="" />
                <ul className="items-left">
                    <li>Lucas Iván Serrano</li>
                    <li>Edad: 23 años</li>
                    <li>Nacimiento: 3/3/2002</li>
                    <li>Tel. : <a href="tel:+541151563058">11 5156-3058</a></li>
                    <li>E-mail: <a href="mailto:lucas25rock@gmail.com" target="__blank">lucas25rock@gmail.com</a></li>
                    <li>Residencia: Rafael Castillo</li>
                </ul>
        </div>
        <h1 className="text-3xl my-2">Formación</h1>
        <ul>
            <li className="my-2">
                <p>Universidad Nacional de Hurlingham</p>
                <p>Tecnicatura Universitaria en Informatica</p>
                <p>En Curso</p>
            </li>
            <li className="my-2">
                <p>Universidad de Morón</p>
                <p>Abandonado</p>
            </li>
            <li className="my-2">
                <p>E.E.S N°151</p>
                <p>Bachiller Arte/Música</p>
                <p>Finalizado</p>
            </li>
        </ul>
        <h1 className="text-3xl">Redes Sociales</h1>

        <div className="flex justify-between items-center gap-2 p-2">
            <Link href="https://www.instagram.com/lucas.ck7/">
                <div className="w-10 h-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" className="w-full h-full" alt="" />
                </div>
            </Link>

            <Link href="www.linkedin.com/in/lucas-serrano-92aa10263">
                <div className="w-10 h-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" className="w-full h-full" alt="" />
                </div>
            </Link>

            <Link href="https://github.com/Lucas25rock">
                <div className="w-10 h-10">
                    <img src="https://cdn.raiolanetworks.com/blog/wp-content/uploads/logo-github.png" className="w-full h-full" alt="" />
                </div>
            </Link>
        </div>
      </aside>
    </main>
  );
}
