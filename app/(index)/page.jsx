import ContactUs from "@/components/ContactUs";
import { Features } from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Service from "@/components/Service";
import { Footerdemo } from "@/components/ui/footer-section";

const page = () => {
  return (
    <div>
      <div className="w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
        <Hero />
      </div>
      <div className="bg-gray-50">
        <Service />
      </div>
      <div>
        <HowItWorks />
      </div>
      <div className="bg-gray-50">
        <Features />
      </div>
      <div>
        <Pricing />
      </div>
      <div>
        <ContactUs />
      </div>
      <div>
        <Footerdemo />
      </div>
    </div>
  );
};

export default page;
