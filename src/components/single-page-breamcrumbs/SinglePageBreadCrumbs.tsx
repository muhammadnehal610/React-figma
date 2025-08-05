import React from "react";
import "./SinglePageBreadCrumbs.css";
import { Link, useLocation } from "react-router-dom";
import type { Product } from "../../types/product.interface";

interface Props{
    product : Product
}

const SinglePageBreab: React.FC<Props> = ({product}) => {
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
    <>
      <section>
        <div className="single-page-bread-container flex align-center">
          <div className="flex align-center gap-1 px-6">
            <Link
              to={"/"}
              className="font-weight-300 link text-line-none fs-base"
            >
              Home
            </Link>
            {breadcrumbs.map((crumbs, index) => (
              <React.Fragment key={crumbs.path}>
                <span className="fs-xl">{">"}</span>
                {index === breadcrumbs.length - 1 ? (
                  <span className="font-weight-300 text-black fs-base">
                    {product.name}
                  </span>
                ) : (
                  <Link
                    to={crumbs.path}
                    className="font-weight-300 text-line-none link fs-base"
                  >
                    {crumbs.name}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePageBreab;
