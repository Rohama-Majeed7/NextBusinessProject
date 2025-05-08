import React from "react";
import ReviewCard from "./ReviewCard";
import Cards from "./Cards";
import Relevant from "./Relevant";
import Pagination from "./Pagination";
import CompanyCard from "./CompanyCard";
import ContactCard from "./ContactCard";

const BusinessDetailMain = () => {
  return (
    <section className="my-10 p-4 md:p-10">
      <main className="grid grid-cols-1  md:grid-cols-3 max-w-[1050px] mx-auto gap-3">
        <div className="col-span-2 flex flex-col gap-3">
          <ReviewCard />
          <Relevant />
          <Cards />
          <Pagination />
        </div>
        <div className="col-sapn-1  flex flex-col gap-2">
        <CompanyCard />
        <ContactCard />
        </div>
      </main>
    </section>
  );
};

export default BusinessDetailMain;
