import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BreadCrumbs.css";

const BreadCrumbs: React.FC = () => {
  const location = useLocation();

  const pathParts = location.pathname.split("/").filter((part) => part !== "");

  const breadcrumbs = pathParts.map((part, index) => {
    const path = "/" + pathParts.slice(0, index + 1).join("/");
    const name = part.charAt(0).toUpperCase() + part.slice(1);

    return {
      name,
      path,
    };
  });

  return (
    <section>
      <div className="bread-crumbs-container flex justify-center align-center">
        <div className="bread-crumbs flex flex-col align-center z-10">
          <h2 className="m-0 fs-4xl font-weight-500 lh-1-2">
            {breadcrumbs[breadcrumbs.length - 1]?.name || "Home"}
          </h2>
          <div className="flex align-center gap-05 fs-base font-weight-500 bread-crumbs-links">
            <Link to="/" className="text-line-none text-black">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                <span className="fs-lg">{">"}</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-weight-300 text-black">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="font-weight-300 text-line-none text-black"
                  >
                    {crumb.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="bg-image-overlay" />
      </div>
    </section>
  );
};

export default BreadCrumbs;
