import type React from "react";
import "./ProductCard.css";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import type { Product } from "../../types/product.interface";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <>
      <article>
        <div className="flex flex-col product-container">
          <img
            src={product.image[1]}
            alt="Syltherine"
            className="product-image"
          />
          <div className="flex flex-col px-1 pt-1 pb-2 meta-data">
            <h2 className="m-0 fs-xl font-weight-600 meta-data-color-primery">
              {product.name}
            </h2>
            <h3 className="m-0 fs-base font-weight-500 meta-data-color-secondary">
              {product.subtitle}
            </h3>
            <div className="flex align-center justify-between">
              <span className="fs-lg font-weight-600 meta-data-color-primery">
                Rp {product.price.toLocaleString("id-ID")}
              </span>
              {product.originalPrice && (
                <del className="fs-base font-weight-400 meta-data-color-secondary">
                  Rp {product.originalPrice.toLocaleString("id-ID")}
                </del>
              )}
            </div>
          </div>

          <Link
            to={`/shop/${product.id}`}
            className="text-line-none flex flex-col justify-center align-center product-overlay gap-1"
            style={{ zIndex: 2 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                alert("hello");
              }}
              className=" add-to-cart-btn fs-base font-weight-600 px-4 py-1"
            >
              Add to cart
            </button>
            <div className="flex align-center text-white gap-1 fs-base">
              <span className="flex align-center gap-05">
                <CiShare2 /> Share
              </span>
              <span className="flex align-center gap-05">
                <MdOutlineCompareArrows /> Compare
              </span>
              <span className="flex align-center gap-05">
                <FaRegHeart />
                Like
              </span>
            </div>
          </Link>
        </div>
      </article>
    </>
  );
};

export default ProductCard;
