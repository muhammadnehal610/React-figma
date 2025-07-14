import type React from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product.interface";
import { products } from "../../data/products";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    const data = products.find((product) => product.id.toString() === id);
    setProduct(data);
  }, [id]);
  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
