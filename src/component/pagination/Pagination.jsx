import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const LIMIT = 10;

function Pagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [noOfPages, setNoOfPages] = useState(0);
  const fetchProducts = async () => {
    //0-0
    //1-10 in page 1 skip from 1 to 10 data
    //2-20
    const data = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        LIMIT * currentPage
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const json = await data.json();
    // console.log(Math.floor(json.total/LIMIT));
    setProducts(json.products);
    setNoOfPages(Math.floor(json.total / LIMIT));
  };
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);
  return (
    <>
      <div className="flex flex-wrap">
        {products.map((product) => {
          return <ProductCard key={product.id} {...product} />;
          //   return <h1>{product.title}</h1>
        })}
      </div>
      <div className="p-10 cursor-pointer">
        <span>
         {currentPage>0 && ( <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </span>)}
          {[...Array(noOfPages).keys()]?.map((data) => (
            <span
              className={
                "text-xl p-4 " + (data === currentPage && "font-bold underline")
              }
              key={data}
              onClick={() => {
                setCurrentPage(data);
              }}
            >
              {data + 1}
            </span>
          ))}
          {
           currentPage<noOfPages-1 && <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </span>
          }
        </span>
      </div>
    </>
  );
}

export default Pagination;





