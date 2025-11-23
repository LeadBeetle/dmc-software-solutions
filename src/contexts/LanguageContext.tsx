'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import de from '@/translations/de.json';
import en from '@/translations/en.json';

type Language = 'de' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { de, en };

export function LanguageProvider({ children }: { children: ReactNode }) {
    // Detect initial language based on browser locale
    const getInitialLanguage = (): Language => {
        if (typeof window === 'undefined') return 'en';

        // First check localStorage for saved preference
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && (savedLanguage === 'de' || savedLanguage === 'en')) {
            return savedLanguage;
        }

        // Detect from browser locale
        const browserLang = navigator.language.toLowerCase();

        // Only use German for Germany, Austria, and Switzerland
        // (e.g., 'de', 'de-DE', 'de-AT', 'de-CH')
        if (browserLang.startsWith('de')) {
            return 'de';
        }

        // Default to English for all other locations
        return 'en';
    };

    const [language, setLanguageState] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Set language based on detection
        if (typeof window !== 'undefined') {
            const initialLang = getInitialLanguage();
            setLanguageState(initialLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('language', lang);
        }
    };

    const t = (key: string): any => {
        const keys = key.split('.');
        let value: any = translations[language];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                return key; // Return key if translation not found
            }
        }

        return value !== undefined ? value : key;
    };

    // Provide context immediately to avoid hydration issues
    const contextValue = { language, setLanguage, t };

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
