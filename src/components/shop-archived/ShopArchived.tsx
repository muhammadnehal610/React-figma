import type React from "react";
import "./ShopArchived.css";
import filterIcon from "../../assets/filter-icon.svg";
import { BsFillGridFill } from "react-icons/bs";
import { BsViewList } from "react-icons/bs";
import type { Product } from "../../types/product.interface";
import ProductCard from "../product-card/ProductCard";
import { useState } from "react";

interface Props {
  products: Product[];
}
const ShopArchived: React.FC<Props> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  return (
    <>
      <section>
        <div className="shop-archived-container mb-4">
          <div className="shop-filter flex justify-between align-center">
            <div className="flex align-center gap-2">
              <div className="flex align-center gap-05 ">
                <img src={filterIcon} className="fs-lg" />
                <span className="fs-lg">Filter</span>
              </div>

              <BsFillGridFill className="fs-lg" />
              <BsViewList className="fs-lg" />

              <p className="m-0 fs-base filter-text pl-2 py-1">
                Showing {startIndex + 1} - {Math.min(endIndex, products.length)}{" "}
                of {products.length} results
              </p>
            </div>
            <div className="flex gap-2 fs-lg">
              <div className="flex gap-1 align-center">
                <span>Show</span>
                <input
                  type="text"
                  placeholder="16"
                  disabled
                  className="filter-input filter-input-1 fs-lg text-center"
                />
              </div>
              <div className="flex gap-1 align-center">
                <span>Sort by</span>
                <input
                  type="text"
                  placeholder="Default"
                  disabled
                  className="filter-input filter-input-2 fs-lg px-2"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="pagination-container">
          <div className="flex align-center justify-center my-4 gap-2 fs-md">
            <ul className="line-none flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  key={i + 1}
                  className={`pagination-btn br-md flex-center ${
                    currentPage === i + 1 ? "pagination-btn-active" : ""
                  }`}
                  onClick={() => handlePageClick(i + 1)}
                >
                  {i + 1}
                </li>
              ))}
            </ul>
            {currentPage < totalPages && (
              <button
                onClick={handleNextClick}
                className="pagination-btn pagination-btn-next br-md fs-md flex-center"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopArchived;
