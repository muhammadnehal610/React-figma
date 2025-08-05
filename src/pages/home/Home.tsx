import React from "react";
import "./Home.css";
import Hero from "../../components/hero/Hero";
import Catelog from "../../components/catelog/Catelog";
import ProductCard from "../../components/product-card/ProductCard";
import { products } from "../../data/products";
import HeroCarousel from "../../components/heroCarousel/HeroCarousel";
import Grid from "../../components/grid/Grid";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const limitIndex = products.findIndex((product) => product.id === 9);
  const visibleProducts =
    limitIndex !== -1 ? products.slice(0, limitIndex) : products;
  return (
    <>
      <Hero />
      <Catelog />
      <section>
        <div className="product-card-container flex flex-col align-center pb-2">
          <h1 className="m-0 py-2 font-weight-700 fs-40 ">Our Products</h1>
          <div className="flex flex-wrap justify-center gap-2">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Link
            to={"/shop"}
            className="text-line-none show-more-btn px-5 py-1 my-2 fs-base font-weight-600"
          >
            Show More
          </Link>
        </div>
      </section>
      <HeroCarousel />
      <Grid />
    </>
  );
};

export default Home;
