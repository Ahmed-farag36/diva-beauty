import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import PriceComponent from "./components/PriceComponent";
import AcademyComponent from "../src/components/AcademyComponent";
import ServicesComponent from "../src/components/ServicesComponent";
import GaleryComponent from "./components/GaleryComponent";
import AcademyPage from "./components/AcademyPage";
import ServicePage from "./components/ServicePage";

export const componentsMap = {
  startseite: {
    component: HomeComponent,
    props: {},
  },
  about: {
    component: AboutComponent,
    props: {},
  },
  pricing: {
    component: PriceComponent,
    props: {},
  },
  akademie: {
    component: AcademyComponent,
    props: {},
  },
  behandlungen: {
    component: ServicesComponent,
    props: {},
  },
  gallery: {
    component: GaleryComponent,
    props: {},
  },
  "academy-courses": {
    component: AcademyPage,
    props: {},
  },
  services: {
    component: ServicePage,
    props: {},
  },
};
