import ContactForm from '@/Component/ContactForm';
import Footer from '@/Component/Footer';
import Header from '@/Component/Header';
import GalleryHero from './GalleryHero';
import ProjectFilter from './ProjectFilter';
import ClientReviews from './ClientReviews';

export default function Home() {
  return (
    <div>
      <Header/>
      <GalleryHero/>
      <ProjectFilter/>
      <ClientReviews/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
