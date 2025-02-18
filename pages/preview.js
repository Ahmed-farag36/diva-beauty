import { useState, useEffect } from "react";
import { getServices, getGroupedServices } from "@/utils/getServices";
import { componentsMap } from "@/components/componentmapping";
const PreviewPage = ({groupedServices}) => {
  const [previewData, setPreviewData] = useState(null);

  useEffect(() => {
    const fetchPreviewData = () => {
      let current = window;
      let n = 0;
      let data = null;

      while (current.parent && n < 10) {
        current = current.parent;
        n += 1;
        if (current.previewDataCMS) {
          data = current.previewDataCMS;
        }
      }
      return data;
    };

    const interval = setInterval(() => {
      const data = fetchPreviewData();
      if (data) {
        setPreviewData(JSON.parse(JSON.stringify(data)));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const componentData = componentsMap[previewData?.type];

  if (!componentData) {
    return <p>Keine Vorschau verfügbar für diese Seite.</p>;
  }

  const { component: ComponentToRender, props } = componentData;

  const enhancedProps = {
    ...props,
    data: previewData,
    groupedServices
  };

  return <>{<ComponentToRender {...enhancedProps} />}</>;
};

export default PreviewPage;

export async function getStaticProps() {
  const services = getServices();
  const groupedServices = getGroupedServices(services);
  return {
    props: { groupedServices },
  };
}