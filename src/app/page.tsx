import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import Concept from '@/components/Concept';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Collections />
      <Concept />
      <footer style={{ padding: '4rem 0', textAlign: 'center', color: '#555', fontSize: '0.8rem', borderTop: '1px solid #111' }}>
        <p>&copy; 2026 LUMA FASHION. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
