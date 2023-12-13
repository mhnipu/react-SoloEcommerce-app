import React from 'react';
import useFetch from '../hooks/useFetch';
import CategoryNav from '../components/CategoryNav';
import { useLocation } from 'react-router-dom';
import Product from '../components/Product';

const Search = () => {
  // Accessing the current location to extract search parameters
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('query');

  // Fetching data based on the search term
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );

  return (
    <div className="mb-[30-px] pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px] mb-6">
          {/* Render the CategoryNav component */}
          <CategoryNav />
          <div>
            <div className="py-3 text-xl text-left lg:text-left xl:pt-0 pb-4">
              {/* Display search result information */}
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
            {/* Display products based on search results */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return (
                  <div key={product.id}>
                    {/* Render each product using the Product component */}
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
