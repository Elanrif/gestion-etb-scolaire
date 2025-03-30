import About1 from '@/components/home/about-1'
//import Banner2 from '@/components/home/banner'
import Faq1 from '@/components/home/faq-1'
import Hero151 from '@/components/home/hero-151'
import Team1 from '@/components/home/team'

import AppHomeLayout from '@/layouts/app/app-home-layout'
import React from 'react'

export default function Welcome() {
  return (
      <div className="px-26">
          <AppHomeLayout>
              <Hero151 />
              <Faq1 />
              <About1 />
              <Team1 />
          </AppHomeLayout>
      </div>
  );
}
