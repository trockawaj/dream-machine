'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.overlay} />
                <video
                    ref={videoRef}
                    className={styles.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className={styles.gridOverlay} />
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.line}>FUTURE</span>
                    <span className={styles.line}>OF FASHION</span>
                </h1>
                <p className={styles.subtitle}>
                    Digital couture. Infinite possibilities.
                </p>
                <button className={styles.cta}>
                    View Collection
                </button>
            </div>
        </section>
    );
};

export default Hero;
