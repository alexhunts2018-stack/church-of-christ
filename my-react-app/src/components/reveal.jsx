import { useInView } from "react-intersection-observer";

export default function Reveal({
  children,
  className = "",
  variant = "up",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${inView ? "show" : "hidden"} ${className}`}
    >
      {children}
    </div>
  );
}