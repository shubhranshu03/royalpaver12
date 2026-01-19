import Header from '@/Component/Header';
import Footer from '@/Component/Footer';
import AboutHero from './AboutHero';
import MissionVision from './MissionVision';
import ManufacturingSection from './ManufacturingSection';
import AboutUs from '@/Component/AboutUs';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <AboutHero/>
      <MissionVision/>
      <ManufacturingSection/>
      
      
      <AboutUs />
      <Footer />
    </div>
  );
}
