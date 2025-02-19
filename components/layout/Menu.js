import Link from "next/link";

export default function Menu({ groupedServices = {}, menuData }) {
  
  return (
    <ul className="navigation">
      {menuData.menu.items.map((item, index) => (
        <li key={index} className={
          (item.submenu?.length > 0 || item.name === "Behandlungen") ? "dropdown" : ""
        }>
          <Link href={item.link}>
            {item.name}
            {(item.submenu?.length > 0 || item.name === "Behandlungen") && 
              <span className="dropdown-btn fa fa-angle-down"></span>
            }
          </Link>
          
          {item.name === "Behandlungen" ? (
            <ul>
              {Object.entries(groupedServices).map(([category, services]) => (
                <li key={category} className="dropdown"> 
                  <Link href={`/services#${category}`} style={{ margin: "0 20px" }}>
                    {category}
                    <span className="dropdown-btn fa fa-angle-down"></span>
                  </Link>
                  <ul>
                    {services.map((service) => (
                      <li key={service.title}>
                        <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : item.submenu?.length > 0 ? (
            <ul>
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.link}>{subItem.name}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
