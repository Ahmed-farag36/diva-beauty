import HomeComponent from "@/pages/index";
import PriceComponent from "@/pages/page-pricing";
import ContactComponent from "@/pages/page-contact";
import ServicesOverviewComponent from "@/pages/services/index";
import ServiceDetailsComponent from "@/pages/services/[slug]";
import TeamDetailsComponent from "@/pages/page-team-details";
import HeaderComponent from "@/components/layout/Header1";
import FooterComponent from "@/components/layout/Footer1";

export const componentsMap = {
  home: {
    component: HomeComponent,
    props: {},
  },
  pricing: {
    component: PriceComponent,
    props: {},
  },
  contact: {
    component: ContactComponent,
    props: {},
  },
  "services-overview": {
    component: ServicesOverviewComponent,
    props: {},
  },
  "services": {
    component: ServiceDetailsComponent,
    props: {},
  },
  "team-details": {
    component: TeamDetailsComponent,
    props: {},
  },
  "header": {
    component: HeaderComponent,
    props: {},
  },
  "footer": {
    component: FooterComponent
  }
};