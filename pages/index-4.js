import Layout from "@/components/layout/Layout"
import About4 from "@/components/sections/About4"
import Banner4 from "@/components/sections/Banner4"
import Blog2 from "@/components/sections/Blog2"
import Pricing4 from "@/components/sections/Pricing4"
import Product2 from "@/components/sections/Product2"
import Product4 from "@/components/sections/Product4"
import ProductBanner4 from "@/components/sections/ProductBanner4"
import Testimonial4 from "@/components/sections/Testimonial4"
import WhyChooseUs4 from "@/components/sections/WhyChooseUs4"
export default function Home4() {

  return (
    <>
    <Layout headerStyle={4} footerStyle={1}>
      <Banner4 />
      <Product4 />
      <WhyChooseUs4 />
      <About4 />
      <ProductBanner4 />
      <Pricing4 />
      <Testimonial4 />
      <Blog2 addClass={"blog-section-home4"} />
    </Layout>
    </>
  )
}