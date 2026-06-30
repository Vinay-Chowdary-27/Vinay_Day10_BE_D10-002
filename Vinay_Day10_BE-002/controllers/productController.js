const db = require("../config/db");

exports.getProducts = async (req, res) => {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows);
};

exports.createProduct = async (req, res) => {
    const { product_name, price, quantity } = req.body;

    await db.query(
        "INSERT INTO products(product_name,price,quantity) VALUES($1,$2,$3)",
        [product_name, price, quantity]
    );

    res.send("Product Added");
};

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { product_name, price, quantity } = req.body;

    await db.query(
        "UPDATE products SET product_name=$1,price=$2,quantity=$3 WHERE id=$4",
        [product_name, price, quantity, id]
    );

    res.send("Product Updated");
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    await db.query(
        "DELETE FROM products WHERE id=$1",
        [id]
    );

    res.send("Product Deleted");
};