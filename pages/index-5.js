import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import About5T1 from "@/components/sections/About5T1"
import About5T2 from "@/components/sections/About5T2"
import Banner5 from "@/components/sections/Banner5"
import Blog2 from "@/components/sections/Blog2"
import Contact5 from "@/components/sections/Contact5"
import Funfact5 from "@/components/sections/Funfact5"
import Pricing5 from "@/components/sections/Pricing5"
import Services3 from "@/components/sections/Services3"
import Services5 from "@/components/sections/Services5"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home5() {

  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
      <Banner5 />
      <Services5 />
      <About5 />
      <Services3 addClass={"pull-up-none"} />
      <About5T1 />
      <About5T2 />
      <Contact5 />
      <Funfact5 />
      <Pricing5 />
      <Testimonial1 />
      <Blog2 addClass={"blog-section-home4"} />
    </Layout>
    </>
  )
}