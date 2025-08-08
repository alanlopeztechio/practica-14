"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProvideProps = React.ComponentProps<typeof NextThemesProvider>;

export function ThemeProvider({ children, ...props }: ThemeProvideProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
