'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Contact.module.css';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className={styles.contact}>
            <div className={`container ${styles.container}`}>
                <div className={styles.wrapper}>
                    <h2 className={styles.heading}>{t('contact.heading').split(' ')[0]} <span className="gradient-text">{t('contact.heading').split(' ').slice(1).join(' ')}</span></h2>
                    <p className={styles.text}>
                        {t('contact.description')}
                    </p>
                    <a href="mailto:dmc-services@outlook.de" className="btn btn-primary">
                        {t('contact.ctaEmail')}
                    </a>
                    <div className={styles.info}>
                        <p>{t('contact.connectText')}</p>
                        <div className={styles.socials}>
                            <a href="https://www.linkedin.com/in/dorian-müller-b641b1164/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <span className={styles.separator}>•</span>
                            <a href="https://github.com/LeadBeetle" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
