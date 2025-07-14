import { Header } from '@/components/header';
import { EcosystemSection } from '@/components/ecosystem-section';
import HeroStatsSection from '@/components/hero-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-cosmic-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-cosmic-stars opacity-30" />
      <div className="celestial-planet" />
      <div className="relative z-10">
        <Header />
        <HeroStatsSection />
        <EcosystemSection />
      </div>
    </div>
  );
}
