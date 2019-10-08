const products = require("../products.json");

let getProduct = (req, res) => {
    const singleProduct = products.find(val => val.id === parseInt(req.params.id));
    if (!singleProduct) {
        return res.status(500).send(`No results found for item "${id}" `);
    }
    res.status(200).send(singleProduct);
}

module.exports = getProduct;