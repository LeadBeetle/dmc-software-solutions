'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './About.module.css';
import Image from 'next/image';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className={styles.about}>
            <div className={`container ${styles.container}`}>
                <div className={styles.contentWrapper}>
                    <div className={styles.imageWrapper}>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/profile.jpg"
                                alt="Dorian - DMC Software Solutions"
                                fill
                                className={styles.profileImage}
                                priority
                            />
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.heading}>{t('about.heading').split(' ')[0]} <span className="gradient-text">{t('about.heading').split(' ')[1]}</span></h2>
                        <p className={styles.text}>
                            {t('about.intro')}
                        </p>
                        <p className={styles.text}>
                            {t('about.background')}
                        </p>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.number}>3+</span>
                                <span className={styles.label}>{t('about.stats.experience')}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.number}>KI</span>
                                <span className={styles.label}>{t('about.stats.expertise')}</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.number}>100%</span>
                                <span className={styles.label}>{t('about.stats.passion')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
