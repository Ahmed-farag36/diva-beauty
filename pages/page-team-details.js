import Layout from "@/components/layout/Layout"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"
import PageTitle from "@/components/sections/PageTitle"
import { getServices, getGroupedServices } from "@/utils/getServices";

export default function PageTeam({ groupedServices }) {
  return (
    <>
    <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
    <PageTitle pageName="Team Details" />
    <div style={{ marginTop: '3rem' }}>
      <TeamDetails/>
    </div>
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