import Layout from "@/components/layout/Layout";
import Services from "@/components/sections/innerpages/Services";
import PageTitle from "@/components/sections/PageTitle";
import Testimonial1 from "@/components/sections/Testimonial1";
import Link from "next/link";
import Instagram1 from "@/components/sections/Instagram1";
import servicesData from "@/content/pages/services.json";
import homeData from "@/content/pages/home.json";
import { getServices } from "@/utils/getServices";

export default function PageServices({ groupedServices, data }) { 
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
        <PageTitle pageName={data.pageTitle.title} bgImage={data.pageTitle.bgImage} breadcrumb={data.pageTitle.breadcrumb} />
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

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    const { category } = service;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {});

  return {
    props: {
      groupedServices,
      data: servicesData,
    },
  };
}