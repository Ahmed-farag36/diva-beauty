import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Clients8 from "@/components/sections/Clients8"
import Contact1 from "@/components/sections/Contact1"
import PageTitle from "@/components/sections/PageTitle"
import Pricing1 from "@/components/sections/Pricing1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Video1 from "@/components/sections/Video1"

export default function PageAbout() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="About Us" />
    <About1 />
    <Clients8 />
    <Video1 />
    <Pricing1 />
    <Contact1 />
    <Testimonial1 />
    </Layout>
    </>
  )
}