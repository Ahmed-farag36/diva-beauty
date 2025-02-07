import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Banner2 from "@/components/sections/Banner2"
import Blog2 from "@/components/sections/Blog2"
import Features2 from "@/components/sections/Features2"
import Funfact2 from "@/components/sections/Funfact2"
import Offer2 from "@/components/sections/Offer2"
import Packages2 from "@/components/sections/Packages2"
import Product2 from "@/components/sections/Product2"
import Services2 from "@/components/sections/Services2"
import Team2 from "@/components/sections/Team2"
import Testimonial2 from "@/components/sections/Testimonial2"
export default function Home2() {

  return (
    <>
    <Layout headerStyle={2} footerStyle={2}>
      <Banner2 />
      <Services2 />
      <About2 />
      <Packages2 />
      <Offer2 />
      <Product2 />
      <Testimonial2 />
      <Features2 />
      <Team2 />
      <Funfact2 />
      <Blog2 addClass={"blog-section-two"} />
    </Layout>
    </>
  )
}