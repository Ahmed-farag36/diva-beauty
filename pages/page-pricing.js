import Layout from "@/components/layout/Layout";
import Instagram1 from "@/components/sections/Instagram1"
import PageTitle from "@/components/sections/PageTitle";
import Pricing1 from "@/components/sections/Pricing1";
import homeData from "@/content/pages/home.json"
import data from "@/content/pages/pricing.json"

export default function PagePricing() {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1}>
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
