import { HeroSection } from "../Components/common/HeroSection";
import { Trending } from "../Components/common/Trending";
import { Offers } from "../Components/common/Offers";
import { Services } from "../Components/common/Services";
import { Testimonials } from "../Components/common/Testimonials";
import { ProductSlider } from "../Components/specific/ProductSlider";

export const HomePage = () => {
  return (
    <>
      <ProductSlider />
      <HeroSection />
      <Offers />
      <Trending />
      <Testimonials />
      <Services />
    </>
  );
};
