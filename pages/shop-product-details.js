import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ShopDetails from "@/components/sections/innerpages/ShopDetails"

export default function PageShopDetails() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Shop Details" />

    <ShopDetails />
    </Layout>
    </>
  )
}