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

export const userDatabyId = (_id) => {
    const userDataQuery = `*[_type == 'user' && _id == '${_id}']{
        _id,
        fname,
        lname,
        email,
        phoneNumber,
        courseSection,

    }`;
    return userDataQuery;

}