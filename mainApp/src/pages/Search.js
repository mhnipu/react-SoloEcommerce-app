import React from 'react';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import { useLocation } from 'react-router-dom';
import Product from '../components/Product';

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );

  return (
    <div className="mb-[30-px] pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <div>
            <div className="py-3 text-xl text-left lg:text-left xl:pt-0 pb-4">
              {data?.length > 0 ? (
                <>
                  <span className="text-accent">{data.length}</span> result for{' '}
                  <span className="text-accent uppercase">{searchTerm}</span>
                </>
              ) : (
                <>
                  no results found for{' '}
                  <span className="text-accent uppercase">{searchTerm}</span>
                </>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return (
                  <div key={product.id}>
                    <Product product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
