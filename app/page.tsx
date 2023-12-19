import BarraPesquisa from "@/componentes/BarraPesquisa";
import InicioSlides from "@/componentes/InicioSlides";
import Image from "next/image";
import React from "react";

const inicio = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              As compras inteligentes começam aqui:
              <Image 
                src='/assets/icons/arrow-right.svg'
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">Libere o poder do <span className="text-primary">PriceWise</span></h1>
            <p className="mt-6">Análises poderosas de produtos e crescimento de autoatendimento para ajudá-lo a converter, engajar e reter mais</p>
            <BarraPesquisa/>
          </div>
          <InicioSlides />
        </div>
      </section>
    </>
  );
}

export default inicio 