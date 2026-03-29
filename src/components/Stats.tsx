import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const stats = [
  { number: "10.000+", label: "Veículos Monitorados" },
  { number: "99.9%", label: "Uptime Garantido" },
  { number: "4.8/5", label: "Avaliação dos Clientes" },
  { number: "24/7", label: "Suporte Disponível" },
];

const Stats = () => {
  const { ref, inView } = useInView();

  return (
    <section className="py-16 md:py-20 bg-primary relative overflow-hidden shadow-[0_0_50px_rgba(255,0,0,0.15)] z-20">
      {/* Decorative subtle texture/gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <div
              key={stat.number}
              className={cn(
                "text-center transition-all duration-700 hover:scale-105",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-2xl md:text-3xl font-black text-white mb-3 tracking-tighter drop-shadow-lg">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-white/90 font-bold tracking-widest uppercase drop-shadow-md">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
