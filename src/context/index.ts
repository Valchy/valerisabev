// import { createContext, ReactNode } from 'react';
// import { useLocalStorage } from '@hooks/localStorage';
// import type { Context } from '@mytypes';

// export const AppContext = createContext<Context | null>(null);

// export const AppContextProvider = ({ children }: { children: ReactNode }) => {
// 	const [locale, setLocale] = useLocalStorage('en', 'locale');

// 	return <AppContext.Provider value={{ locale, setLocale }}>{children}</AppContext.Provider>;
// };
