import Layout from "@/components/layout/Layout"
import Team from "@/components/sections/innerpages/Team"
import PageTitle from "@/components/sections/PageTitle"

export default function PageTeam() {
  return (
    <>
    <Layout headerStyle={3} footerStyle={1}>
    <PageTitle pageName="Team List" />
    <Team />
    </Layout>
    </>
  )
}