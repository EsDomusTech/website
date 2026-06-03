import { SectionTitle } from "./SectionTitle";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.";

export function About() {
  return (
    <section id="about" className="section-pad">
      <div className="container-1100 grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionTitle first="SOBRE" second="NÓS" align="left" />
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>{LOREM}</p>
            <p>{LOREM}</p>
            <p>{LOREM}</p>
          </div>
        </div>

        <div className="relative">
          <img
            src="https://picsum.photos/seed/office1/700/500"
            alt="Escritório no Porto"
            className="w-full object-cover"
          />
          <span className="tracked absolute bottom-5 right-5 bg-white px-5 py-3 text-[11px] text-foreground shadow-sm">
            Porto Office
          </span>
        </div>
      </div>
    </section>
  );
}
