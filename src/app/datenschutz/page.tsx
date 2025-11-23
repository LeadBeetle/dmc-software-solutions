'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Datenschutz() {
    const { language } = useLanguage();

    return (
        <main className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>
                {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </h1>

            <div style={{ lineHeight: '1.8', color: '#ccc' }}>
                <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>
                    {language === 'de' ? '1. Datenschutz auf einen Blick' : '1. Privacy at a Glance'}
                </h2>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>
                    {language === 'de' ? 'Allgemeine Hinweise' : 'General Information'}
                </h3>
                <p>
                    {language === 'de'
                        ? 'Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.'
                        : 'The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you.'
                    }
                </p>

                <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>
                    {language === 'de' ? '2. Hosting' : '2. Hosting'}
                </h2>
                <p>
                    {language === 'de'
                        ? 'Wir hosten die Inhalte unserer Website bei folgendem Anbieter:'
                        : 'We host the content of our website with the following provider:'
                    }<br />
                    <strong>Vercel</strong><br />
                    {language === 'de'
                        ? 'Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.'
                        : 'Provider: Vercel Inc., 340 S Lemon Ave #4133 Walnut, CA 91789, USA.'
                    }
                </p>

                <h2 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>
                    {language === 'de' ? '3. Allgemeine Hinweise und Pflichtinformationen' : '3. General Information and Mandatory Information'}
                </h2>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>
                    {language === 'de' ? 'Datenschutz' : 'Data Protection'}
                </h3>
                <p>
                    {language === 'de'
                        ? 'Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.'
                        : 'The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.'
                    }
                </p>

                <h3 style={{ fontSize: '1.2rem', color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>
                    {language === 'de' ? 'Hinweis zur verantwortlichen Stelle' : 'Information about the Responsible Party'}
                </h3>
                <p>
                    {language === 'de'
                        ? 'Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:'
                        : 'The responsible party for data processing on this website is:'
                    }<br />
                    DMC Software Solutions<br />
                    Dorian Müller<br />
                    Sandweg 6<br />
                    63589 Linsengericht<br />
                    {language === 'de' ? 'Deutschland' : 'Germany'}
                </p>
            </div>
        </main>
    );
}
