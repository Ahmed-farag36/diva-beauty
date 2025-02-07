import Layout from "@/components/layout/Layout"
import About8 from "@/components/sections/About8"
import Banner8 from "@/components/sections/Banner8"
import Blog2 from "@/components/sections/Blog2"
import Clients8 from "@/components/sections/Clients8"
import Contact5 from "@/components/sections/Contact5"
import Contact7 from "@/components/sections/Contact7"
import Features8 from "@/components/sections/Features8"
import Package8 from "@/components/sections/Package8"
import Pricing8 from "@/components/sections/Pricing8"
import Product2 from "@/components/sections/Product2"
import Testimonial8 from "@/components/sections/Testimonial8"
import Video8 from "@/components/sections/Video8"
export default function Home8() {

  return (
    <>
    <Layout headerStyle={5} footerStyle={2}>
      <Banner8 />
      <About8 />
      <Video8 />
      <Pricing8 />
      <Features8 />
      <Contact5 />
      <Package8 />
      <Testimonial8 />
      <Product2 />
      <Clients8 />
      <Contact7 />
      <Blog2 addClass={"blog-section-two"} />
    </Layout>
    </>
  )
}