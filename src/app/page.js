import ArticlesSection from './components/ArticlesSection';
import ClientsSection from './components/ClientsSection';
import ContactSection from './components/ContactSection';
import DiamondLine from './components/DiamondLine';
import ExpertiseSection from './components/ExpertiseSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import WhyUsSection from './components/WhyUsSection';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#313E47]">
            <HeroSection />
            <DiamondLine diamondPosition="left" />
            <WhyUsSection />
            <DiamondLine diamondPosition="right" />
            <ExpertiseSection />
            <DiamondLine diamondPosition="left" />
            <SkillsSection />
            <DiamondLine diamondPosition="right" />
            <ClientsSection />
            <DiamondLine diamondPosition="left" />
            <ArticlesSection />
            <DiamondLine diamondPosition="right" />
            <FaqSection />
            <DiamondLine diamondPosition="left" />
            <ContactSection />
            <Footer />
        </div>
    );
}
