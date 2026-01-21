import Image from 'next/image';
import styles from './Collections.module.css';

const items = [
    { id: 1, title: 'NEBULA VEST', price: '$890', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800' },
    { id: 2, title: 'VOID COAT', price: '$2,400', image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800' },
    { id: 3, title: 'AETHER DRESS', price: '$1,200', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
    { id: 4, title: 'QUANTUM BOOTS', price: '$950', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800' },
    { id: 5, title: 'FLUX JACKET', price: '$1,100', image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=800' },
    { id: 6, title: 'ZERO PANTS', price: '$780', image: 'https://images.unsplash.com/photo-1506634572416-48cdfe530110?auto=format&fit=crop&q=80&w=800' },
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
                                src={item.image}
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
