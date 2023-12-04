export const fetchUserbyUid = (uid) => {
    const userData = `*[_id == '${uid}']{
        _id,
        email,
        password
        }`;
        return userData;
}

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


export const createCartFile = (uuid, userId, prodId, prodPrice, quantity, total) => {
    const cartFileInput = {
        _id: uuid,
        saveBy: {
            _type: 'reference',
            _ref: userId,
        },
        productSaved: {
            _type: 'reference',
            _ref: prodId,
        },
        _type: 'cart',
        price: prodPrice,
        quantity: quantity,
        total: total,
    };
    return cartFileInput;
}

export const fetchingUserCart = (userId) => {
    const cartbyUser = `*[_type == 'cart' && saveBy->_id == '${userId}']{
        _id,
        productSaved->{
            _id,
            image,  
        },
        saveBy->{
            _id,
            image,
        },
        total,
        quantity,
        price,  
        _createdAt
    }`
    return cartbyUser;
}