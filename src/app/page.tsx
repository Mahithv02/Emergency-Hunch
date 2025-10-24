// import CategoriesSection from './components/CategoriesSection';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import ScrollBar from './components/ScrollBar';
import SplashScreen from './components/SplashScreen';

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <SplashScreen />
      <ScrollBar />
      <HeroSection />
      <WhyUsSection/>
      {/* <CategoriesSection/> */}
      <CategoryCard/>
      <Footer />
    </main>
  );
}