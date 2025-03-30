import About1 from '@/components/home/about-1'
import Faq1 from '@/components/home/faq-1'
import Hero151 from '@/components/home/hero-151'
import AppHomeLayout from '@/layouts/app/app-home-layout'

export default function Welcome() {
  return (
      <div className="px-24">
          <AppHomeLayout>
              <Hero151 />
              <Faq1 />
              <About1 />
          </AppHomeLayout>
      </div>
  );
}
