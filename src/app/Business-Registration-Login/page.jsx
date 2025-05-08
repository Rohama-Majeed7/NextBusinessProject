import React from "react";
import BusinessHero from "../components/BusinessRegistration/BusinessHero";
import BusinessRegistration from "./BusinessRegistration";
import WhySign from "./WhySign";
import PricingSupport from "../components/PricingComponent/PricingSupport";

const page = () => {
  return <section className="bg-[#eaeef4]">

    <BusinessHero />
    <BusinessRegistration />
    <WhySign />
    <PricingSupport />
  </section>;
};

export default page;
