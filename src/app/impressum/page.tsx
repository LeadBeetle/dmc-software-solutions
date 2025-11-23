'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Impressum() {
    const { language } = useLanguage();

    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                {language === 'de' ? 'Impressum' : 'Imprint'}
            </h1>

            <div style={{ lineHeight: '1.8', color: '#ccc' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>
                    {language === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
                </h2>
                <p>
                    DMC Software Solutions<br />
                    Dorian Müller<br />
                    Sandweg 6<br />
                    63589 Linsengericht<br />
                    {language === 'de' ? 'Deutschland' : 'Germany'}
                </p>

                <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>
                    {language === 'de' ? 'Kontakt' : 'Contact'}
                </h2>
                <p>
                    E-Mail: dmc-services@outlook.de
                </p>

                <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>
                    {language === 'de' ? 'Umsatzsteuer-ID' : 'VAT ID'}
                </h2>
                <p>
                    {language === 'de'
                        ? 'Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:'
                        : 'VAT identification number according to § 27 a German VAT Act:'
                    }<br />
                    DE457584523
                </p>

                <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>
                    {language === 'de' ? 'Redaktionell verantwortlich' : 'Editorially Responsible'}
                </h2>
                <p>
                    Dorian Müller<br />
                    Sandweg 6<br />
                    63589 Linsengericht<br />
                    {language === 'de' ? 'Deutschland' : 'Germany'}
                </p>
            </div>
        </main>
    );
}
