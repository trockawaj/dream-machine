import styles from './Concept.module.css';

const Concept = () => {
    return (
        <section className={styles.section} id="concept">
            <div className={styles.content}>
                <h2 className={styles.heading}>
                    WEAVING LIGHT<br />INTO MATTER
                </h2>
                <div className={styles.description}>
                    <p>
                        In the intersection of digital dreams and physical reality, Luma Fashion defines the new silhouette.
                        We don't just dress the body; we augment the presence.
                    </p>
                    <p>
                        Our fabrics are algorithms. Our cuts are calculations.
                        Welcome to the future of expression.
                    </p>
                </div>
            </div>
            <div className={styles.visual}>
                <div className={styles.circle} />
            </div>
        </section>
    );
};

export default Concept;
