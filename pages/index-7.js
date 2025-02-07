import Layout from "@/components/layout/Layout"
import Banner7 from "@/components/sections/Banner7"
import Blog2 from "@/components/sections/Blog2"
import Clients7 from "@/components/sections/Clients7"
import Contact7 from "@/components/sections/Contact7"
import Funfact7 from "@/components/sections/Funfact7"
import Pricing7 from "@/components/sections/Pricing7"
import Product2 from "@/components/sections/Product2"
import Product7 from "@/components/sections/Product7"
import Services7 from "@/components/sections/Services7"
import Team1 from "@/components/sections/Team1"
import WhyChooseUs7 from "@/components/sections/WhyChooseUs7"
export default function Home7() {

  return (
    <>
    <Layout headerStyle={3} footerStyle={2}>
      <Banner7 />
      <Services7 />
      <Product7 />
      <Clients7 />
      <WhyChooseUs7 />
      <Product2 />
      <Funfact7 />
      <Pricing7 />
      <Team1 />
      <Contact7 />
      <Blog2 addClass={"blog-section-two"} />
    </Layout>
    </>
  )
}