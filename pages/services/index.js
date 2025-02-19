import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/innerpages/Services";
import PageTitle from "@/components/sections/PageTitle";
import Testimonial1 from "@/components/sections/Testimonial1";
import Link from "next/link";
import Instagram1 from "@/components/sections/Instagram1";
import homeData from "@/content/pages/home.json";
import servicesData from "@/content/pages/services.json";
import { getServices, getGroupedServices } from "@/utils/getServices";
import headerData from "@/content/pages/header.json";
import footerData from "@/content/pages/footer.json";

export default function PageServices({ groupedServices, data }) {
  return (
    <> 
      <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices} headerData={headerData} footerData={footerData}>
        <PageTitle pageName={data.pageTitle.title} breadcrumb={data.pageTitle.breadcrumb} bgImage={data.pageTitle.bgImage} />
        {Object.keys(groupedServices).map((category) => (
            <Services key={category[0]} services={groupedServices[category]} />
        ))}
        <Instagram1 data={homeData} />
      </Layout>
    </>
  );
}

// Fetch services at build time
export async function getStaticProps() {
  const services = getServices();

  const groupedServices = getGroupedServices(services);
  return {
    props: {
      groupedServices,
      data: servicesData
    },
  };
}