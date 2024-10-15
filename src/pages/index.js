import Header from '@/components/Header';
import Banner from '@/components/Banner';
import CompanyLogos from '@/components/CompanyLogos';
import CustomerResults from '@/components/CustomerResults';
import CustomerTestimonialSection from '@/components/CustomerTestimonialSection';
import WhatCanDo from '@/components/WhatCanDo';
import CtaSection from '@/components/CtaSection';
import CopyrightSection from '@/components/CopyrightSection';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CompanyLogos />
      <CustomerResults />
      <CustomerTestimonialSection />
      <WhatCanDo />
      <CtaSection />
      <CopyrightSection />
    </>
  );
}
