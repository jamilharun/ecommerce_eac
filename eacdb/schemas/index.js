import cart from "./documents/cart";
import categories from "./documents/categories";
import order from "./documents/order";
import product from "./documents/product";
import user from "./documents/user";
import imagesObject from "./objects/imagesObject";

export const schemaTypes = [
    // document
    user, product, order, cart, categories,

    // object
    imagesObject
]
