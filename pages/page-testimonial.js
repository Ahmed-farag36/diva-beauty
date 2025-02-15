import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Testimonial1 from "@/components/sections/Testimonial1"
import data from "@/content/pages/home.json"
export default function PageTestimonial() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Testimonial" />
    <Testimonial1 data={data} />
    </Layout>
    </>
  )
}