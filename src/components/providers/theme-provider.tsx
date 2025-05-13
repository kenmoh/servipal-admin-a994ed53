
import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: string;
  storageKey?: string;
}

type ThemeProviderState = {
  theme: string;
  setTheme: (theme: string) => void;
};

const initialState: ThemeProviderState = {
  theme: "dark", // Changed default theme to dark
  setTheme: () => null,
};

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "dark", // Changed default theme to dark
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Add transition class for smooth theme changes
    root.classList.add("transition-colors", "duration-300");
    
    return () => {
      root.classList.remove("transition-colors", "duration-300");
    };
  }, []);

  const value = {
    theme,
    setTheme: (theme: string) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      <NextThemesProvider
        attribute="class"
        defaultTheme={defaultTheme}
        enableSystem
        storageKey={storageKey}
        {...props}
      >
        {children}
      </NextThemesProvider>
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  
  return context;
};
