import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/innerpages/Contact"
import contact from "@/content/pages/contact.json";

export default function PageContact() {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1}>
    <PageTitle pageName={contact.title} breadcrumb={contact.breadcrumb} />

    <Contact contactData={contact} />
    </Layout>
    </>
  )
}