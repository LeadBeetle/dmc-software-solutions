'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Services.module.css';

const icons = ["🤖", "⚙️", "📱", "☁️"];

export default function Services() {
    const { t } = useLanguage();
    const services = t('services.items');

    return (
        <section id="services" className={styles.services}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.heading}>{t('services.heading').split(' ')[0]} <span className="gradient-text">{t('services.heading').split(' ')[1]}</span></h2>
                <div className={styles.grid}>
                    {services.map((service: any, index: number) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{icons[index]}</div>
                            <h3 className={styles.title}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
