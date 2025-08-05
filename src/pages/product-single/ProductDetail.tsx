import type React from "react";
import "./ProductDetail.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product.interface";
import { products } from "../../data/products";
import SinglePageBreab from "../../components/single-page-breamcrumbs/SinglePageBreadCrumbs";
import SingleProductDetail from "../../components/single-product-detail/SingleProductDetail";
import ProductCard from "../../components/product-card/ProductCard";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const currentProduct = products.find((p) => p.id.toString() === id);
    setProduct(currentProduct);

    if (currentProduct) {
      // Filter products that share at least one tag with current product
      const related = products
        .filter(
          (p) =>
            p.id !== currentProduct.id &&
            p.tags.some((tag) => currentProduct.tags.includes(tag))
        )
        .slice(0, 4); // limit to 4
      setRelatedProducts(related);
    }
  }, [id]);

  return (
    <div className="mb-2">
      {product ? (
        <div>
          <SinglePageBreab product={product} />
          <SingleProductDetail product={product} />

          <div className="flex justify-center gap-2">
            {relatedProducts.length > 0 && (
              <section className="related-products mt-4 flex flex-col align-center">
                <h2 className="fs-2xl font-weight-600 mb-2 text-center">
                  Related Products
                </h2>
                <div className="grid grid-cols-4 flex  gap-2">
                  {relatedProducts.map((relatedProduct) => (
                    <ProductCard
                      key={relatedProduct.id}
                      product={relatedProduct}
                    />
                  ))}
                </div>
                <Link
                  to={"/shop"}
                  className="text-line-none show-more-btn px-5 py-1 my-3 fs-base font-weight-600"
                >
                  Show More
                </Link>
              </section>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
