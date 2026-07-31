import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

type CountUpProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Conta de 0 até `to` quando entra na viewport. */
const CountUp = ({ to, prefix = "", suffix = "", duration = 1.6, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(value).toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

export default CountUp;
