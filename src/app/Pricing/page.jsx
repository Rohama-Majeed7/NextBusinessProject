import React from 'react'
import PricingHero from '../components/PricingComponent/PricingHero'
import PricingPlans from '../components/PricingComponent/PricingPlans'
import PricingModules from '../components/PricingComponent/PricingModules'
import PricingFAQS from '../components/PricingComponent/PricingFAQS'
import PricingSupport from '../components/PricingComponent/PricingSupport'
const page = () => {
  return (
    <section className='bg-[#eaeef4]'>
        <PricingHero />
        <PricingPlans />
        <PricingFAQS />
        <PricingModules />
        <PricingSupport />
    </section>
  )
}

export default page