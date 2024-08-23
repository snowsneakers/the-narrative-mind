import React from "react";

import Hero from "@/components/therapy/Hero";
import SpecialtiesDesktop from "@/components/therapy/SpecialtiesDesktop";
import SpecialtiesMobile from "@/components/therapy/SpecialtiesMobile";
import MainImage from "@/components/therapy/MainImage";
import About from "@/components/therapy/About";
import QuoteAndCta from "@/components/therapy/QuoteAndCta";
import Faq from "@/components/therapy/Faq";
import Carousel from "@/components/therapy/Carousel";
import RatesAndInsurance from "@/components/therapy/RatesAndInsurance";
import IntakeFormsAndSocials from "@/components/therapy/IntakeFormsAndSocials";

export default function Home() {
  return (
    <div className="max-w-[1130px] mx-auto my-10 px-5 font-josefin font-[300] space-y-10 pb-10">
      <Hero />
      <MainImage />
      <main className="space-y-5 med:space-y-[30px] col-span-3 med:col-span-2 order-2">
        <About />
        <QuoteAndCta />
        <SpecialtiesDesktop />
        <Faq />
        <Carousel />
        <SpecialtiesMobile />
        <RatesAndInsurance />
        <IntakeFormsAndSocials />
      </main>
    </div>
  );
}
