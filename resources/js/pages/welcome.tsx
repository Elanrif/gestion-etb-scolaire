import About1 from '@/components/home/about-1'
import Faq1 from '@/components/home/faq-1'
import Hero151 from '@/components/home/hero-151'
import React from 'react'

export default function Welcome() {
  return (
    <div className='px-24'>
      <Hero151/>
      <Faq1/>
      <About1/>
    </div>
  )
}
