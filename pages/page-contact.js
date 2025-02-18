import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import Contact from "@/components/sections/innerpages/Contact"
import contactData from "@/content/pages/contact.json";
import { getServices, getGroupedServices } from "@/utils/getServices";

export default function PageContact({ groupedServices, data }) {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
    <PageTitle pageName={data.pageTitle.title} breadcrumb={data.pageTitle.breadcrumb} bgImage={data.pageTitle.bgImage} />

    <Contact contactData={data} />
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const services = getServices();
  const groupedServices = getGroupedServices(services);
  return {
    props: { groupedServices, data: contactData },
  };
}