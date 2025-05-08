import React from "react";
import PricingSupport from "../components/PricingComponent/PricingSupport";
import VerifyCompany from "../components/BusinessDetails/VerifyCompany";
import BusinessDetailMain from "../components/BusinessDetails/BusinessDetailMain";

const page = () => {
  return (
    <section className="bg-[#eaeef4]">
      <VerifyCompany />
      <BusinessDetailMain />
      <PricingSupport />
    </section>
  );
};

export default page;
