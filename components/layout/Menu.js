import Link from "next/link";
import menuData from "@/content/pages/header.json";

export default function Menu() {
  return (
    <ul className="navigation">
      {menuData.menu.items.map((item, index) => (
        <li key={index} className={item.submenu?.length > 0 ? "dropdown" : ""}>
          <Link href={item.link}>
            {item.label}
            {item.submenu?.length > 0 && <span className="dropdown-btn fa fa-angle-down"></span>}
          </Link>
          {item.submenu?.length > 0 && (
            <ul>
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <Link href={subItem.link}>{subItem.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
