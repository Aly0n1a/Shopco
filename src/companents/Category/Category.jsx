import React from "react";
import s from "./Category.module.scss";
import SectionTitle from "../SectionTitle/SectionTitle";
import Card from "../Card/Card";
import Products from '/public/products.json'

const Category = () => {
  return (
    <>
      <section className={s.category}>
        <div className="container">
            <SectionTitle>NEW ARRIVALS</SectionTitle>
              </div>
          <div className={s.wrapper}>
            
                {Products.slice(0, 4).map(card => (
                    <Card key={card.id} image={card.image} name={card.name} price={card.price} />

                ))}

     
          </div>
          <SectionTitle className={s.title}>TOP SELLING</SectionTitle>
          <div className={s.wrapper}>
            
            {Products.slice(4, 8).map(card => (
                <Card key={card.id} image={card.image} name={card.name} price={card.price} />

            ))}

 
      </div>
      </section>
    </>
  );
};

export default Category;
