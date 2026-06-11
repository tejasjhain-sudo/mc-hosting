import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import GameMarquee from '../components/GameMarquee';
import ProductsGrid from '../components/ProductsGrid';
import Advantage from '../components/Advantage';
import Network from '../components/Network';
import Security from '../components/Security';
import PanelShowcase from '../components/PanelShowcase';
import Migrations from '../components/Migrations';
import Testimonials from '../components/Testimonials';
import DiscordCTA from '../components/DiscordCTA';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <GameMarquee />
      <ProductsGrid />
      <Advantage />
      <Network />
      <Security />
      <PanelShowcase />
      <Migrations />
      <Testimonials />
      <DiscordCTA />
      <FAQ />
    </>
  );
}
