import Hero from '@/Component/Hero';
import Header from '../Component/Header';
import FeaturedProducts from '@/Component/FeaturedProducts';
import WhyChooseUs from '@/Component/WhyChooseUs';
import AboutUs from '@/Component/AboutUs';
import Testimonials from '@/Component/Testimonials';
import ContactForm from '@/Component/ContactForm';
import Footer from '@/Component/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <FeaturedProducts/>
      <WhyChooseUs/>
      <AboutUs/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
      {/* Add page content here */}
    </div>
  );
}
