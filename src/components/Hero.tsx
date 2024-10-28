import { HeroCards } from "./HeroCards";
import { buttonVariants } from "./ui/button/buttonVariants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-center py-20 md:py-32">
      <div className="text-center lg:text-start space-y-6 font-cityBurn lg:mr-10 mb-10 lg:mb-0">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">"Desata El Poder De Tu Marca Con</h1>{" "}
          <span className="inline bg-gradient-to-r from-[#beb8b6] via-[#4b4d4f] to-[#666d72] text-transparent bg-clip-text">
            STUDIO X"
          </span>{" "}
        </main>
        <p
          className="text-xl text-white md:w-10/12 mx-auto lg:mx-0"
          style={{
            textShadow: '2px 2px 4px black, -2px -2px 4px black, 2px -2px 4px black, -2px 2px 4px black',
          }}
        >
          Dale vida a tu visión. Studio X convierte ideas en imágenes que hablan,
          inspiran y generan compromiso
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({ variant: "outline" })} portfolio-link`}
          >
            <FontAwesomeIcon icon={faCameraRetro} className="h-5 w-5 inline-block mr-2" />
            Portafolio
          </a>
        </div>
      </div>
      <div className="z-10 w-full lg:w-1/2">
        <HeroCards />
      </div>
      <div className="shadow"></div>
    </section>
  );
};
