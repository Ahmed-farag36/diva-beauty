import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/innerpages/Services";
import PageTitle from "@/components/sections/PageTitle";
import Testimonial1 from "@/components/sections/Testimonial1";
import Link from "next/link";
import Instagram1 from "@/components/sections/Instagram1";
import data from "@/content/pages/home.json";
import services from "@/content/pages/services.json";
import { getServices, getGroupedServices } from "@/utils/getServices";

export default function PageServices({ groupedServices }) {
  return (
    <> 
      <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
        <PageTitle pageName={services.pageTitle.title} breadcrumb={services.pageTitle.breadcrumb} bgImage={services.pageTitle.bgImage} />
        {Object.keys(groupedServices).map((category) => (
            <Services key={category[0]} services={groupedServices[category]} />
        ))}
        <Instagram1 data={data} />
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
    },
  };
}