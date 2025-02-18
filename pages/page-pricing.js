import Layout from "@/components/layout/Layout";
import Instagram1 from "@/components/sections/Instagram1"
import PageTitle from "@/components/sections/PageTitle";
import Pricing1 from "@/components/sections/Pricing1";
import homeData from "@/content/pages/home.json"
import { getServices, getGroupedServices } from "@/utils/getServices";
import pricingData from "@/content/pages/pricing.json"

export default function PagePricing({ groupedServices, data }) {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
        <PageTitle 
          pageName={data.pageTitle.title} 
          breadcrumb={data.pageTitle.breadcrumb}
          bgImage={data.pageTitle.bgImage}
        />
        <div id="plans">
          {data.pricingSections.map((section, index) => (
            <Pricing1 key={index} data={{ pricing: section }} />
          ))}
        </div>
        <Instagram1 data={homeData} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const services = getServices();
  const groupedServices = getGroupedServices(services);
  return {
    props: { groupedServices, data: pricingData },
  };
}