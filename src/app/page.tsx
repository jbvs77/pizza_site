import Header from '@/components/Header';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import MenuSection from '@/components/MenuSection';
import HoursFooter from '@/components/HoursFooter';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import StatusBadge from '@/components/StatusBadge';
import SocialFollowModal from '@/components/SocialFollowModal'; // <-- Importación

export default function HomePage() {
  return (
    <>
      <SocialFollowModal /> {/* <-- Agregar aquí */}
      <Header />
      <main>
        <Hero />
        <StorySection />
        <MenuSection />
      </main>
      <HoursFooter />
      <WhatsAppFloat />
      <StatusBadge />
    </>
  );
}