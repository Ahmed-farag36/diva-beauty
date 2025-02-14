import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/innerpages/Contact"
import contact from "@/content/pages/contact.json";
import { getServices, getGroupedServices } from "@/utils/getServices";

export default function PageContact({ groupedServices }) {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
    <PageTitle pageName={contact.title} breadcrumb={contact.breadcrumb} />

    <Contact contactData={contact} />
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const services = getServices();
  const groupedServices = getGroupedServices(services);
  return {
    props: { groupedServices },
  };
}