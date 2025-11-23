'use client';

import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Portfolio.module.css';

const projectImages = ["/workflow.png", "/transcription_app_ui.png", "/cloud_ai_architecture.png"];
const projectTags = [
    ["React", "Xyflow", "FastAPI"],
    ["Flutter", "Dart", "iOS/Android"],
    ["Kubernetes", "Terraform", "AWS", "Java/Python"]
];

export default function Portfolio() {
    const { t } = useLanguage();
    const projects = t('portfolio.projects');

    return (
        <section id="portfolio" className={styles.portfolio}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.heading}>{t('portfolio.heading').split(' ')[0]} <span className="gradient-text">{t('portfolio.heading').split(' ')[1]}</span></h2>
                <div className={styles.grid}>
                    {projects.map((project: any, index: number) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imagePlaceholder}>
                                {projectImages[index] ? (
                                    <Image
                                        src={projectImages[index]}
                                        alt={project.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    <span>{project.category}</span>
                                )}
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.tags}>
                                    {projectTags[index].map((tag: string, i: number) => (
                                        <span key={i} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
