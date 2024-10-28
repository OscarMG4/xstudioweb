import { Button } from "./ui/button/button";
import { Input } from "./ui/input";

export const Contacto = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section
      id="contacto"
      className="flex flex-col justify-center items-center min-h-screen"
    >
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32 text-center">
        <h3 className="text-4xl md:text-5xl font-bold">
          Join Our Daily{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Newsletter
          </span>
        </h3>
        <p className="text-xl text-muted-foreground mt-4 mb-8">
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <form
          className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="leomirandadev@gmail.com"
            className="bg-muted/50 dark:bg-muted/80"
            aria-label="email"
          />
          <Button>Subscribe</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};