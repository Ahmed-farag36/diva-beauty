"use client";
import Link from "next/link";
import { useState } from "react";
import menuData from "@/content/pages/header.json";

export default function MobileMenu({ groupedServices = {} }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleClick = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  
  return (
    <>
      <ul className="navigation clearfix">
        {menuData.menu.items.map((item, index) => (
          <li 
            key={index} 
            className={
              (item.submenu?.length > 0 || item.name === "Behandlungen") 
                ? "dropdown" 
                : ""
            }
          >
            <Link href={item.link}>{item.name}</Link>
            {item.name === "Behandlungen" ? (
              <>
                <ul style={{ display: `${isActive.key === index ? "block" : "none"}` }}>
                  {Object.entries(groupedServices).map(([category, services], catIndex) => (
                    <li key={category} className="dropdown">
                      <Link href={`/services#${category}`}>{category}</Link>
                      <ul style={{ display: `${isActive.key === `${index}-${catIndex}` ? "block" : "none"}` }}>
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link href={`/services/${service.slug}`}>
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="dropdown-btn" onClick={() => handleClick(`${index}-${catIndex}`)}>
                        <i className="fa fa-angle-down" />
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="dropdown-btn" onClick={() => handleClick(index)}>
                  <i className="fa fa-angle-down" />
                </div>
              </>
            ) : item.submenu?.length > 0 ? (
              <>
                <ul style={{ display: `${isActive.key === index ? "block" : "none"}` }}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
                <div className="dropdown-btn" onClick={() => handleClick(index)}>
                  <i className="fa fa-angle-down" />
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  );
}
