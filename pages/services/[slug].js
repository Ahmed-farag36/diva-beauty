import Layout from "@/components/layout/Layout"
import PageTitle from "@/components/sections/PageTitle"
import ServiceDetails from "@/components/sections/innerpages/ServiceDetails"
import { getServices, getGroupedServices } from "@/utils/getServices"

export default function PageServiceDetails({ data, groupedServices }) {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} groupedServices={groupedServices}>
        <PageTitle pageName={data.pageTitle.title} breadcrumb={data.pageTitle.breadcrumb} bgImage={data.pageTitle.bgImage} />
        <ServiceDetails serviceData={data} />
      </Layout>
    </>
  )
}

// Generate paths for all services at build time
export async function getStaticPaths() {
  const services = getServices()
  
  const paths = services.map((service) => ({
    params: { slug: service.slug || service.title.toLowerCase().replace(/ /g, '-') },
  }))

  return {
    paths,
    fallback: false, // Show 404 for non-existing slugs
  }
}

// Fetch service data at build time
export async function getStaticProps({ params }) {
  const services = getServices()
  const service = services.find(
    (s) => (s.slug || s.title.toLowerCase().replace(/ /g, '-')) === params.slug
  )

  const groupedServices = getGroupedServices(services);

  if (!service) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: service,
      groupedServices,
    },
  }
} 