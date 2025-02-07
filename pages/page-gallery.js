import Layout from "@/components/layout/Layout"
import Gallery from "@/components/sections/innerpages/Gallery"
import PageTitle from "@/components/sections/PageTitle"

export default function PageGallery() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="About Us" />
    <Gallery />
    </Layout>
    </>
  )
}