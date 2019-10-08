const products = require("../products.json");

const getProductName = (req, res) => {
    if (req.query.product_name) {
        const nameFilteredItems = products.filter( val => val.product_name[/ /i] === (req.query.product_name));
        return res.status(200).send(nameFilteredItems);
    }
    res.status(200);
};

module.exports = getProductName;