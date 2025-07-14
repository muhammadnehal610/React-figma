import type React from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import ShopArchived from "../../components/shop-archived/ShopArchived";
import { products } from "../../data/products";
import Marque from "../../components/Marque/Marque";

const Shop: React.FC = () => {
  return (
    <>
      <BreadCrumbs />
      <ShopArchived products={products} />
      <Marque />
    </>
  );
};

export default Shop;
