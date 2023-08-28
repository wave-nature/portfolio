"use client";

import { ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const [ref, inView] = useInView({
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      document.getElementById(id)?.classList.remove("fade-out");
      document.getElementById(id)?.classList.add("fade-in");
    }
  }, [inView]);
  return <div ref={ref}>{children}</div>;
}
