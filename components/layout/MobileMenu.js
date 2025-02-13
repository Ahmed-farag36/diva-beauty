"use client";
import Link from "next/link";
import { useState } from "react";
import menuData from "@/content/pages/header.json";

export default function MobileMenu() {
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
          <li key={index} className={item.submenu?.length > 0 ? "dropdown" : ""}>
            <Link href={item.link}>{item.name}</Link>
            {item.submenu?.length > 0 && (
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
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
