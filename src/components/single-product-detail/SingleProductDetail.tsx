import type React from "react";
import type { Product } from "../../types/product.interface";
import "./SignleProductDetail.scss";
import { useState } from "react";
import Rating from "../rating/Rating";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Props {
  product: Product;
}

const SingleProductDetail: React.FC<Props> = ({ product }) => {
  const [activeImage, setActiveImage] = useState(product.image[0]);
  const [activeVariationSize, setActiveVariationSize] = useState(
    product.variations[0]
  );
  const [activeVariationColor, setActiveVariationColor] = useState(
    product.colors[0]
  );

  const [activeTab, setActiveTab] = useState(0); // 0 = first tab active initially
  const tabs = ["Description", "Additional Information", "Reviews"];

  // Remove HTML tags and create short text
  const plainText = product.description.replace(/<[^>]+>/g, " ");
  const shortText =
    plainText.split(/\s+/).slice(0, 50).join(" ") +
    (plainText.split(/\s+/).length > 50 ? "..." : "");
  return (
    <section>
      <div className="product-area-container pt-2">
        <div className="flex product-detail-parent">
          {/* LEFT: Images */}
          <div className="flex gap-2 col-50 justify-center">
            <div className="flex flex-col gap-2">
              {product.image.map((img, ind) => (
                <img
                  className="side-image br-md"
                  key={ind}
                  src={img}
                  alt={product.name}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
            <div>
              <img
                className="main-image br-md"
                src={activeImage}
                alt={product.name}
              />
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="col-50">
            <div className="flex flex-col pl-2">
              <div className="flex flex-col gap-1 product-detail col-85">
                <h2 className="m-0 fs-40 font-weight-400 lh-1">
                  {product.name}
                </h2>
                <p className="m-0 fs-xl font-weight-500 lh-1 secondary-text-color">
                  {product.price}
                </p>

                <div className="flex gap-1 align-center">
                  <Rating rating={product.averageRating} />
                  <span className="secondary-text-color fs-xl">|</span>
                  <p className="m-0 secondary-text-color">
                    {product.reviews.length} Customer Reviews
                  </p>
                </div>

                {/* Description Preview */}
                <div className="m-0 fs-sm">
                  <p>{shortText}</p>
                </div>

                {/* Variations */}
                <div className="flex flex-col gap-1">
                  <span className="fs-sm secondary-text-color">Size</span>
                  <div className="flex gap-1">
                    {product.variations.map((v, key) => (
                      <span
                        className={`veriation-size fs-sm ${
                          activeVariationSize === v ? "active" : ""
                        }`}
                        key={key}
                        onClick={() => setActiveVariationSize(v)}
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="fs-sm secondary-text-color">Color</span>
                  <div className="flex gap-1">
                    {product.colors.map((c, key) => (
                      <div
                        key={key}
                        style={{
                          backgroundColor: c.replace(/\s+/g, "").toLowerCase(),
                        }}
                        className={`veriation-color fs-sm ${
                          activeVariationColor === c ? "active" : ""
                        }`}
                        onClick={() => setActiveVariationColor(c)}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="action-btns flex gap-1">
                  <div className="quintity-container">
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                  </div>
                  <button>Add To Cart</button>
                  <button>+ Compare</button>
                </div>
              </div>

              {/* Product Meta Info */}
              <div className="flex gap-1 secondary-text-color pt-3">
                <div className="flex flex-col fs-base gap-1">
                  <span>SKU</span>
                  <span>Category</span>
                  <span>Tags</span>
                  <span>Share</span>
                </div>
                <div className="flex flex-col fs-base gap-1">
                  <span>:</span>
                  <span>:</span>
                  <span>:</span>
                  <span>:</span>
                </div>
                <div className="flex flex-col fs-base gap-1">
                  <p className="m-0">{product.sku}</p>
                  <p className="m-0">{product.category}</p>
                  <p className="m-0">{product.tags.join(", ")}</p>
                  <div className="flex gap-1">
                    <FaFacebook />
                    <FaLinkedin />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-col align-center secondary-text-color col-70 m-auto text-justify pt-3">
          <div className="flex justify-center gap-3 fs-xl">
            {tabs.map((tab, index) => (
              <span
                key={index}
                className={`info-tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Tab Content */}
          <div id="description-tab" className="pt-2">
            {activeTab === 0 && (
              <div
                className="tab-content"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}
            {activeTab === 1 && (
              <div className="tab-content">
                Additional Information coming soon...
              </div>
            )}
            {activeTab === 2 && (
              <div className="tab-content">Reviews section here...</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductDetail;
