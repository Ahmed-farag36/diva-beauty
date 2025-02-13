import Link from "next/link";
import React from "react";

const PageTitle = ({ pageName, breadcrumb = [], bgImage = "" }) => {
  return (
    <section className="page-title" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{pageName}</h1>
          <div className="image-curve"></div>
          <ul className="page-breadcrumb">
            {breadcrumb.map((item, index) => (
              <li key={index}>
                <Link href={item.url}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;