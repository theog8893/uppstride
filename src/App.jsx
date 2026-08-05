import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Problems from './components/Problems.jsx';
import Solutions from './components/Solutions.jsx';
import Framework from './components/Framework.jsx';
import Industries from './components/Industries.jsx';
import CaseStudies from './components/CaseStudies.jsx';
import WhyUppstride from './components/WhyUppstride.jsx';
import Insights from './components/Insights.jsx';
import FAQ from './components/FAQ.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Problems />
      <Solutions />
      <Framework />
      <Industries />
      <CaseStudies />
      <WhyUppstride />
      <Insights />
      <FAQ />
      <CTA />
      <Footer />
      <Analytics />
    </div>
  );
}
