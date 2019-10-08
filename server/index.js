const express = require("express");
const products = require("../products.json");
const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const getProductName = require("./getProductName");


const app = express();
const port = 31216;

app.get("/api/products", getProducts);

app.get("/api/product/name", getProductName);

app.get("/api/product/:id", getProduct);



app.listen(port, () => {
    console.log(`Running on Port: ${port}`);
});

