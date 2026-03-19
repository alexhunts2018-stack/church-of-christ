import { useEffect, useState } from "react";

export default function Reveal2({ children, className = "" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // small delay for smoother effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`reveal ${visible ? "show" : "hidden"} ${className}`}>
      {children}
    </div>
  );
}