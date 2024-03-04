import { create } from 'zustand'

interface SearchTermState {
  searchTerm: string
  setSearchTerm: (term: string) => void
  clearSearchTerm: () => void
}

export const useSearchTermStore = create<SearchTermState>()((set) => ({
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  clearSearchTerm: () => set({ searchTerm: '' }),
}))
