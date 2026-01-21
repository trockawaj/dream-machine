import styles from './Collections.module.css';

const items = [
    { id: 1, title: 'NEBULA VEST', price: '$890' },
    { id: 2, title: 'VOID COAT', price: '$2,400' },
    { id: 3, title: 'AETHER DRESS', price: '$1,200' },
    { id: 4, title: 'QUANTUM BOOTS', price: '$950' },
    { id: 5, title: 'FLUX JACKET', price: '$1,100' },
    { id: 6, title: 'ZERO PANTS', price: '$780' },
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
                        <div className={styles.imagePlaceholder}>
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
