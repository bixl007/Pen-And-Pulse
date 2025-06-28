import React, { createContext, useContext, useEffect } from 'react';

type Theme = 'light';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void; // This will be a no-op
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const theme: Theme = 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark');
    root.classList.add('light');
  }, []);

  const value = {
    theme,
    setTheme: () => {},
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
