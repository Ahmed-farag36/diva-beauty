import Layout from "@/components/layout/Layout"
import Services from "@/components/sections/innerpages/Services"
import PageTitle from "@/components/sections/PageTitle"
import Testimonial1 from "@/components/sections/Testimonial1"

export default function PageTestimonial() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Services Grid" />
    <Services />
    </Layout>
    </>
  )
}