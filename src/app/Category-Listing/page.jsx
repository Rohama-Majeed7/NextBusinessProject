import React from "react";
import CategoryHero from "../components/CategoryListingPage.jsx/CategoryHero";
import Categories from "../components/CategoryListingPage.jsx/Categories";
import WhatCategory from "../components/CategoryListingPage.jsx/WhatCategory";

const page = () => {
  return (
    <section className="bg-[#eaeef4]">
      <CategoryHero />
      <Categories />
      <WhatCategory />
    </section>
  );
};

export default page;
