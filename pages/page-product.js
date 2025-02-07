import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Product from "@/components/sections/innerpages/Product"

export default function PageProduct() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Product" />

    <Product />
    </Layout>
    </>
  )
}