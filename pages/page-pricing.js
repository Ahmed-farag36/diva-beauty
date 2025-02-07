import Layout from "@/components/layout/Layout"
import Instragram from "@/components/sections/innerpages/Instragram"
import PageTitle from "@/components/sections/PageTitle"
import Pricing1 from "@/components/sections/Pricing1"

export default function PagePricing() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Pricing Table" />
    <Pricing1 />
    <Instragram />
    </Layout>
    </>
  )
}