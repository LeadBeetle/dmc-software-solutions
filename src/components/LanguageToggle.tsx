'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './LanguageToggle.module.css';

export default function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className={styles.toggle}>
            <button
                className={`${styles.option} ${language === 'de' ? styles.active : ''}`}
                onClick={() => setLanguage('de')}
                aria-label="Switch to German"
            >
                DE
            </button>
            <span className={styles.separator}>|</span>
            <button
                className={`${styles.option} ${language === 'en' ? styles.active : ''}`}
                onClick={() => setLanguage('en')}
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}
