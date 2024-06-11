import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <div className={cn(className, "flex max-w-[50rem] mx-auto w-[100%] p-2")}>
      {children}
    </div>
  );
}
