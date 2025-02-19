import Layout from "@/components/layout/Layout"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"
import PageTitle from "@/components/sections/PageTitle"
import { getServices, getGroupedServices } from "@/utils/getServices";
import teamDetails from "@/content/pages/page-team-details.json";
import headerData from "@/content/pages/header.json";
import footerData from "@/content/pages/footer.json";

export default function PageTeam({ data, groupedServices }) {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices} headerData={headerData} footerData={footerData}>
    <PageTitle pageName={data.pageTitle.title} breadcrumb={data.pageTitle.breadcrumb} bgImage={data.pageTitle.bgImage} />
    <div style={{ marginTop: '3rem' }}>
      <TeamDetails teamData={data} />
    </div>
    </Layout>
    </>
  )
}

export async function getStaticProps() {
  const services = getServices();
  const groupedServices = getGroupedServices(services);
  return {
    props: { groupedServices,
      data: teamDetails
     }
  };
}