export const metadata = {
  title: 'Home - exDevelopment',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  )
}
