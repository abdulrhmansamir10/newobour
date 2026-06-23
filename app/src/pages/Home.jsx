import HeroSection from '../components/home/HeroSection';
import LiveTicker from '../components/home/LiveTicker';
import QuickActions from '../components/home/QuickActions';
import FeaturedListings from '../components/home/FeaturedListings';
import NewsSection from '../components/home/NewsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickActions />
      <LiveTicker />
      <FeaturedListings />
      <NewsSection />
    </>
  );
}
