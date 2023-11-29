export const fetchProductByCategory = (category) => {
    const fetchProductQuery = `*[_type == 'product' && 
        category == '${category}']{
            _id,
            name,
            category,
            description,
            price,
            image,
        }`;
        return fetchProductQuery;
};

export const fetchProduct = `*[_type == 'product']{
            _id,
            name,
            category,
            description,
            price,
            image,
        }`;