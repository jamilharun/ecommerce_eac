export const fetchProductByCategory = (category) => {
    const fetchProductQuery = `*[_type == 'product' && 
        category == '${category}']{
            _id,
            name,
            category,
            description,
            price,
            image{
                asset{
                    _ref
                }
            }
        }`;
        return fetchProductQuery;
};