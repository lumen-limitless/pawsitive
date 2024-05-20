import About from '@/components/About';
import Contact from '@/components/Contact';
import Features from '@/components/Features';
import Landing from '@/components/Landing';
import Packages from '@/components/Packages';
import Services from '@/components/Services';
import Training from '@/components/Training';

export const runtime = 'nodejs';
export const dynamic = 'auto';
export const revalidate = false;

export default function Page() {
  return (
    <>
      <Landing />

      <Features />

      <Services />

      <Training />

      <Packages />

      <About />

      <Contact />
    </>
  );
}
