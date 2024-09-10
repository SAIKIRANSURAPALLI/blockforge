import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (
  props: ComponentPropsWithoutRef<"button"> & {
    color?: string;
  }
) => {
  const { className, color, children } = props;
  return (
    <button
      className={twMerge(
        "text-sm font-heading uppercase font-extrabold text-fuchsia-500 tracking-wide",
        color === "lime" && "text-lime-500",
        color === "cyan" && "text-cyan-500",
        color === "violet" && "text-violet-500",
        className
      )}
    >
      {children}
    </button>
  );
};
