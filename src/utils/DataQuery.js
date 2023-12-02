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
        image,
        phoneNumber,
        courseSection,
    }`;
    return userDataQuery;
}

export const uploadImage = (uid, _id) => {
    const userPicQuery =  `*[_type == 'user' && _id == '${uid}']{
        _id: '${uid}'
        image: {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: '${_id}'
            }
        }
    }`;
    return userPicQuery
}


export const createCartFile = (userId, prodId, prodPrice, quantity, total) => {
    const cartFileInput = `*[_type == 'cart']{
        _id,
        saveBy: {
            _type: 'reference',
            _ref: '${userId}',
        },
        productSave: {
            _type: 'reference',
            _ref: '${prodId}',
        },
        _type: 'cart',
        price: ${prodPrice},
        quantity: ${quantity},
        total: ${total},
        _createdAt,
        }`;
        return cartFileInput;
}   