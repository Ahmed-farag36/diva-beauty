"use client";
import Link from "next/link";
import { useState } from "react";

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
        {/*Keep This Empty / Menu will come through Javascript*/}
        <li>
          <Link href="/">Home</Link>
        </li>

        <li className="dropdown">
          <Link href="/page-services">Services</Link>
          <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
            <li>
              <Link href="/page-services">Services Grid</Link>
            </li>
            <li>
              <Link href="/page-service-details">Service Details</Link>
            </li>
          </ul>
          <div className="dropdown-btn" onClick={() => handleClick(2)}>
            <i className="fa fa-angle-down" />
          </div>
        </li>

        <li>
          <Link href="/page-pricing">Preise</Link>
        </li>
        <li>
          <Link href="/page-team-details">Über uns</Link>
        </li>
        <li>
          <Link href="/page-contact">Kontakt</Link>
        </li>
      </ul>
    </>
  );
}
