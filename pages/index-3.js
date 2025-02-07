import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Banner3 from "@/components/sections/Banner3"
import Blog2 from "@/components/sections/Blog2"
import Clients8 from "@/components/sections/Clients8"
import Faq3 from "@/components/sections/Faq3"
import Funfact3 from "@/components/sections/Funfact3"
import Marquee3 from "@/components/sections/Marquee3"
import Pricing3 from "@/components/sections/Pricing3"
import Product2 from "@/components/sections/Product2"
import Services3 from "@/components/sections/Services3"
import Testimonial3 from "@/components/sections/Testimonial3"
import Video3 from "@/components/sections/Video3"
export default function Home3() {

  return (
    <>
    <Layout headerStyle={3} footerStyle={2}>
      <Banner3 />
      <Marquee3 />
      <About3 />
      <Video3 />
      <Funfact3 />
      <Services3 addClass={"pull-up"} />
      <Pricing3 />
      <Faq3 />
      <Product2 />
      <Clients8 />
      <Testimonial3 />
      <Blog2 addClass={"blog-section-home4"} />
    </Layout>
    </>
  )
}