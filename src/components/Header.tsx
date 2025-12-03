'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import styles from './Header.module.css';

export default function Header() {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/logo.png"
                        alt="DMC Software Solutions"
                        width={320}
                        height={89}
                        style={{ height: 'auto', width: 'auto', maxHeight: '80px' }}
                        priority
                    />
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={isMenuOpen ? styles.open : ''}></span>
                    <span className={isMenuOpen ? styles.open : ''}></span>
                    <span className={isMenuOpen ? styles.open : ''}></span>
                </button>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        <li><Link href="#services" onClick={closeMenu}>{t('nav.services')}</Link></li>
                        <li><Link href="#portfolio" onClick={closeMenu}>{t('nav.projects')}</Link></li>
                        <li><Link href="#about" onClick={closeMenu}>{t('nav.about')}</Link></li>
                        <li><LanguageToggle /></li>
                        <li className={styles.contactBtn}><Link href="#contact" className="btn btn-primary" onClick={closeMenu}>{t('nav.contact')}</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
