import Image from "next/image";
import Link from "next/link";

export default function Titulos() {
  return (
    <main className="grid grid-cols-2 grid-rows-1 p-5 gap-5">
        <img src="/img/certificados/intro-prog.png" className="w-full h-full" alt="" />
        <a href="https://credsverse.com/credentials/7ce881e9-8c63-4108-84e3-8536cb06530e" target="__blank">
            <img src="https://cdn.certifier.io/fe91b05b-6abf-4f17-b734-a7ed05fd01c5/credentials/01k4bmjgve2shf4b1e4q7g2379/designs/01k4awe77xbn0fr6mgdce84b1a/LzSEW3hwCG.png" />
        </a>
    </main>
  );
}
