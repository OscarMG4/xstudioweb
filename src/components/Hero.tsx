import { HeroCards } from "./HeroCards";
import { buttonVariants } from "./ui/button/buttonVariants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6 font-cityBurn">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">"Desata El Poder De Tu Marca Con</h1>{" "}
          <span className="inline bg-gradient-to-r from-[#beb8b6] via-[#4b4d4f] to-[#666d72] text-transparent bg-clip-text">
            STUDIO X"
          </span>{" "}
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Dale vida a tu visión. Studio X convierte ideas en imágenes que hablan,
          inspiran y generan compromiso
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({ variant: "outline" })} portfolio-link`} // Añade la clase aquí
          >
            <FontAwesomeIcon icon={faCameraRetro} className="h-5 w-5 inline-block mr-2" /> {/* Ícono */}
            Portafolio
          </a>
        </div>
      </div>
      <div className="z-10">
        <HeroCards />
      </div>
      <div className="shadow"></div>
    </section>
  );
};
