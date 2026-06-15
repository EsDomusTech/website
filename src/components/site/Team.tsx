import { motion } from "framer-motion";
import { TEAM } from "@/lib/site-data";
import { SectionTitle } from "./SectionTitle";

export function Team() {
  return (
    <section className="section-pad bg-white">
      <div className="container-1100">
        <SectionTitle
          eyebrow="As Pessoas Por Trás do Projeto"
          first="A NOSSA"
          second="EQUIPA"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group"
            >
              {/* Portrait — grayscale, hover: zoom + dark overlay */}
              <div className="relative aspect-[3/4] overflow-hidden" style={{ backgroundColor: "var(--logo-strip)" }}>
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role} na DomusTech`}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-15" />
                {/* Gold line reveal on hover */}
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: "var(--gold)" }}
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <h3
                  className="text-[15px] font-extrabold uppercase leading-snug tracking-wide text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="tracked mt-1 text-[10px] font-semibold"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-display)" }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
