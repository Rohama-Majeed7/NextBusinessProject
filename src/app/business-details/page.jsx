import React from 'react'
import PricingSupport from '../components/PricingComponent/PricingSupport'
import VerifyCompany from '../components/BusinessDetails/VerifyCompany'
import ReviewCard from '../components/BusinessDetails/ReviewCard'
import Cards from '../components/BusinessDetails/Cards'
import Relevant from '../components/BusinessDetails/Relevant'
import { Pagination } from '@/components/ui/pagination'

const page = () => {
  return (
    <section className="bg-[#eaeef4]">
      <VerifyCompany />
      <ReviewCard />
      <Relevant />
      <Cards />
      <Pagination />
        <PricingSupport />
    </section>
  )
}

export default page