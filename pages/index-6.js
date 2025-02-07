import Layout from "@/components/layout/Layout"
import About6 from "@/components/sections/About6"
import About6T1 from "@/components/sections/About6T1"
import Banner6 from "@/components/sections/Banner6"
import Blog2 from "@/components/sections/Blog2"
import Faq6 from "@/components/sections/Faq6"
import Pricing6 from "@/components/sections/Pricing6"
import Services6 from "@/components/sections/Services6"
import Services6T1 from "@/components/sections/Services6T1"
import Team2 from "@/components/sections/Team2"
import Testimonial1 from "@/components/sections/Testimonial1"
export default function Home6() {

  return (
    <>
    <Layout headerStyle={3} footerStyle={2}>
      <Banner6 />
      <Services6 />
      <About6 />
      <Services6T1 />
      <Pricing6 />
      <About6T1 />
      <Team2 />
      <Testimonial1 addClass={"style-two"} />
      <Faq6 />
      <Blog2 addClass={"blog-section-home4"} />
    </Layout>
    </>
  )
}