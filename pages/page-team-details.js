import Layout from "@/components/layout/Layout"
import TeamDetails from "@/components/sections/innerpages/TeamDetails"
import PageTitle from "@/components/sections/PageTitle"

export default function PageTeam() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Team Details" />
    <TeamDetails />
    </Layout>
    </>
  )
}