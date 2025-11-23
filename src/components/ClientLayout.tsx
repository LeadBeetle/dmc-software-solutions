'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <LanguageProvider>
            <Header />
            {children}
            <Footer />
        </LanguageProvider>
    );
}
