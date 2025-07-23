import ContactForm from "@/component/homepage/FormSection";
import TestimonialSection from "@/component/homepage/testimonialSection";
import Image from "next/image";
import ActionSection from "@/component/homepage/ActionSection";
import BannerSection from "@/component/homepage/Homepagebanner";
import FutureSection from "@/component/homepage/FeatureSection";
export const metadata = {
  title: " HOME :Work manager"
}
export default function Home() {
  return (
    <div>
      <BannerSection />
      <FutureSection />
      <ActionSection />
      <TestimonialSection />
      <ContactForm />
    </div>
  )
}
