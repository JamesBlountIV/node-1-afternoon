const products = require("../products.json");

const getProducts = (req, res) => {
    if (req.query.price) {
        const priceFilteredItems = products.filter( val => val.price >= parseInt(req.query.price));
        return res.status(200).send(priceFilteredItems);
    }
    res.status(200).send(products);
};

module.exports = getProducts;