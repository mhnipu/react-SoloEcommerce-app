import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';

const ProductPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useFetch(`/products/${id}`);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!data) {
        return <div>No product found</div>;
    }

    return (
        <div>
            <ProductDetails product={data} />
            <RelatedProducts categoryTitle={data.attributes.categories.data[0].attributes.title} currentProductId={id} />
        </div>
    );
};

export default ProductPage;
