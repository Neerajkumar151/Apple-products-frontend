import React, { createContext, useContext, useState, useCallback } from 'react';

interface SearchContextType {
  isOpen: boolean;
  query: string;
  openSearch: () => void;
  closeSearch: () => void;
  setQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const openSearch = useCallback(() => {
    setIsOpen(true);
    setQuery('');
    document.body.style.overflow = 'hidden';
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
    setQuery('');
    document.body.style.overflow = '';
  }, []);

  return (
    <SearchContext.Provider
      value={{ isOpen, query, openSearch, closeSearch, setQuery }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
