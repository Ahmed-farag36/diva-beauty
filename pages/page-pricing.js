import Layout from "@/components/layout/Layout";
import Instragram from "@/components/sections/innerpages/Instragram";
import PageTitle from "@/components/sections/PageTitle";
import Pricing1 from "@/components/sections/Pricing1";
import data from "@/content/pages/home.json"
import { getServices, getGroupedServices } from "@/utils/getServices";

export default function PagePricing({ groupedServices }) {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
        <PageTitle pageName="Pricing Table" />
        <Pricing1 data={data} />
        <Pricing1 data={data} />
        <Pricing1 data={data} />
        <Pricing1 data={data} />
        <Instragram />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const services = getServices();
  const groupedServices = getGroupedServices(services);
  return {
    props: { groupedServices },
  };
}