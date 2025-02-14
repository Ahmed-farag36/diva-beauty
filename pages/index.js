import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Blog1 from "@/components/sections/Blog1"
import Clients1 from "@/components/sections/Clients1"
import Contact1 from "@/components/sections/Contact1"
import Gallery1 from "@/components/sections/Gallery1"
import Instagram1 from "@/components/sections/Instagram1"
import Marquee1 from "@/components/sections/Marquee1"
import Pricing1 from "@/components/sections/Pricing1"
import Services1 from "@/components/sections/Services1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Video1 from "@/components/sections/Video1"
import data from "@/content/pages/home.json"
import { getServices, getGroupedServices } from "@/utils/getServices";
import pricingData from "@/content/pages/pricing.json"
import LearnMore from "@/components/common/LearnMore"

export default function Home({ groupedServices }) {
  
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
        <Banner1 data={data} />
        <About1 data={data} />
        <Clients1 data={data} />
        <Services1 data={data} />
        <Marquee1 data={data} />
        <Video1 data={data} />
        <Gallery1 data={data} />
        <Pricing1 data={{ pricing: pricingData.pricingSections?.[0] }} />
        <LearnMore 
          link={data.pricing.seeAllButton.link}
          text={data.pricing.seeAllButton.text}
          show={data.pricing.seeAllButton.text !== ""}
        />
        <Contact1 data={data} />
        <Testimonial1 data={data} />
        {/* <Team1 /> */}
        <Instagram1 data={data} />
        {/* <Blog1 /> */}
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const services = getServices();
  const groupedServices = getGroupedServices(services);
  return {
    props: { groupedServices },
  };
}
