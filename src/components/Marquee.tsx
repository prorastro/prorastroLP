import { Car, Bike, Truck, Bus, Caravan, ShieldCheck, Satellite, Signal } from "lucide-react";

const ITEMS = [
  { icon: Car, label: "Carros" },
  { icon: Bike, label: "Motos" },
  { icon: Truck, label: "Caminhões" },
  { icon: Caravan, label: "Frotas" },
  { icon: Bus, label: "Vans e Ônibus" },
  { icon: Satellite, label: "Rastreamento 4G" },
  { icon: Signal, label: "Cobertura nacional" },
  { icon: ShieldCheck, label: "Monitoramento 24h" },
];

const Marquee = () => (
  <div className="py-10 md:py-12">
    <p className="container text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
      Proteção para todo tipo de veículo
    </p>
    <div className="marquee-mask mt-6 overflow-hidden">
      <div className="marquee-track gap-4 pr-4">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5 rounded-full neu-sm px-6 py-3 text-sm font-semibold text-foreground/70 whitespace-nowrap"
          >
            <item.icon className="h-4 w-4 text-primary" />
            {item.label}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Marquee;
