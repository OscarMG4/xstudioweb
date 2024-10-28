
import pilot from "../assets/pilot.png";

export const SobreNosotros = () => {
  return (
    <section
      id="sobreNosotros"
      className="container flex items-center justify-center min-h-screen py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Misión
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Nuestra misión es potenciar la presencia digital de marcas y negocios a través de estrategias de marketing innovadoras, producciones audiovisuales de alta calidad y un enfoque en el engagement genuino. Nos dedicamos a crear experiencias visuales que no solo reflejan la esencia de cada cliente, sino que también impulsan el crecimiento y la lealtad en sus comunidades digitales.
              </p>
            </div>

            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Visión
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Ser la agencia líder en producción de contenido y marketing digital en Perú, reconocida por su creatividad, excelencia y capacidad de generar conexiones auténticas entre marcas y audiencias. Aspiramos a redefinir la forma en que las marcas se comunican, inspirando relaciones de valor y posicionando a nuestros clientes como referentes en sus industrias.


              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
