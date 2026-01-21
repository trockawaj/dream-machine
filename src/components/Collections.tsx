import Image from 'next/image';
import styles from './Collections.module.css';

const items = [
    { id: 1, title: 'NEBULA VEST', price: '$890', keywords: 'fashion,purple,futuristic' },
    { id: 2, title: 'VOID COAT', price: '$2,400', keywords: 'fashion,black,coat' },
    { id: 3, title: 'AETHER DRESS', price: '$1,200', keywords: 'fashion,white,dress' },
    { id: 4, title: 'QUANTUM BOOTS', price: '$950', keywords: 'fashion,boots,futuristic' },
    { id: 5, title: 'FLUX JACKET', price: '$1,100', keywords: 'fashion,orange,jacket' },
    { id: 6, title: 'ZERO PANTS', price: '$780', keywords: 'fashion,grey,pants' },
];

const Collections = () => {
    return (
        <section className={styles.container} id="collections">
            <div className={styles.header}>
                <h2>LATEST DROPS</h2>
                <span className={styles.season}>SS / 2026</span>
            </div>
            <div className={styles.grid}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={`https://loremflickr.com/400/533/fashion?lock=${item.id}`}
                                alt={item.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.image}
                            />
                            <div className={styles.overlay} />
                        </div>
                        <div className={styles.info}>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collections;
