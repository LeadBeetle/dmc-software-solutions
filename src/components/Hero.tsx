'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className={styles.hero}>
            <div className={styles.background}></div>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        DMC <span className="gradient-text">Software Solutions</span>
                    </h1>
                    <h2 className={styles.subtitle}>
                        {t('hero.subtitle')}
                    </h2>
                    <p className={styles.description}>
                        {t('hero.description')}
                    </p>
                    <div className={styles.actions}>
                        <Link href="#contact" className="btn btn-primary">{t('hero.ctaPrimary')}</Link>
                        <Link href="#portfolio" className={styles.btnOutline}>{t('hero.ctaSecondary')}</Link>
                    </div>
                </div>
                <div className={styles.visual}>
                    {/* Abstract tech visual */}
                    <div className={styles.hexagonWrapper}>
                        <div className={styles.hexagon}></div>
                        <div className={styles.hexagon}></div>
                        <div className={styles.hexagon}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
