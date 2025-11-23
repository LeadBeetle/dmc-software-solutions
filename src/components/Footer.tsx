'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>DMC Software Solutions</h3>
                        <p>{t('footer.tagline')}</p>
                    </div>
                    <div className={styles.links}>
                        <h4>{t('footer.legalHeading')}</h4>
                        <ul>
                            <li><Link href="/impressum">{t('footer.impressum')}</Link></li>
                            <li><Link href="/datenschutz">{t('footer.privacy')}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
