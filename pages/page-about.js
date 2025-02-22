import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Clients8 from "@/components/sections/Clients8"
import Contact1 from "@/components/sections/Contact1"
import PageTitle from "@/components/sections/PageTitle"
import Pricing1 from "@/components/sections/Pricing1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Video1 from "@/components/sections/Video1"
import data from "@/content/pages/home.json"
import pricingData from "@/content/pages/pricing.json"
import LearnMore from "@/components/common/LearnMore"
export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="About Us" />
    <About1 data={data} />
    <Clients8 />
    <Video1 data={data} />
    <Pricing1 data={{ pricing: pricingData?.pricingSections?.[0] }} />
    <LearnMore 
      link={data.pricing.seeAllButton.link}
      text={data.pricing.seeAllButton.text}
      show={data.pricing.seeAllButton.text !== ""}
    />
    <Contact1 data={data} />
    <Testimonial1 data={data} />
    </Layout>
    </>
  )
}