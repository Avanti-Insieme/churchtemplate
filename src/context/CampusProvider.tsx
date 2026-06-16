import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define the interface for the Context State
interface CampusContextType {
  campus: 'pe' | 'bc';
  setCampus: (campus: 'pe' | 'bc') => void;
}

// 2. Initialize Context with undefined (forces safe hook checks)
const CampusContext = createContext<CampusContextType | undefined>(undefined);

// 3. Create the Provider Component
export function CampusProvider({ children }: { children: ReactNode }) {
  const [campus, setCampus] = useState<'pe' | 'bc'>('pe');

  // React 19 syntax (Use <ThemeContext.Provider value={...}> for React 18)
  return (
    <CampusContext.Provider value={{ campus, setCampus }}>
      {children}
    </CampusContext.Provider>
  );
}

// 4. Create a Custom Hook with runtime null-checks for safety
export function useCampus(): CampusContextType {
  const context = useContext(CampusContext);
  
  if (context === undefined) {
    throw new Error('useCampus must be used within a CampusProvider');
  }
  
  return context;
}
